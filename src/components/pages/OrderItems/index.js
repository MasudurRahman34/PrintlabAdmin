import OrderItemsTableData from "./OrderItemsTableData";
import React from "react";

const OrderItemsComponent = () => {
  return (
    <div>
      <div className="justify-between block page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            {" "}
            Orders Items
          </h3>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 xl:col-span-12">
            <div className="box">
              <OrderItemsTableData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemsComponent;
