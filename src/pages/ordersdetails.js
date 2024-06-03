import OrdersList from "@/components/ui/OrdersList";
import Ordertraking from "@/components/ui/Ordertraking";
import UserDetails from "@/components/ui/UserDetails";
import { AdminLayout } from "@/layout/AdminLayout";
import React from "react";

const OrdersDetails = () => {
  return (
    <AdminLayout>
      <div className="main-content">
        <div className="block justify-between page-header md:flex">
          <div>
            <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
              {" "}
              Orders Details
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
              Orders Details
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="xl:col-span-3 col-span-12">
   
          </div>
          <div className="xl:col-span-6 col-span-12">
            <OrdersList />
          </div>
          <div className="xl:col-span-3 col-span-12">
            <Ordertraking />
          </div>
          <div className=" col-span-12">
            <UserDetails />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrdersDetails;
