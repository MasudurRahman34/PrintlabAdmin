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
    console.log(id);
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
    <tr key={option.id}>
      <td className="px-4 py-2 border">{option.file_check_option_title}</td>
      <td className="px-4 py-2 border">{option.attribute_option_title}</td>
      <td className="px-4 py-2 border">{option.instruction}</td>

      <td className="px-4 py-2 border">
        <button
          type="button"
          className="ti-btn ti-btn-danger"
          onClick={() => handleDisconnect(option.id)}
        >
          Disconnect
          {isPending && (
            <span
              className="ml-2 spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
