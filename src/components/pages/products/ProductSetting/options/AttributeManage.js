import DeleteModal from "@/components/ui/DeleteModal";
import Modal from "@/components/ui/Modal";
import { deleteAttributeMutation } from "@/resolvers/mutation";
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

const AttributeManage = ({
  attribute_id,
  product_refetch,
  attribute_refetch,
  attribute = {},
}) => {
  const [show, setShow] = React.useState(false);
  const [editShow, setEditShow] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationKey: "delete attribute option",
    mutationFn: deleteAttributeMutation,
  });

  const handleDelete = () => {
    mutate(
      {
        attribute_id,
      },
      {
        onSuccess: () => {
          product_refetch();
          attribute_refetch();
          toast.success("Attribute  deleted successfully");
        },
        onError: (error) => {
          toast.error("Failed to delete attribute ");
        },
      }
    );
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        show={editShow}
        hideModal={() => {
          setEditShow(false);
        }}
        refetch={attribute_refetch}
        attribute={attribute}
        attribute_id={attribute_id}
      />
      <DeleteModal
        handleDelete={handleDelete}
        isPending={isPending}
        show={show}
        hideModal={hideModal}
        title="Attribute Option"
      />
      <Menu>
        <MenuButton>
          <ChevronDownIcon className="ml-2 size-4" />
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
            anchor="right start"
            className="w-32 origin-top-right rounded-xl border border-white/5 bg-gray-200 text-gray-950 p-1 text-sm/6  [--anchor-gap:var(--spacing-1)] focus:outline-none"
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
                    d="M5 13l4 4L19 7"
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

export default AttributeManage;
