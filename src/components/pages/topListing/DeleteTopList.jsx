import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { deleteTopListMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const DeleteTopList = ({ topListId, refetch_top_list }) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationKey: "delete-top-listing",
    mutationFn: deleteTopListMutation,
  });
  const handleDelete = () => {
    mutate(
      { top_list_id: topListId, token: session?.token },
      {
        onSuccess: () => {
          toast.success("Top Listing deleted successfully");
          refetch_top_list();
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
    >
      <i class="ri-delete-bin-line"></i>
    </button>
  );
};

export default DeleteTopList;
