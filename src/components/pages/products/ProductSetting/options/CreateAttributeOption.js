import ModalLayout from "@/components/ui/ModalLayout";
import { addAttributeOptionMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SketchPicker } from "react-color";
import toast from "react-hot-toast";

const CreateOption = ({ option, refetch, product_refetch }) => {
  const [show, setShow] = React.useState(false);

  const [form_state, setFormState] = React.useState({
    title: "",
  });

  const hideModal = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    setFormState({
      ...form_state,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "add-attribute-option",
    mutationFn: addAttributeOptionMutation,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const variables = {
      title: form_state.title,
      attribute_id: option.id,
    };

    mutate(
      {
        variables,
      },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success("Option added successfully");
          hideModal();
          setFormState({
            title: "",
          });
          product_refetch();
          refetch();
        },
        onError: (error) => {
          console.log(error);
          toast.error("Failed to add option");
        },
      }
    );
  };
  return (
    <>
      {show && (
        <ModalLayout
          show={show}
          hideModal={hideModal}
          title={`${option.title} options`}
          isPending={isPending}
          handleMutate={handleSubmit}
        >
          <div className="min-w-[350px] ">
            <div className="w-full col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12">
              <p className="mb-2 text-muted">Title</p>
              {option.type.label === "Select" ? (
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={form_state.title}
                  onChange={handleChange}
                />
              ) : option.type.label === "Color" ? (
                <SketchPicker
                  color={form_state.title}
                  onChange={(color) => {
                    console.log(color);
                    setFormState({
                      ...form_state,
                      title: color.hex,
                    });
                  }}
                />
              ) : null}
            </div>
          </div>
        </ModalLayout>
      )}

      <div className="flex items-end justify-end pt-3 mt-3 border-t border-t-gray-950">
        <button
          type="button"
          aria-label="button"
          className="ti-btn ti-btn-icon ti-btn-primary-full ti-btn-wave"
          onClick={() => setShow(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CreateOption;
