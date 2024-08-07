import DeleteModal from "@/components/ui/DeleteModal";
import useToastMessage from "@/hooks/useToastMessage";
import { deleteCategoryMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Delete = ({ refetch, category_id }) => {
  const showToastMessage = useToastMessage();
  const [show, setShow] = useState(false);

  const hideModal = () => setShow(false);
  const { mutate, isPending } = useMutation({
    mutationKey: "delete-category",
    mutationFn: deleteCategoryMutation,
  });

  const handleDelete = async () => {
    await mutate(
      { category_id },
      {
        onSuccess: () => {
          toast.success("Category deleted successfully");
          refetch();
          hideModal();
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  return (
    <>
      <DeleteModal
        show={show}
        hideModal={hideModal}
        isPending={isPending}
        handleDelete={handleDelete}
        title="Delete Category"
      />
      <Link
        aria-label="anchor"
        href="javascript:void(0);"
        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
        onClick={() => setShow(true)}
      >
        <i className="ri-delete-bin-line"></i>
      </Link>
    </>
  );
};

export default Delete;
