import DeleteModal from "./DeleteModal";
import ModalLayout from "./ModalLayout";
import { deleteMediaAttachmentMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const AttachedMediaRender = ({ media, product_refetch }) => {
  const [show, setShow] = React.useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: "delete-attachment",
    mutationFn: deleteMediaAttachmentMutation,
  });

  const hideModal = () => {
    setShow(false);
  };
  const deleteAttachment = () => {
    mutate(
      { attachmentId: media.attachment_id },
      {
        onSuccess: () => {
          toast.success("Attachment deleted successfully");
          product_refetch();
          hideModal();
        },
        onError: () => {
          toast.error("Error deleting attachment");
        },
      }
    );
  };
  return (
    <>
      <DeleteModal
        show={show}
        handleDelete={deleteAttachment}
        isPending={isPending}
        hideModal={hideModal}
        title="Attachment"
      />
      <div className="relative group">
        <Image
          src={media.url}
          alt={media.title}
          className="object-cover w-20 h-20"
          width={80}
          height={80}
        />
        <div className="absolute top-0 right-0 items-center justify-center hidden w-full h-full group-hover:flex bg-black/25">
          <button
            className="text-red-500 rounded-md "
            onClick={() => setShow(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default AttachedMediaRender;
