import Card from "@/components/Card";
import { AdminLayout } from "@/layout/AdminLayout";
import React from "react";

const Orders = () => {
  return (
    <AdminLayout>
      <div className="main-content">
        <div className="block justify-between page-header md:flex">
          <div>
            <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
              {" "}
              Orders
            </h3>
          </div>
          <ol className="flex items-center whitespace-nowrap min-w-0">
            <li className="text-[0.813rem] ps-[0.5rem]">
              <a
                className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
                href="javascript:void(0);"
              >
                Ecommerce
                <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
              </a>
            </li>
            <li
              className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
              aria-current="page"
            >
              Orders
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="xl:col-span-12 col-span-12">
            <div className="box">
              <div className="box-body flex items-center flex-wrap">
                <div className="flex-grow">
                  <span className="mb-0 text-[0.875rem] text-[#8c9097] dark:text-white/50">
                    Total number of orders placed upto now :{" "}
                    <span className="font-semibold text-success">28</span>
                  </span>
                </div>
                <div className="hs-dropdown ti-dropdown">
                  <a
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-light sm:!m-0 !mb-3 !gap-0 !font-medium dark:text-defaulttextcolor/70"
                    aria-expanded="false"
                  >
                    Sort By
                    <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                  </a>
                  <ul
                    className="hs-dropdown-menu ti-dropdown-menu hidden"
                    role="menu"
                  >
                    <li>
                      <a
                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="javascript:void(0);"
                      >
                        Date
                      </a>
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="javascript:void(0);"
                      >
                        Price
                      </a>
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="javascript:void(0);"
                      >
                        Category
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center ms-2" role="search">
                  <input
                    className="form-control !rounded-sm me-2 dark:text-defaulttextcolor/70"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="ti-btn ti-btn-light dark:text-defaulttextcolor/70 !mb-0"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Card />
          <Card />
        </div>
        <ul className="ti-pagination !px-3 !py-[0.375rem] !text-[1rem] !mb-4 flex justify-end">
          <li className="page-item disabled">
            <a className="page-link !px-3 !py-[0.375rem]">Previous</a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </AdminLayout>
  );
};

export default Orders;
