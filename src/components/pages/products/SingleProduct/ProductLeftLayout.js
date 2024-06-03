import React, { useState } from "react";

const ProductLeftLayout = ({ children, title = "" }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="mt-2 bg-white border ">
      <button
        onClick={() => setActive(!active)}
        class="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
        type="button"
      >
        {title}
        {active ? (
          <svg
            class={`hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50}`}
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
        ) : (
          <svg
            class={`hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary  w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50`}
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
        )}
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
        class={`hs-accordion-content  transition duration-300  ${
          active ? "opacity-100 visible" : "opacity-0 invisible hidden"
        } `}
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
      >
        {active && children}
      </div>
    </div>
  );
};

export default ProductLeftLayout;
