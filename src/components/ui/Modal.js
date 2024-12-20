import useToastMessage from "@/hooks/useToastMessage";
import {
  addAttributeMutation,
  updateAttributeMutation,
} from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const typeList = [
  {
    id: 1,
    name: "Text",
  },

  {
    id: 3,
    name: "Select",
  },

  {
    id: 9,
    name: "Color",
  },
];

const Modal = ({ show, hideModal, refetch, attribute, attribute_id }) => {
  const showToastMessage = useToastMessage();
  const [form_state, set_form_state] = useState({
    title: "",
    type: 1,
  });
  const { mutate, isPending } = useMutation({
    mutationKey: "addAttribute",
    mutationFn: addAttributeMutation,
  });

  const { mutate: updateAttribute, isPending: updatePending } = useMutation({
    mutationKey: "updateAttribute",
    mutationFn: updateAttributeMutation,
  });

  const handleChange = (e) => {
    set_form_state({
      ...form_state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = () => {
    const variables = {};
    if (!form_state.title || form_state.title === "")
      toast.error("Title is required");
    if (!form_state.type || form_state.type < 0 || form_state.type > 15)
      toast.error("Type is required");

    variables.title = form_state.title;
    variables.type = form_state.type;

    mutate(
      {
        variables,
      },
      {
        onSuccess: () => {
          toast.success("Attribute added successfully");
          set_form_state({
            title: "",
            type: 1,
          });
          hideModal();
          refetch();
        },
        onError: (err) => {
          toast.error("Failed to add attribute");
        },
      }
    );
  };

  const handleUpdate = () => {
    const variables = {};
    if (!form_state.title || form_state.title === "")
      toast.error("Title is required");
    if (!form_state.type || form_state.type < 0 || form_state.type > 15)
      toast.error("Type is required");

    variables.title = form_state.title;
    variables.type = form_state.type;

    updateAttribute(
      {
        attribute_id,
        variables,
      },
      {
        onSuccess: () => {
          refetch();
          hideModal();
          toast.success("Attribute updated Successfully");
        },
        onError: (error) => {
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  const handleSubmit = () => {
    if (attribute_id) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  useEffect(() => {
    if (attribute_id) {
      set_form_state({
        title: attribute.title,
        type: attribute.type.value,
      });
    }
  }, [attribute_id]);

  return (
    <div
      id="hs-vertically-centered-modal"
      className={` hs-overlay bg-black/40 ti-modal ${show ? "open" : "hidden"}`}
    >
      <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="ti-modal-content">
          <div className="ti-modal-header">
            <h6 className="modal-title" id="staticBackdropLabel2">
              {attribute_id ? "Edit Attribute" : "Add Attribute"}
            </h6>
            <button
              type="button"
              className="hs-dropdown-toggle ti-modal-close-btn"
              data-hs-overlay="#hs-vertically-centered-modal"
              onClick={hideModal}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3.5 h-3.5"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="ti-modal-body">
            <form action="">
              <div>
                <div className="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <p className="mb-2 text-muted">Title</p>
                  <input
                    type="text"
                    className="form-control"
                    id="input"
                    name="title"
                    value={form_state.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <p className="mb-2 text-muted">Type</p>
                  <select
                    className="form-select"
                    id="select"
                    onChange={handleChange}
                    name="type"
                    value={form_state.type}
                  >
                    {typeList.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="ti-modal-footer">
            <button
              type="button"
              className="hs-dropdown-toggle ti-btn ti-btn-secondary-full"
              data-hs-overlay="#hs-vertically-centered-modal"
              onClick={hideModal}
            >
              Close
            </button>
            <button
              className="ti-btn ti-btn-primary-full"
              href="javascript:void(0);"
              onClick={handleSubmit}
              disabled={isPending || updatePending}
            >
              {isPending || updatePending ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
