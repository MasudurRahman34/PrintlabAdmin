import ModalLayout from "@/components/ui/ModalLayout";
import { addAttributeOptionMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React from "react";

const OptionCard = ({ option, toggleAccordion }) => {
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

  return (
    <>
      {show && (
        <ModalLayout
          show={show}
          hideModal={hideModal}
          title={`${option.title} option`}
          isPending={isPending}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
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
          </form>
        </ModalLayout>
      )}
      <div
        className={`hs-accordion accordion-item custom-accordion-primary ${
          option.active ? "active" : ""
        }`}
        id="hs-basic-heading31"
        key={option.id}
      >
        <button
          className="inline-flex items-center justify-between w-full py-0 font-semibold transition hs-accordion-toggle accordion-button hs-accordion-active:pb-3 group gap-x-3 text-start"
          aria-controls="hs-basic-collapse31"
          type="button"
          onClick={() => toggleAccordion(option.id)}
        >
          <span>{option.title}</span>
          <svg
            className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-collapse31"
          className={`hs-accordion-content accordion-collapse w-full  transition-[height] duration-300 ease-in-out  ${
            option.active ? "block" : "hidden"
          }`}
          aria-labelledby="hs-basic-heading31"
        >
          <div className="accordion-body">
            <div>
              <div>
                {option?.options?.map((item, index) => (
                  <div
                    className="flex items-center justify-between py-3 border-b border-gray-200"
                    key={index}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-end pt-3 border-t border-t-gray-950">
                <button
                  type="button"
                  className="ti-btn ti-btn-primary-full ti-btn-loader "
                  onClick={() => setShow(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionCard;
