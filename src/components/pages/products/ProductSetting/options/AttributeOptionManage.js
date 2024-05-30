import DeleteModal from "@/components/ui/DeleteModal";
import ModalLayout from "@/components/ui/ModalLayout";
import {
  deleteAttributeOptionMutation,
  updateAttributeOptionMutation,
} from "@/resolvers/mutation";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AttributeOptionManage = ({
  attribute_option_id,
  product_refetch,
  attribute_refetch,
  attribute_option,
}) => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [form_state, setFormState] = React.useState({
    title: attribute_option.title,
  });

  const handleChange = (e) => {
    setFormState({
      ...form_state,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "delete attribute option",
    mutationFn: deleteAttributeOptionMutation,
  });

  const { mutate: updateMutate, isPending: isUpdatePending } = useMutation({
    mutationKey: "update attribute option",
    mutationFn: updateAttributeOptionMutation,
  });

  const handleDelete = () => {
    mutate(
      {
        attribute_option_id,
      },
      {
        onSuccess: () => {
          product_refetch();
          attribute_refetch();
          toast.success("Attribute option deleted successfully");
        },
        onError: (error) => {
          toast.error("Failed to delete attribute option");
        },
      }
    );
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    const variables = {
      title: form_state.title,
      attribute_id: attribute_option.attribute_id,
    };

    updateMutate(
      {
        variables,
        attribute_option_id,
      },
      {
        onSuccess: () => {
          product_refetch();
          attribute_refetch();
          toast.success("Attribute option updated successfully");
          setEditShow(false);
        },
        onError: (error) => {
          toast.error("Failed to update attribute option");
        },
      }
    );
  };

  return (
    <>
      {editShow && (
        <ModalLayout
          show={editShow}
          hideModal={() => {
            setEditShow(false);
          }}
          title={`${attribute_option.title} options`}
          isPending={isUpdatePending}
          handleMutate={handleSubmit}
        >
          <div className="">
            <div className="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
              <p className="mb-2 text-muted">Title</p>
              <input
                type="text"
                className="form-control"
                name="title"
                value={form_state.title}
                onChange={handleChange}
              />
            </div>
          </div>
        </ModalLayout>
      )}
      <DeleteModal
        handleDelete={handleDelete}
        isPending={isPending}
        show={show}
        hideModal={hideModal}
        title="Attribute Option"
      />
      <Menu>
        <MenuButton>
          <ChevronDownIcon className="size-4" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-32 origin-top-right rounded-xl border border-white/5 bg-white text-gray-950 p-1 text-sm/6  [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
              <button
                className="group hover:bg-gray-100 flex w-full items-center gap-2 rounded-lg py-1.5 px-3 "
                onClick={() => {
                  setShow(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                Delete
              </button>
            </MenuItem>

            <MenuItem>
              <button
                className="group hover:bg-gray-100 flex w-full items-center gap-2 rounded-lg py-1.5 px-3 "
                onClick={() => {
                  console.log("show");
                  setEditShow(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Edit
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

export default AttributeOptionManage;
