import CategorySelect from "@/components/CategorySelect";
import { addProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category_id: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "add-product",
    mutationFn: addProductMutation,
  });

  const handleSubmit = () => {
    const variables = {};
    for (const key in formData) {
      console.log(key, formData[key]);
      if (formData[key]) {
        variables[key] = formData[key];
      } else {
        toast.error("Please fill all the fields");
        return;
      }
    }

    mutate(
      { variables },
      {
        onSuccess: (data) => {
          toast.success("Product added successfully");
          router.push(`/products/${data.data.slug}`);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  console.log(formData);
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xl:col-span-12">
        <div className="box">
          <div className="box-body add-products !p-0">
            <div className="p-6">
              <div className="grid grid-cols-12 md:gap-x-[3rem] gap-0">
                <div className="col-span-12 xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 xl:col-span-12">
                      <label for="product-name-add" className="form-label">
                        Product Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control w-full !rounded-md"
                        id="product-name-add"
                        placeholder="Name"
                      />
                      <label
                        for="product-name-add"
                        className="form-label mt-1 text-[0.75rem] opacity-[0.5] !text-[#8c9097] dark:text-white/50 !mb-0"
                      >
                        *Product Name should not exceed 30 characters
                      </label>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <label for="product-category-add" className="form-label">
                        Category
                      </label>
                      <CategorySelect
                        name="category_id"
                        selected={formData.category_id}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-12 xl:col-span-12">
                      <label
                        for="product-description-add"
                        className="form-label"
                      >
                        Product Description
                      </label>

                      <textarea
                        className="form-control w-full !rounded-md"
                        id="product-description-add"
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>

                      <label
                        for="product-description-add"
                        className="form-label mt-1 text-[0.75rem] opacity-[0.5] !text-[#8c9097] dark:text-white/50 mb-0"
                      >
                        *Description should not exceed 500 letters
                      </label>
                    </div>
                  </div>
                </div>
                {/*    <div className="col-span-12 xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 xl:col-span-4">
                        <label
                          for="product-actual-price"
                          className="form-label"
                        >
                          Actual Price
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="product-actual-price"
                          placeholder="Actual Price"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-4">
                        <label
                          for="product-dealer-price"
                          className="form-label"
                        >
                          Dealer Price
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="product-dealer-price"
                          placeholder="Dealer Price"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-4">
                        <label for="product-discount" className="form-label">
                          Discount
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="product-discount"
                          placeholder="Discount in %"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-6">
                        <label for="product-type" className="form-label">
                          Product Type
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="product-type"
                          placeholder="Type"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-6">
                        <label for="product-discount" className="form-label">
                          Item Weight
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="product-discount1"
                          placeholder="Weight in gms"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-12 product-documents-container">
                        <p className="font-semibold mb-2 text-[0.875rem]">
                          Product Images :
                        </p>
                        <input
                          type="file"
                          className="w-full product-Images"
                          name="filepond"
                          multiple
                          data-allow-reorder="true"
                          data-max-file-size="3MB"
                          data-max-files="6"
                        />
                      </div>
                      <label className="form-label opacity-[0.5] mt-4 xl:col-span-12 col-span-12">
                        Minimum 0f 6 images are need to be uploaded,make sure
                        the image size match the proper background size and all
                        images should be uniformly maintained with width and
                        height to the image container,image size should not
                        exceed 2MB,once uploaded to change the image you need to
                        wait minimum of 24hrs.{" "}
                      </label>
                      <div className="col-span-12 xl:col-span-12 product-documents-container">
                        <p className="font-semibold mb-2 text-[0.875rem]">
                          Warrenty Documents :
                        </p>
                        <input
                          type="file"
                          className="w-full product-documents"
                          multiple
                          data-allow-reorder="true"
                          data-max-file-size="3MB"
                          data-max-files="6"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-6">
                        <label for="publish-date" className="form-label">
                          Publish Date
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="publish-date"
                          placeholder="Choose date"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-6">
                        <label for="publish-time" className="form-label">
                          Publish Time
                        </label>
                        <input
                          type="text"
                          className="form-control w-full !rounded-md"
                          id="publish-time"
                          placeholder="Choose time"
                        />
                      </div>
                      <div className="col-span-12 xl:col-span-6">
                        <label for="product-status-add" className="form-label">
                          Published Status
                        </label>
                        <select
                          className="form-control w-full !rounded-md"
                          data-trigger
                          name="product-status-add"
                          id="product-status-add"
                        >
                          <option value="">Select</option>
                          <option value="Published">Published</option>
                          <option value="Scheduled">Scheduled</option>
                        </select>
                      </div>
                      <div className="col-span-12 xl:col-span-6">
                        <label for="product-tags" className="form-label">
                          Product Tags
                        </label>
                        <select
                          className="form-control w-full !rounded-md"
                          name="product-tags"
                          id="product-tags"
                          multiple
                        >
                          <option value="Relaxed" selected>
                            Relaxed
                          </option>
                          <option value="Solid">Solid</option>
                          <option value="Washed">Washed</option>
                          <option value="Plain" selected>
                            Plain
                          </option>
                        </select>
                      </div>
                      <div className="col-span-12 xl:col-span-12">
                        <label for="product-status-add1" className="form-label">
                          Availability
                        </label>
                        <select
                          className="form-control w-full !rounded-md"
                          data-trigger
                          name="product-status-add1"
                          id="product-status-add1"
                        >
                          <option value="">Select</option>
                          <option value="In Stock">In Stock</option>
                          <option value="Out Of Stock">Out Of Stock</option>
                        </select>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
            <div className="justify-end px-6 py-4 border-t border-dashed dark:border-defaultborder/10 sm:flex">
              <button
                type="button"
                className="ti-btn ti-btn-primary !font-medium m-1"
                disabled={isPending}
                onClick={handleSubmit}
              >
                {isPending ? "Adding Product..." : "Add Product"}
                <i className="bi bi-plus-lg ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
