import { updateProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "react-quill/dist/quill.snow.css";

const TextEditor = dynamic(() => import("react-quill"), { ssr: false });

const AddProductmiddle = ({ data, isLoading, isError, refetch }) => {
  const [state, setState] = useState({
    title: "",
    slug: "",
    description: "",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "updateProductMutation",
    mutationFn: updateProductMutation,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data) {
      setState({
        title: data?.title,
        slug: data?.slug,
        description: data?.description,
      });
    }
  }, [data]);

  const handleUpdate = () => {
    const variables = {};

    if (state.title !== data.title) variables.title = state.title;
    if (state.description !== data.description)
      variables.description = state.description;

    mutate(
      {
        variables: {
          title: state.title,
          description: state.description,
        },
        product_id: data.id,
      },
      {
        onSuccess: () => {
          toast.success("Product updated successfully");
          refetch();
        },
        onError: (error) => {
          toast.error("Failed to update product");
        },
      }
    );
  };

  return (
    <div className="px-5 py-3 bg-white roumded-md">
      <div className="flex gap-4">
        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black lg:text-base">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="block w-full text-sm rounded-md lg:text-base"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black lg:text-base">
            Slug
          </label>
          <input
            type="text"
            className="block w-full text-sm rounded-md lg:text-base"
            value={state.slug}
            readOnly
          />
        </div>
      </div>
      <div className="mt-2">
        <label className="mb-2 text-sm font-semibold text-black lg:text-base">
          Description
        </label>
        <div className="rounded ">
          <TextEditor
            className="min-h-[150px]"
            value={state.description}
            onChange={(value) =>
              setState((prev) => ({
                ...prev,
                description: value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-end w-full mt-10">
        <button
          type="button"
          class="ti-btn ti-btn-primary-full ti-btn-wave"
          disabled={isPending}
          onClick={handleUpdate}
        >
          {isPending ? "Updating..." : "Update Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProductmiddle;
