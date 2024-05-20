import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";

const TextEditor = dynamic(() => import("react-quill"), { ssr: false });

const AddProductmiddle = ({ data, isLoading, isError, refetch }) => {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    title: "",
    slug: "",
    description: "",
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

  return (
    <div className="px-5 py-3 bg-white roumded-md">
      <div className="flex gap-4">
        <div className="w-full">
          <label className="mb-2 text-base font-semibold text-black">
            Title
          </label>
          <input
            type="text"
            className="block w-full rounded-md"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 text-base font-semibold text-black">
            Slug
          </label>
          <input
            type="text"
            className="block w-full rounded-md"
            value={state.slug}
            readOnly
          />
        </div>
      </div>
      <div className="mt-2">
        <label className="mb-2 text-base font-semibold text-black">
          Description
        </label>
        <div className="border border-[#949EB7] rounded px-5 py-5">
          <TextEditor
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
      <div className="col-span-12 mb-4 xl:col-span-12">
        <button type="button" class="ti-btn ti-btn-primary-full ti-btn-wave">
          Primary
        </button>
      </div>
    </div>
  );
};

export default AddProductmiddle;
