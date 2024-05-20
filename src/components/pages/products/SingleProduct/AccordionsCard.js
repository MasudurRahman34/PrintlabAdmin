import Category from "./Category";
import Status from "./Status";
import { useState } from "react";

const AccordionsCard = ({ title, card, data, isLoading, isError, refetch }) => {
  const [togle, setgogle] = useState(false);
  const [categorytogle, setcategorytogle] = useState(false);
  const [gallery, setgallery] = useState(false);
  const [custom, setcustom] = useState(false);
  const [publish, setpublish] = useState(false);

  return (
    <div className="bg-white roumded-md">
      <div class="">
        <div class="hs-accordion-group">
          <div
            class="hs-accordion   overflow-hidden !border-b-0"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <div className="mt-2 bg-white border ">
              <button
                onClick={() => setcategorytogle(!categorytogle)}
                class="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                type="button"
              >
                Category
                {categorytogle ? (
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
              <Category categorytogle={categorytogle} />
            </div>

            <div className="mt-2 bg-white border ">
              <button
                onClick={() => setgallery(!gallery)}
                class="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                type="button"
              >
                Product Galary
                {gallery ? (
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
                  gallery ? "opacity-100 visible" : "opacity-0 invisible hidden"
                } `}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div class="text-gray-800 !py-3 !px-4 dark:text-gray-200">
                  <div className="text-sm md:text-base font-normal text-[#2271B1] underline">
                    {" "}
                    <a href="#">Add Product Image Gallery </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 bg-white border">
              <button
                onClick={() => setcustom(!custom)}
                class="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                type="button"
              >
                Custom Fields
                {custom ? (
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
                  custom ? "opacity-100 visible" : "opacity-0 invisible hidden"
                } `}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div>
                  <p className="text-sm md:text-base font-[black] py-3 font-bold px-3">
                    Add New Custom Field
                  </p>
                  <div className="px-3">
                    <button className="px-3 py-2 text-sm font-medium border border-black rounded-md md:text-base ">
                      Add custom
                    </button>
                  </div>
                  <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200">
                    Custom fields can be used to add extra metadata to a post
                    that you can use in your theme.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 bg-white border ">
              <button
                onClick={() => setpublish(!publish)}
                class="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                type="button"
              >
                Status
                {publish ? (
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
              <Status
                publish={publish}
                data={data}
                isLoading={isLoading}
                refetch={refetch}
                isError={isError}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionsCard;
