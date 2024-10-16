import React from "react";
import CustomersTable from "./CustomersTable";

const CusomtersComponent = () => {
  return (
    <div>
      {/* <!-- Page Header --> */}
      <div className="justify-between block page-header md:flex">
        <div className="flex items-center gap-3">
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-base font-semibold">
            {" "}
            Products List
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setModalIsOpen(true)}
            className="ti-btn ti-btn-primary"
          >
            Add Product
          </button>
        </div>
      </div>
      {/*   <!-- Page Header Close -->
          <!-- Start::row-1 --> */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-12">
          <div className="box">
            <CustomersTable />
          </div>
        </div>
      </div>
      {/*  <!--End::row-1 --> */}
    </div>
  );
};

export default CusomtersComponent;
