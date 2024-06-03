import { updateProductArtworkServiceMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ActiveTabArtwork = ({
  product_id,
  product_data,
  product_isLoading,
  product_error,
  product_isError,
  product_refetch,
  combination_refetch,
  activeArtwork,
}) => {
  // this component is a form . there will be two input field and a button 1. input field for title 2. TextArea field for description 3. button for submit

  const [state, setState] = useState({
    cost: 0,
    description: "",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "updateProductArtworkServiceMutation",
    mutationFn: updateProductArtworkServiceMutation,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (activeArtwork) {
      setState({
        cost: activeArtwork.cost,
        description: activeArtwork.description || "",
      });
    }
  }, [activeArtwork]);

  const handleSubmit = (e) => {
    // this function will be called when user will click on submit button
    e.preventDefault();

    if (state.cost < 0) {
      return toast.error("Cost can't be negative");
    }

    const variables = {
      id: activeArtwork.id,
      cost: state.cost,
      description: state.description,
    };

    mutate(
      {
        variables,
        artwork_id: activeArtwork.id,
      },
      {
        onSuccess: () => {
          toast.success("Artwork updated successfully");
          product_refetch();
          combination_refetch();
        },
        onError: (error) => {
          toast.error("Failed to update artwork");
        },
      }
    );
  };

  return (
    <div className="p-4">
      <div className="mb-3">
        <h3 className="text-lg font-semibold">{activeArtwork?.title}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Cost
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            name="cost"
            aria-describedby="emailHelp"
            value={state.cost}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleInputPassword1"
            value={state.description}
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="m-2 ti-btn ti-btn-primary-full ti-btn-loader"
            disabled={isPending}
          >
            {isPending ? (
              <i className="ri-loader-4-line animate-spin"></i>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActiveTabArtwork;
