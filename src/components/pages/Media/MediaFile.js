import { deleteMediaMutation, updateMediaMutation } from "@/resolvers/mutation";
import { formateDate } from "@/utils/common";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaFileZipper } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import Modal from "react-modal";

const MediaFile = ({ media, refetch }) => {
  const [copied, setCopied] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formState, setFormState] = useState({
    title: media.title,

    description: media.description,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "update-media",
    mutationFn: updateMediaMutation,
  });

  const { mutate: deleteMedia, isPending: deleteIsPending } = useMutation({
    mutationKey: "delete-media",
    mutationFn: deleteMediaMutation,
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(media.url);
    setCopied(true);
  };

  const updateMedia = () => {
    mutate(
      {
        variables: formState,
        media_id: media.id,
      },
      {
        onSuccess: (data) => {
          toast.success("Media updated successfully");
        },
        onError: (err) => {
          toast.error("Failed to update media");
        },
      }
    );
  };

  const deleteMediaHandler = () => {
    deleteMedia(
      {
        media_id: media.id,
      },
      {
        onSuccess: (data) => {
          setIsOpen(false);
          refetch();
          toast.success("Media deleted successfully");
        },
        onError: (err) => {
          toast.error("Failed to delete media");
        },
      }
    );
  };

  return (
    <>
      <div
        className="flex items-center justify-center cursor-pointer w-28 h-28"
        key={media.id}
        onClick={openModal}
      >
        {media.extension === "zip" ? (
          <div className="flex flex-col items-center justify-center w-full h-full gap-1 bg-gray-400 rounded-xl">
            <FaFileZipper className="w-10 h-12" />
            <p className="text-xs text-center">{media.extension}</p>
          </div>
        ) : media.extension === "pdf" ? (
          <div className="flex flex-col items-center justify-center w-full h-full gap-1 bg-gray-400 rounded-xl">
            <FaFilePdf className="w-10 h-12" />
            <p className="text-xs text-center">{media.extension}</p>
          </div>
        ) : (
          <Image
            src={media.url}
            width={150}
            height={150}
            alt={media.slug}
            className="object-cover w-full h-full rounded-lg max-h-32"
          />
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="transform -translate-x-1/2 -translate-y-1/2 bg-white border top-1/2 left-1/2 "
        style={{
          overlay: {
            background: "rgba(0,0,0,0.5)",
            position: "fixed",
            zIndex: 999999,
          },
          content: {
            width: "95%",
            height: "95%",
            zIndex: 999999,
            overflow: "hidden",
            top: "50%",
            left: "50%",
            position: "absolute",
          },
        }}
        contentLabel="Example Modal"
      >
        <div className="w-full h-full overflow-y-auto">
          <div className="flex items-center justify-between ">
            <div className="p-2 text-xl font-bold">
              <p className="">{media.title}</p>
            </div>
            <button
              className="flex items-center justify-center border w-14 h-14 hover:bg-gray-200"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr />
          <div className="grid grid-cols-12 min-h-[88vh]">
            <div className="flex justify-center col-span-12 p-3 pr-2 lg:col-span-6">
              {media.extension === "zip" ? (
                <div className="flex flex-col items-center justify-center w-full h-full gap-1 bg-gray-400 rounded-xl">
                  <FaFileZipper className="w-20 h-28" />
                  <p className="text-xs text-center">{media.extension}</p>
                </div>
              ) : media.extension === "pdf" ? (
                <div className="flex flex-col items-center justify-center w-full h-full gap-1 bg-gray-400 rounded-xl">
                  <FaFilePdf className="w-20 h-28" />
                  <p className="text-xs text-center">{media.extension}</p>
                </div>
              ) : (
                <Image
                  src={media.url}
                  width={700}
                  height={700}
                  alt={media.slug}
                  className="object-cover w-full h-full rounded-lg max-w-[700px] "
                />
              )}
            </div>

            <div className="col-span-12 p-3 bg-gray-200 lg:col-span-6">
              <div className="details">
                <p className="text-sm font-bold">
                  Title: <span className="font-normal">{media.title}</span>
                </p>
                <p className="text-sm font-bold">
                  Type: <span className="font-normal">{media.mime_type}</span>
                </p>
                <p className="text-sm font-bold">
                  Size: <span className="font-normal">{media.size}</span>
                </p>
                <p className="text-sm font-bold">
                  Created At:{" "}
                  <span className="font-normal">
                    {formateDate(media.created_at)}
                  </span>
                </p>
                <p className="text-sm font-bold">
                  Updated At:{" "}
                  <span className="font-normal">
                    {formateDate(media.updated_at)}
                  </span>
                </p>
              </div>
              <div className="mt-2 border-t border-white" />
              <div className="my-4 form ">
                <form action="" className="">
                  <div className="grid grid-cols-12 gap-2 mb-3">
                    <label
                      htmlFor="title"
                      className="col-span-4 text-sm font-bold justify-self-end"
                    >
                      Title
                    </label>

                    <div className="col-span-8">
                      <input
                        type="text"
                        className="form-control"
                        id="input"
                        name="title"
                        value={formState.title}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 mb-3">
                    <label
                      htmlFor="title"
                      className="col-span-4 text-sm font-bold justify-self-end"
                    >
                      Description
                    </label>

                    <div className="col-span-8">
                      <textarea
                        className="form-control "
                        id="text-area"
                        rows="2"
                        value={formState.description}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            description: e.target.value,
                          })
                        }
                        name="description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-2 mb-3">
                    <label
                      htmlFor="title"
                      className="col-span-4 text-sm font-bold justify-self-end"
                    >
                      File Url
                    </label>

                    <div className="col-span-8">
                      <input
                        type="text"
                        className="form-control"
                        id="input"
                        value={media.url}
                        readOnly
                      />
                      <div>
                        <button
                          type="button"
                          className="mt-3 ti-btn ti-btn-success ti-btn-wave"
                          onClick={copyUrl}
                        >
                          Copy Url
                        </button>
                        {copied && (
                          <span className="ml-3 text-green-500">Copied</span>
                        )}
                      </div>
                    </div>
                  </div>
                </form>

                <div className="mt-2 border-t border-white" />
                <div className="flex justify-end mt-3">
                  <button
                    type="button"
                    className="m-2 ti-btn ti-btn-danger-full ti-btn-loader"
                    onClick={deleteMediaHandler}
                  >
                    <span className="me-2">Delete</span>
                    {/*  <span className="loading">
                      <i className="ri-loader-2-fill text-[1rem] animate-spin"></i>
                    </span> */}
                  </button>
                  <button
                    type="button"
                    className="m-2 ti-btn ti-btn-primary-full ti-btn-loader"
                    onClick={updateMedia}
                  >
                    <span className="me-2">
                      {" "}
                      {isPending ? "Saving" : "Save"}{" "}
                    </span>
                    {isPending && (
                      <span className="loading">
                        <i className="ri-loader-2-fill text-[1rem] animate-spin"></i>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MediaFile;
