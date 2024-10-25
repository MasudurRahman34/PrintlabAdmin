import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { ceateTopListingMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddNewTopList = ({ refetch_top_list }) => {
  const showToastMessage = useToastMessage();
  const [show, setShow] = useState(false);
  const { session } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      heading: "",
      sub_heading: "",
      description: "",
      type: "product",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "create-top-listing",
    mutationFn: ceateTopListingMutation,
  });

  const onSubmit = (data) => {
    const variables = { type: data.type, status: 1 };
    if (data.heading) variables.heading = data.heading;
    if (data.sub_heading) variables.sub_heading = data.sub_heading;
    if (data.description) variables.description = data.description;

    mutate(
      { variables, token: session?.token },
      {
        onSuccess: () => {
          // refetch();
          setShow(false);
          toast.success("Top Listing created successfully");
          refetch_top_list();
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-end col-span-12">
          <button
            className="px-4 py-2 text-white rounded-sm bg-primary"
            onClick={() => {
              setShow(!show);
            }}
          >
            Create new Top Listing
          </button>
        </div>
      </div>
      {show && (
        <div className=" category-left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-4 mt-0">
              <div className="col-span-12 ">
                <label className="form-label">Heading</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Custom design"
                  name="heading"
                  {...register("heading", { required: true })}
                />
                {errors.heading && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="col-span-12 ">
                <label className="form-label">Sub Heading</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Custom design"
                  name="sub_heading"
                  {...register("sub_heading")}
                />
              </div>

              <div className="col-span-12 ">
                <label for="inputAddress" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="inputAddress"
                  placeholder="Description"
                  name="description"
                  {...register("description")}
                  rows="3"
                />
              </div>

              <div className="col-span-12">
                <label className="form-label">Type</label>
                <select
                  className="form-control"
                  {...register("type")}
                  defaultValue="product"
                >
                  <option value="product">Product</option>
                  <option value="category">Category</option>
                </select>
              </div>

              <div className="col-span-12">
                <button type="submit" className="ti-btn ti-btn-primary-full">
                  {isPending ? "Submiting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNewTopList;
