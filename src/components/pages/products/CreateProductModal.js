import CategorySelect from "@/components/CategorySelect";
import { addProductMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";

const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});

const CreateProductModal = ({ modalIsOpen = false, setIsOpen }) => {
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
          toast.error(error.response.data.message[0] || "An error occurred");
        },
      }
    );
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Create a new product"
      style={{
        overlay: {
          background: "rgba(0,0,0,0.5)",
          position: "fixed",
          zIndex: 999999,
        },
        content: {
          width: "90%",
          height: "90%",
          zIndex: 999999,
          overflow: "hidden",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        },
      }}
    >
      <div className="grid h-full grid-cols-12 gap-6">
        <div className="h-full col-span-12 xl:col-span-12">
          <div className="h-full box">
            <div className="box-body add-products !p-0 flex flex-col h-full justify-between">
              <div className="flex items-center justify-between ">
                <div className="p-2 text-xl font-bold">
                  <p className="">All Media</p>
                </div>
                <button
                  className="flex items-center justify-center border w-14 h-14 hover:bg-gray-200"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 p-6">
                <div className="grid grid-cols-12 md:gap-x-[3rem] gap-0">
                  <div className="col-span-12 ">
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
                      <div className="col-span-12">
                        <label
                          for="product-category-add"
                          className="form-label"
                        >
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

                        <TextEditor
                          text={formData.description}
                          handleChange={(value) =>
                            setFormData({ ...formData, description: value })
                          }
                        />
                      </div>
                    </div>
                  </div>
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
    </Modal>
  );
};

export default CreateProductModal;
