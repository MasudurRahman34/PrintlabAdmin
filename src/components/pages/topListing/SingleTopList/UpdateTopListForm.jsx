import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import {
  connectItemWithTopListMutation,
  updateTopListMutation,
} from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select2 from "react-select2-wrapper";

const UpdateTopListForm = ({
  topList,
  products,
  categories,
  refetch,
  refetchProduct,
}) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const [selectedValues, setSelectedValues] = useState([]);
  const [formState, setFormState] = useState({
    heading: "",
    sub_heading: "",
    description: "",
    type: "",
  });

  console.log(topList, "categories");

  const { mutate, isPending } = useMutation({
    mutationKey: "update_top_list",
    mutationFn: updateTopListMutation,
  });

  const { mutate: connectMutate, isPending: connectIsPending } = useMutation({
    mutationKey: "connect_product_to_top_list",
    mutationFn: connectItemWithTopListMutation,
  });

  const options =
    topList?.type === "product"
      ? products?.map((product) => {
          return {
            id: product.id,
            text: product.title,
          };
        })
      : categories?.map((category) => {
          return {
            id: category.id,
            text: category.title,
          };
        });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    // Extract selected values as an array
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedValues(values);
  };

  const handleUpdateTopList = () => {
    const variables = {};
    if (formState.heading) variables.heading = formState.heading;
    if (formState.sub_heading) variables.sub_heading = formState.sub_heading;
    if (formState.description) variables.description = formState.description;
    if (formState.type) variables.type = formState.type;

    mutate(
      {
        variables,
        top_list_id: topList.id,
        token: session?.token,
      },
      {
        onSuccess: () => {
          refetch();
          refetchProduct();
          toast.success("Top List updated successfully");
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  const handleConnectProductToTopList = () => {
    if (!selectedValues.length) {
      return toast.error("Please select at least one product");
    }

    connectMutate(
      {
        variables: {
          items: selectedValues,
          type: topList.type,
        },
        top_list_id: topList.id,
        token: session?.token,
      },
      {
        onSuccess: () => {
          refetch();
          refetchProduct();
          toast.success("Product connected to top list successfully");
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  useEffect(() => {
    if (topList?.type === "product") {
      // console.log(topList?.products.map((product) => product.id));
      setSelectedValues(
        topList?.top_listing_items.map((product) => `${product.itemable_id}`)
      );
    }

    if (topList?.type === "category") {
      setSelectedValues(
        topList?.top_listing_items.map((category) => `${category.itemable_id}`)
      );
    }

    if (topList) {
      setFormState({
        heading: topList?.heading,
        sub_heading: topList?.sub_heading,
        description: topList?.description,
        type: topList?.type,
      });
    }
  }, [topList, products, categories]);

  return (
    <div className="flex flex-col gap-5">
      <div className="px-5 py-3 bg-white roumded-md">
        <div className="flex gap-4">
          <div className="w-full">
            <label className="mb-2 text-sm font-semibold text-black lg:text-base">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              className="block w-full text-sm rounded-md lg:text-base"
              value={formState.heading}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="mb-2 text-sm font-semibold text-black lg:text-base">
              Sub Heading
            </label>
            <input
              type="text"
              className="block w-full text-sm rounded-md lg:text-base"
              name="sub_heading"
              value={formState.sub_heading}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-span-12">
          <label className="form-label">Type</label>
          <select
            className="form-control"
            defaultValue="product"
            value={formState.type}
            onChange={handleChange}
            name="type"
          >
            <option value="product">Product</option>
            <option value="category">Category</option>
          </select>
        </div>

        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black lg:text-base">
            Description
          </label>
          <textarea
            name="description"
            className="block w-full text-sm rounded-md lg:text-base"
            placeholder="Description"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-end w-full mt-10">
          <button
            type="button"
            class="ti-btn ti-btn-primary-full ti-btn-wave"
            disabled={isPending}
            onClick={handleUpdateTopList}
          >
            {isPending ? "Updating..." : "Update Top List"}
          </button>
        </div>
      </div>
      <div className="px-5 py-3 bg-white roumded-md">
        <div className="w-full">
          <label className="mb-2 text-sm font-semibold text-black lg:text-base">
            Connect {topList?.type} to top list
          </label>
          <Select2
            multiple
            data={options}
            value={selectedValues}
            onChange={handleSelectChange}
            options={{
              placeholder: "Search by title",
              allowClear: true,
            }}
          />
        </div>

        <div className="flex items-center justify-end w-full mt-10">
          <button
            type="button"
            class="ti-btn ti-btn-primary-full ti-btn-wave"
            disabled={connectIsPending}
            onClick={handleConnectProductToTopList}
          >
            {connectIsPending ? "Connecting..." : `Connect ${topList?.type}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTopListForm;
