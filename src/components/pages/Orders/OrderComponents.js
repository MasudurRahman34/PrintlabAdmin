import TableData from "./TableData";
import Card from "@/components/Card";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const OrderComponents = () => {
  const { session } = useAuth();

  return (
    <div className="main-content">
      <div className="justify-between block page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            {" "}
            Orders
          </h3>
        </div>
        <ol className="flex items-center min-w-0 whitespace-nowrap">
          <li className="text-[0.813rem] ps-[0.5rem]">
            <a
              className="flex items-center truncate text-primary hover:text-primary dark:text-primary"
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

      <div>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 xl:col-span-12">
            <div className="box">
              <TableData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComponents;
