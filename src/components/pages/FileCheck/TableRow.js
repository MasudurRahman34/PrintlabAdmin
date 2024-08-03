import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { disconnectFileCheckOptionAttributeOptionMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const TableRow = ({ option, connected_check_refetch }) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationKey: "disconnectFileCheckOption",
    mutationFn: disconnectFileCheckOptionAttributeOptionMutation,
  });

  const handleDisconnect = async (id) => {
    mutate(
      {
        id,
        token: session?.token,
      },
      {
        onSuccess: () => {
          toast.success("File Check Option disconnected successfully");
          connected_check_refetch();
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  return (
    <tr
      key={option.id}
      className="border border-solid border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
    >
      <td className="px-4 py-2 border">{option.file_check_option_title}</td>
      <td className="px-4 py-2 border">{option.attribute_option_title}</td>
      <td className="px-4 py-2 border">{option.instruction}</td>

      <td className="px-4 py-2 border">
        <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
          <button
            type="button"
            onClick={() => handleDisconnect(option.id)}
            disabled={isPending}
            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
          >
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
