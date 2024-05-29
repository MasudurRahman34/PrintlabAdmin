import {
  createSpecificationMutation,
  updateSpecificationMutation,
} from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

const Specification = ({
  product_id,
  product_data,
  product_isLoading,
  product_error,
  product_isError,
  product_refetch,
}) => {
  const [state, setState] = React.useState({
    details: "",
    technial_specification_imageUrl: "",
    details_imageUrl: "",
    technical_specification: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "createSpecificationMutation",
    mutationFn: createSpecificationMutation,
  });

  const { mutate: updateMutate, isPending: updateIsPending } = useMutation({
    mutationKey: "updateSpecificationMutation",
    mutationFn: updateSpecificationMutation,
  });

  const handleCreate = () => {
    /* const variables = {
      product_id,
      visibility: 1,
    }; */

    const variables = {
      product_id,
      visibility: 1,
    };
    if (!state.details) {
      toast.error("Details is required");
    } else {
      variables.details = state.details;
    }

    if (state.details_imageUrl) {
      variables.details_imageUrl = state.details_imageUrl;
    }

    if (state.technical_specification) {
      variables.technical_specification = state.technical_specification;
    }

    if (state.technial_specification_imageUrl) {
      variables.technial_specification_imageUrl =
        state.technial_specification_imageUrl;
    }

    mutate(
      {
        variables,
      },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          product_refetch();
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message);
        },
      }
    );
  };

  const handleUpdate = () => {
    /* const variables = {
      product_id: data.id,
      visibility: 1,
    }; */

    const variables = {
      product_id,
      visibility: 1,
    };
    if (!state.details) {
      toast.error("Details is required");
    } else {
      variables.details = state.details;
    }

    if (state.details_imageUrl) {
      variables.details_imageUrl = state.details_imageUrl;
    }

    if (state.technical_specification) {
      variables.technical_specification = state.technical_specification;
    }

    if (state.technial_specification_imageUrl) {
      variables.technial_specification_imageUrl =
        state.technial_specification_imageUrl;
    }

    updateMutate(
      {
        variables,
        specification_id: product_data?.specification?.id,
      },
      {
        onSuccess: (data) => {
          toast.success("Specification updated successfully");
          product_refetch();
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message);
        },
      }
    );
  };

  useEffect(() => {
    if (product_data?.specification) {
      setState((prev) => ({
        ...prev,
        details: product_data.specification.details,
        details_imageUrl: product_data.specification.details_imageUrl,
        technical_specification:
          product_data.specification.technical_specification,
        technial_specification_imageUrl:
          product_data.specification.technical_specification_imageUrl,
      }));
    }
  }, [product_data]);

  return (
    <div className="py-5 Artwork">
      <div>
        <div className="mt-2">
          <label className="mb-2 text-base font-semibold text-black">
            Delails
          </label>
          <div className="border border-[#949EB7] rounded px-5 py-5">
            <TextEditor
              text={state?.details}
              handleChange={(value) =>
                setState((prev) => ({
                  ...prev,
                  details: value,
                }))
              }
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2 text-base font-semibold text-black">
            Details Image URL (Optional)
          </label>
          <input
            type="text"
            className="block w-full rounded-md"
            name="details_imageUrl"
            value={state.details_imageUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="mb-2 text-base font-semibold text-black">
            Technical Specification (Optional)
          </label>
          <div className="border border-[#949EB7] rounded px-5 py-5">
            <TextEditor
              text={state?.technical_specification}
              handleChange={(value) =>
                setState((prev) => ({
                  ...prev,
                  technical_specification: value,
                }))
              }
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2 text-base font-semibold text-black">
            Technial Specification Image URL (Optional)
          </label>
          <input
            type="text"
            className="block w-full rounded-md"
            name="technial_specification_imageUrl"
            value={state.technial_specification_imageUrl}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-end w-full mt-10">
        {product_data?.specification ? (
          <button
            type="button"
            class="ti-btn ti-btn-primary-full ti-btn-wave"
            disabled={updateIsPending}
            onClick={handleUpdate}
          >
            {updateIsPending ? "Updating..." : "Update Artwork"}
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

export default Specification;
