import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const AddProductmiddle = () => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <div className="flex gap-4">
        <div className="w-full">
          <label className="text-base mb-2 font-semibold text-black">
            Title
          </label>
          <input type="text" className="block w-full rounded-md" />
        </div>
        <div className="w-full">
          <label className="text-base mb-2 font-semibold text-black">
            Slug
          </label>
          <input type="text" className="block w-full rounded-md" />
        </div>
      </div>
      <div className="mt-2">
        <label className="text-base mb-2 font-semibold text-black">
          Description
        </label>
        <div className="border border-[#949EB7] rounded px-5 py-5">
          {typeof window !== "undefined" && (
            <ReactQuill
              value={text}
              onChange={handleChange}
              modules={{
                toolbar: [
                  [{ header: [1, 2,3,4,5,6,false] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
              formats={[
                "header",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
              ]}
            />
          )}
        </div>
      </div>
      <div className="xl:col-span-12 col-span-12 mb-4">
        <div id="product-features"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="box-body">
          <div>
            <label className="block">
              <span className="sr-only">Choose Profile photo</span>
              <input
                type="file"
                className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 file:me-4 file:py-2 file:px-4 file:rounded-s-sm file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary focus-visible:outline-none"
              />
            </label>
          </div>
        </div>
        <button className="text-base font-medium text-white bg-[#845ADF] px-5 py-2 rounded-md">
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddProductmiddle;
