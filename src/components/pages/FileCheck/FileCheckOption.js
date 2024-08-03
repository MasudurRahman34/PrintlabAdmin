import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { createFileCheckOptionMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const FileCheckOption = ({ file_check_refetch }) => {
  const { session } = useAuth();
  const [showCeateForm, setShowCreateForm] = useState(false);
  const showToastMessage = useToastMessage();
  const [fileCheckOption, setFileCheckOption] = useState({
    title: "",
    description: "",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "createFileCheckOption",
    mutationFn: createFileCheckOptionMutation,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFileCheckOption({
      ...fileCheckOption,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileCheckOption);

    if (!fileCheckOption.title || !fileCheckOption.description) {
      toast.error("Please fill all the fields");
      return;
    }

    mutate(
      {
        variables: {
          title: fileCheckOption.title,
          description: fileCheckOption.description,
          status: 1,
        },
        token: session?.token,
      },
      {
        onSuccess: () => {
          toast.success("File Check Option created successfully");
          setFileCheckOption({
            title: "",
            description: "",
          });
          file_check_refetch();
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  return (
    <div>
      <div className="mb-3">
        <button
          type="button"
          className="m-2 ti-btn ti-btn-primary-full ti-btn-loader"
          onClick={() => setShowCreateForm(!showCeateForm)}
        >
          <span className="me-2">
            {showCeateForm
              ? "Close File Create Option"
              : "Show File Create Option"}
          </span>
        </button>
      </div>
      {showCeateForm ? (
        <form onSubmit={handleSubmit} className="max-w-lg">
          <h1 className="text-xl">Create New File Check Option</h1>
          <div>
            <label htmlFor="file_check_option">
              <span className="text-red-500">*</span> File Check Option Title
            </label>
            <input
              type="text"
              className="form-control form-control-lg !rounded-s-md"
              id="file_check_option"
              name="title"
              value={fileCheckOption.title}
              onChange={handleChange}
              placeholder="File Check Option"
            />
          </div>

          <div>
            <label htmlFor="file_check_option">
              <span className="text-red-500">*</span> File Check Option
              Description
            </label>
            <textarea
              type="text"
              className="form-control form-control-lg !rounded-s-md"
              id="file_check_option"
              name="description"
              value={fileCheckOption.description}
              onChange={handleChange}
              placeholder="File Check Option"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              class="ti-btn ti-btn-primary-full ti-btn-loader "
            >
              <span class="me-2">Create</span>
              {isPending ? (
                <span class="loading">
                  <i class="ri-loader-2-fill text-[1rem] animate-spin"></i>
                </span>
              ) : null}
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default FileCheckOption;
