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
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
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
        title: data?.title || "",
        slug: data?.slug || "",
        description: data?.description || "",
        meta_title: data?.meta_title || "",
        meta_description: data?.meta_description || "",
        meta_keywords: data?.meta_keywords || "",
      });
    }
  }, [data]);

  const handleUpdate = () => {
    const variables = {
      title: state.title,
    };

    if (state.description !== data.description)
      variables.description = state.description;
    if (state.meta_title !== data.meta_title)
      variables.meta_title = state.meta_title;
    if (state.meta_description !== data.meta_description)
      variables.meta_description = state.meta_description;
    if (state.meta_keywords !== data.meta_keywords)
      variables.meta_keywords = state.meta_keywords;

    mutate(
      {
        variables,
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
      <div className="flex gap-4 mt-2">
        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black lg:text-base">
            Meta Title
          </label>
          <input
            type="text"
            name="meta_title"
            className="block w-full text-sm rounded-md lg:text-base"
            placeholder="e.g. Product title"
            value={state.meta_title}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label
            className="mb-2 text-sm font-semibold text-black lg:text-base"
            htmlFor="meta_keywords"
          >
            Meta Keywords
          </label>
          <input
            type="text"
            name="meta_keywords"
            className="block w-full text-sm rounded-md lg:text-base"
            value={state.meta_keywords}
            onChange={handleChange}
            placeholder="e.g. keyword1, keyword2"
          />
        </div>
      </div>
      <div className="w-full">
        <label className="mb-2 text-sm font-semibold text-black lg:text-base">
          Meta Description
        </label>
        <textarea
          name="meta_description"
          className="block w-full text-sm rounded-md lg:text-base"
          value={state.meta_description}
          onChange={handleChange}
          placeholder="e.g. Product description"
        />
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
