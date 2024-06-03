const ManageProduct = () => {
  return (
    <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
      <div className="box overflow-hidden">
        <div className="box-body">
          <div className="flex items-top justify-between">
            <div>
              <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
                <i className="ti ti-users text-[1rem] text-white"></i>
              </span>
            </div>
            <div className="flex-grow ms-4">
              <div className="flex items-center justify-between flex-wrap">
                <div>
                  <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                    Total Customers
                  </p>
                  <h4 className="font-semibold  text-[1.5rem] !mb-2 ">
                    1,02,890
                  </h4>
                </div>
                <div id="crm-total-customers"></div>
              </div>
              <div className="flex items-center justify-between !mt-1">
                <div>
                  <a
                    className="text-primary text-[0.813rem]"
                    href="javascript:void(0);"
                  >
                    View All
                    <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                  </a>
                </div>
                <div className="text-end">
                  <p className="mb-0 text-success text-[0.813rem] font-semibold">
                    +40%
                  </p>
                  <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                    this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
