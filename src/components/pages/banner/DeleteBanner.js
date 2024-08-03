import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { deleteBannerMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const DeleteBanner = ({ id, refetch }) => {
  const { session } = useAuth();
  const showToastMessage = useToastMessage();
  const { mutate, isPending } = useMutation({
    mutationKey: "delete-banner",
    mutationFn: deleteBannerMutation,
  });

  const deleteBanner = (id) => {
    mutate(
      {
        banner_id: id,
        token: session?.token,
      },
      {
        onSuccess: (data) => {
          toast.success("Banner deleted successfully");
          refetch();
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };
  return (
    <>
      <button
        onClick={() => deleteBanner(id)}
        disabled={isPending}
        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
      >
        <i className="ri-delete-bin-line"></i>
      </button>
    </>
  );
};

export default DeleteBanner;
