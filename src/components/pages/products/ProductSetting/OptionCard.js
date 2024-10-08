import CreateOption from "./options/CreateAttributeOption";
import OptionCardItem from "./options/OptionCardItem";
import React from "react";

const OptionCard = ({
  option,
  checkedAttribute,
  toggleAccordion,
  product_refetch,
  handleOptionCheck,
  attribute_refetch,
}) => {
  return (
    <>
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
              <div className="grid w-full grid-cols-12 gap-5 max-h-[300px] overflow-y-auto scrollbar-thin">
                {option?.options?.map((item, index) => (
                  <OptionCardItem
                    item={item}
                    key={index}
                    handleOptionCheck={handleOptionCheck}
                    checkedAttribute={checkedAttribute}
                    product_refetch={product_refetch}
                    attribute_refetch={attribute_refetch}
                    attribute={option}
                  />
                ))}
              </div>
              <CreateOption
                option={option}
                refetch={attribute_refetch}
                product_refetch={product_refetch}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionCard;
