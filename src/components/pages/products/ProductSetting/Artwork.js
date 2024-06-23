import {
  createArtworkMutation,
  updateArtworkMutation,
  updateProductMutation,
} from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});
const Artwork = ({ data, isLoading, isError, error, refetch }) => {
  const [state, setState] = useState({
    artwork_template_eps_fileUrl: "",
    artwork_template_pdf_fileUrl: "",
    artwork_template_inDesign_fileUrl: "",
    artwork_guide: "",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "updateArtworkMutation",
    mutationFn: updateArtworkMutation,
  });

  const { mutate: createMutation, isPending: createPending } = useMutation({
    mutationKey: "createArtworkMutation",
    mutationFn: createArtworkMutation,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data && data?.artwork) {
      setState({
        artwork_guide: data?.artwork.artwork_guide,
        artwork_template_eps_fileUrl:
          data?.artwork.artwork_template_eps_fileUrl,

        artwork_template_pdf_fileUrl:
          data?.artwork.artwork_template_pdf_fileUrl,
        artwork_template_inDesign_fileUrl:
          data?.artwork.artwork_template_inDesign_fileUrl,
      });
    }
  }, [data]);

  const handleUpdate = () => {
    const variables = {
      product_id: data.id,
      visibility: 1,
    };

    if (state.artwork_guide) variables.artwork_guide = state.artwork_guide;
    if (state.artwork_template_eps_fileUrl)
      variables.artwork_template_eps_fileUrl =
        state.artwork_template_eps_fileUrl;
    if (state.artwork_template_pdf_fileUrl)
      variables.artwork_template_pdf_fileUrl =
        state.artwork_template_pdf_fileUrl;
    if (state.artwork_template_inDesign_fileUrl)
      variables.artwork_template_inDesign_fileUrl =
        state.artwork_template_inDesign_fileUrl;

    mutate(
      {
        variables,
        product_id: data.id,
      },
      {
        onSuccess: () => {
          toast.success("Artwork Updated successfully");
          refetch();
        },
        onError: (error) => {
          toast.error("Error ");
          console.log(error);
        },
      }
    );
  };

  const handleCreate = () => {
    const variables = {
      product_id: data.id,
      visibility: 1,
    };

    if (state.artwork_guide) variables.artwork_guide = state.artwork_guide;
    if (state.artwork_template_eps_fileUrl)
      variables.artwork_template_eps_fileUrl =
        state.artwork_template_eps_fileUrl;
    if (state.artwork_template_pdf_fileUrl)
      variables.artwork_template_pdf_fileUrl =
        state.artwork_template_pdf_fileUrl;
    if (state.artwork_template_inDesign_fileUrl)
      variables.artwork_template_inDesign_fileUrl =
        state.artwork_template_inDesign_fileUrl;

    createMutation(
      {
        variables,
        product_id: data.id,
      },
      {
        onSuccess: () => {
          toast.success("Artwork created successfully");
          refetch();
        },
        onError: (error) => {
          toast.error("Error ");
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="py-5 Artwork">
      <div>
        <div className="mt-2">
          <label className="mb-2 text-sm font-semibold text-black md:text-base">
            Artwork Guide
          </label>
          <div className="rounded ">
            <TextEditor
              text={state?.artwork_guide}
              handleChange={(value) =>
                setState((prev) => ({
                  ...prev,
                  artwork_guide: value,
                }))
              }
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black md:text-base">
            Artwork template EPS file URL
          </label>
          <input
            type="text"
            className="block w-full rounded-md"
            name="artwork_template_eps_fileUrl"
            value={state.artwork_template_eps_fileUrl}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black md:text-base">
            Artwork template PDF file URL
          </label>
          <input
            type="text"
            className="block w-full rounded-md"
            name="artwork_template_pdf_fileUrl"
            value={state.artwork_template_pdf_fileUrl}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black md:text-base">
            Artwork template InDesign file URL
          </label>
          <input
            type="text"
            className="block w-full rounded-md"
            name="artwork_template_inDesign_fileUrl"
            value={state.artwork_template_inDesign_fileUrl}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-end w-full mt-10">
        {data?.artwork ? (
          <button
            type="button"
            class="ti-btn ti-btn-primary-full ti-btn-wave"
            disabled={isPending}
            onClick={handleUpdate}
          >
            {isPending ? "Updating..." : "Update Artwork"}
          </button>
        ) : (
          <button
            type="button"
            class="ti-btn ti-btn-primary-full ti-btn-wave"
            disabled={isPending}
            onClick={handleCreate}
          >
            {isPending ? "Creating..." : "Create Artwork"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Artwork;
