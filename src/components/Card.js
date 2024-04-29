const Card = () => {
  return (
    <div className="xl:col-span-6 xxl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
      <div className="box">
        <div className="box-header block !justify-start">
          <div className="sm:flex block items-center w-full">
            <div className="me-2">
              <span className="avatar bg-light avatar-md mb-1">
                <img src="../assets/images/ecommerce/png/1.png" alt="" />
              </span>
            </div>
            <div className="flex-grow">
              <a href="javascript:void(0)">
                <span className="text-[0.875rem] font-semibold">
                  Denim Zep.Co Sweat Shirt
                </span>
              </a>
              <span className="block text-success">$1,299</span>
            </div>
            <div className="sm:text-center">
              <span className="text-[0.875rem] font-semibold">Order Id :</span>
              <span className="sm:block">#SPK-1203</span>
            </div>
          </div>
        </div>
        <div className="box-body">
          <div className="flex items-center">
            <div className="orders-delivery-address">
              <p className="mb-1 font-semibold">Delivery Address</p>
              <p className="text-[#8c9097] dark:text-white/50 mb-0">
                mig-1-11,monroe street, georgetown, Washington D.C
              </p>
            </div>
            <div className="delivery-date text-center ms-auto">
              <span className="text-[1.125rem] text-primary font-bold">13</span>
              <span className="font-semibold">Dec</span>
            </div>
          </div>
        </div>
        <div className="box-footer sm:flex block items-center w-full justify-between">
          <div>
            <span className="text-[#8c9097] dark:text-white/50 me-2">
              Status:
            </span>
            <span className="badge bg-success/10 text-success">Shipped</span>
          </div>
          <div className="sm:mt-0 mt-2">
            <button
              type="button"
              className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-danger"
            >
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
