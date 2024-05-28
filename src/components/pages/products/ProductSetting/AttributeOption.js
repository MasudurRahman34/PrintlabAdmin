import React from "react";

const AttributeOption = ({}) => {
  return (
    <div class="xxl:col-span-12 xl:col-span-12 col-span-12">
      <div class="box">
        <div class="box-header flex justify-between">
          <div class="box-title">Top Deals</div>
          <div class="hs-dropdown ti-dropdown">
            <a
              aria-label="anchor"
              href="javascript:void(0);"
              class="flex items-center justify-center w-[1.75rem] h-[1.75rem]  !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
              aria-expanded="false"
            >
              <i class="fe fe-more-vertical text-[0.8rem]"></i>
            </a>
            <ul class="hs-dropdown-menu ti-dropdown-menu hidden">
              <li>
                <a
                  class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="javascript:void(0);"
                >
                  Week
                </a>
              </li>
              <li>
                <a
                  class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="javascript:void(0);"
                >
                  Month
                </a>
              </li>
              <li>
                <a
                  class="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="javascript:void(0);"
                >
                  Year
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-body">
          <ul class="list-none crm-top-deals mb-0">
            <li class="mb-[0.9rem]">
              <div class="flex items-start flex-wrap">
                <div class="me-2">
                  <span class=" inline-flex items-center justify-center">
                    <img
                      src="../assets/images/faces/10.jpg"
                      alt=""
                      class="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                    />
                  </span>
                </div>
                <div class="flex-grow">
                  <p class="font-semibold mb-[1.4px]  text-[0.813rem]">
                    Michael Jordan
                  </p>
                  <p class="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                    michael.jordan@example.com
                  </p>
                </div>
                <div class="font-semibold text-[0.9375rem] ">$2,893</div>
              </div>
            </li>
            <li class="mb-[0.9rem]">
              <div class="flex items-start flex-wrap">
                <div class="me-2">
                  <span class="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-warning  bg-warning/10 font-semibold">
                    EK
                  </span>
                </div>
                <div class="flex-grow">
                  <p class="font-semibold mb-[1.4px]  text-[0.813rem]">
                    Emigo Kiaren
                  </p>
                  <p class="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                    emigo.kiaren@gmail.com
                  </p>
                </div>
                <div class="font-semibold text-[0.9375rem] ">$4,289</div>
              </div>
            </li>
            <li class="mb-[0.9rem]">
              <div class="flex items-top flex-wrap">
                <div class="me-2">
                  <span class="inline-flex items-center justify-center">
                    <img
                      src="../assets/images/faces/12.jpg"
                      alt=""
                      class="!w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                    />
                  </span>
                </div>
                <div class="flex-grow">
                  <p class="font-semibold mb-[1.4px]  text-[0.813rem]">
                    Randy Origoan
                  </p>
                  <p class="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                    randy.origoan@gmail.com
                  </p>
                </div>
                <div class="font-semibold text-[0.9375rem] ">$6,347</div>
              </div>
            </li>
            <li class="mb-[0.9rem]">
              <div class="flex items-top flex-wrap">
                <div class="me-2">
                  <span class="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-success bg-success/10 font-semibold">
                    GP
                  </span>
                </div>
                <div class="flex-grow">
                  <p class="font-semibold mb-[1.4px]  text-[0.813rem]">
                    George Pieterson
                  </p>
                  <p class="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                    george.pieterson@gmail.com
                  </p>
                </div>
                <div class="font-semibold text-[0.9375rem] ">$3,894</div>
              </div>
            </li>
            <li>
              <div class="flex items-top flex-wrap">
                <div class="me-2">
                  <span class="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-primary bg-primary/10 font-semibold">
                    KA
                  </span>
                </div>
                <div class="flex-grow">
                  <p class="font-semibold mb-[1.4px]  text-[0.813rem]">
                    Kiara Advain
                  </p>
                  <p class="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                    kiaraadvain214@gmail.com
                  </p>
                </div>
                <div class="font-semibold text-[0.9375rem] ">$2,679</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttributeOption;
