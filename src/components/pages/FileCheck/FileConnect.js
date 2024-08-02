import { useAuth } from "@/hooks/useAuth";
import { connectFileCheckOptionAttributeOptionMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdConnectingAirports } from "react-icons/md";

const FileConnect = ({
  file_check_options = [],
  attribute_options = [],
  connected_check_refetch,
}) => {
  const { session } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationKey: "connectFileCheckOption",
    mutationFn: connectFileCheckOptionAttributeOptionMutation,
  });
  const [fileConnectState, setFileConnectState] = useState({
    file_check_option_id: "",
    attribute_option_id: "",
    instruction: "",
  });

  const handleConnect = async () => {
    if (
      !fileConnectState.file_check_option_id ||
      !fileConnectState.attribute_option_id ||
      !fileConnectState.instruction
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // getting file_check_option title and attribute_option title by id from the array

    const file_check_option_title = file_check_options.find(
      (option) => option.id.toString() === fileConnectState.file_check_option_id
    ).title;

    const attribute_option_title = attribute_options.find(
      (option) => option.id.toString() === fileConnectState.attribute_option_id
    ).title;

    const variables = {
      file_check_option_id: fileConnectState.file_check_option_id,
      attribute_option_id: fileConnectState.attribute_option_id,
      file_check_option_title,
      attribute_option_title,
      status: "1",
      instruction: fileConnectState.instruction,
    };

    mutate(
      {
        variables,
        token: session?.token,
      },
      {
        onSuccess: () => {
          toast.success("File Check Option connected successfully");
          setFileConnectState({
            file_check_option_id: "",
            attribute_option_id: "",
            instruction: "",
          });

          connected_check_refetch();
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  return (
    <div className="max-w-xl ">
      <div className="grid items-center w-full grid-cols-12 py-3 gap ">
        <div className="col-span-12 md:col-span-5">
          <label
            htmlFor="file_check_option"
            className="mb-1 text-xs md:text-base"
          >
            <span className="text-red-500">*</span> File Check Options
          </label>
          <select
            name="file_check_option_id"
            value={fileConnectState.file_check_option_id}
            onChange={(e) =>
              setFileConnectState({
                ...fileConnectState,
                [e.target.name]: e.target.value,
              })
            }
            className="form-control form-control-lg !rounded-s-md text-xs md:text-base"
          >
            <option value="">Select File Check Option</option>
            {file_check_options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center col-span-12 md:col-span-2">
          <MdConnectingAirports className="w-6 h-6 mt-3 rotate-90 md:rotate-0" />
        </div>

        <div className="col-span-12 md:col-span-5">
          <label
            htmlFor="file_check_option"
            className="mb-1 text-xs md:text-base"
          >
            <span className="text-red-500">*</span> File Attribute Options
          </label>
          <select
            name="attribute_option_id"
            value={fileConnectState.attribute_option_id}
            onChange={(e) =>
              setFileConnectState({
                ...fileConnectState,
                [e.target.name]: e.target.value,
              })
            }
            className="form-control form-control-lg !rounded-s-md text-xs md:text-base"
          >
            <option value="">Select attribute option </option>
            {attribute_options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full mt-3">
        <label htmlFor="file_check_option " className="mb-1">
          <span className="text-red-500">*</span> Instruction
        </label>
        <input
          type="text"
          className="form-control form-control-lg !rounded-s-md"
          placeholder="Write instruction here"
          value={fileConnectState.instruction}
          name="instruction"
          onChange={(e) =>
            setFileConnectState({
              ...fileConnectState,
              [e.target.name]: e.target.value,
            })
          }
        />
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          type="button"
          className="w-full md:w-[200px] ti-btn ti-btn-primary-full ti-btn-loader "
          onClick={handleConnect}
        >
          <span className="me-2">Connect</span>
          {isPending ? (
            <span className="loading">
              <i className="ri-loader-2-fill text-[1rem] animate-spin"></i>
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default FileConnect;
