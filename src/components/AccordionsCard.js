import { useState } from "react";

const AccordionsCard = ({ title, card, Category }) => {
  const [togle, setgogle] = useState(false);
  const [categorys, setcategory] = useState(false);
  const [gallery, setgallery] = useState(false);
  const [custom, setcustom] = useState(false);
  const [publish, setpublish] = useState(false);
  console.log(Category);
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
                onClick={() => setcategory(!categorys)}
                class="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                type="button"
              >
                Category
                {categorys ? (
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
                  categorys
                    ? "opacity-100 visible"
                    : "opacity-0 invisible hidden"
                } `}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div class="text-gray-800 !py-3 !px-4 dark:text-gray-200">
                  <div className="text-sm md:text-base font-normal text-[#2271B1] underline">
                    <a href="#">Set Product Image</a>
                  </div>
                  <div className="mt-2 category-section">
                    <fieldset className="fieldset-scroll max-h-[300px] overflow-y-auto px-2 border">
                      <legend>Choose your Category:</legend>
                      {Category?.map((item, idx) => (
                        <div key={item.slug}>
                          <div className="mt-1 flex items-center">
                            <input
                              type="checkbox"
                              id={item.slug}
                              name="scales"
                              className="rounded-md mb-1 mr-1 mt-[2px]"
                            />
                            <label htmlFor={item.slug}>{item.title}</label>
                          </div>
                          {item?.children?.map((childItem, childIdx) => (
                            <div
                              key={childItem.slug}
                              className="mt-1 flex items-center ml-3"
                            >
                              <input
                                type="checkbox"
                                id={childItem.slug}
                                name="scales"
                                className="rounded-md mb-1 mr-1 mt-[2px]"
                              />
                              <label htmlFor={childItem.slug}>
                                {childItem.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
                    </fieldset>
                  </div>
                </div>
              </div>
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
                Published
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
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                class={`hs-accordion-content  transition duration-300  ${
                  publish ? "opacity-100 visible" : "opacity-0 invisible hidden"
                } `}
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <div>
                  <p class="text-gray-800 !py-3 !px-4 dark:text-gray-200">
                    his is the third.
                  </p>
                  <div className="flex justify-between px-3">
                    <button className="px-2 py-1 text-sm font-normal border border-black rounded">
                      Save Draft
                    </button>
                    <button className="px-2 py-1 text-sm font-normal border border-black rounded">
                      Preview
                    </button>
                  </div>
                  <ul className="px-4 mt-4 mb-5">
                    <li className="flex py-2 text-sm font-normal text-black">
                      Status :<strong className="font-medium">Draft</strong>{" "}
                      <a href="#" className="underline ml-5 text-[#2271B1]">
                        Edit
                      </a>{" "}
                    </li>
                    <li className="flex py-2 text-sm font-normal text-black">
                      {" "}
                      Visibility: :
                      <strong className="font-medium">Publid</strong>{" "}
                      <a href="#" className="underline ml-5 text-[#2271B1]">
                        Edit
                      </a>{" "}
                    </li>
                    <li className="flex py-2 text-sm font-normal text-black">
                      Publish :
                      <strong className="font-medium">immediately</strong>{" "}
                      <a href="#" className="underline ml-5 text-[#2271B1]">
                        Edit
                      </a>{" "}
                    </li>
                    <li className="flex py-2 text-sm font-normal text-black">
                      Catalog visibility :
                      <a href="#" className="underline ml-5 text-[#2271B1]">
                        Edit
                      </a>{" "}
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-sm font-normal text-[#2271B1] underline px-4 mb-2"
                  >
                    Copy to a new draft
                  </a>
                  <div className="flex justify-between px-4 mt-4 mb-4">
                    <p className="text-sm font-normal text-red-500 underline">
                      Move to Trash
                    </p>
                    <button className="py-1 px-2 border  text-white bg-[#2771B1] rounded text-sm font-semibold ">
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionsCard;
