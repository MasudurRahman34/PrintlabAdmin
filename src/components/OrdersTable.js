const OrdersTable = () => {
  return (
    <tbody className="active-tab">
      <tr>
        <td>
          <div className="flex items-center">
            <div className="leading-none">
              <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                <img src="../assets/images/faces/4.jpg" alt="" />
              </span>
            </div>
            <div className="items-center">
              <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                Name
              </span>
              <p className="mb-0">Amanda Nanes</p>
            </div>
          </div>
        </td>
        <td>
          <div className="items-center">
            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
              Price
            </span>
            <p className="mb-0 font-semibold">$229.99</p>
          </div>
        </td>
        <td>
          <div className="items-center">
            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
              Delivery Date
            </span>
            <p className="mb-0">24 May 2022</p>
          </div>
        </td>
        <td>
          <span className="avatar avatar-md">
            <img src="../assets/images/ecommerce/png/1.png" alt="" />
          </span>
        </td>
        <td>
          <a aria-label="anchor" href="javascript:void(0);">
            <span className="orders-arrow">
              <i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i>
            </span>
          </a>
        </td>
      </tr>
      <tr className="border-y border-inherit border-solid dark:border-defaultborder/10">
        <td>
          <div className="flex items-center">
            <div className="leading-none">
              <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                <img src="../assets/images/faces/10.jpg" alt="" />
              </span>
            </div>
            <div className="items-center">
              <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                Name
              </span>
              <p className="mb-0">Peter Parkour</p>
            </div>
          </div>
        </td>
        <td>
          <div className="items-center">
            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
              Price
            </span>
            <p className="mb-0 font-semibold">$135.29</p>
          </div>
        </td>
        <td>
          <div className="items-center">
            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
              Delivery Date
            </span>
            <p className="mb-0">18 May 2022</p>
          </div>
        </td>
        <td>
          <span className="avatar avatar-md">
            <img src="../assets/images/ecommerce/png/2.png" alt="" />
          </span>
        </td>
        <td>
          <a aria-label="anchor" href="javascript:void(0);">
            <span className="orders-arrow">
              <i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i>
            </span>
          </a>
        </td>
      </tr>
   
      <tr className="border-y border-inherit border-solid dark:border-defaultborder/10">
        <td>
          <div className="flex items-center">
            <div className="leading-none">
              <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                <img src="../assets/images/faces/5.jpg" alt="" />
              </span>
            </div>
            <div className="items-center">
              <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                Name
              </span>
              <p className="mb-0">Ryan Gercia</p>
            </div>
          </div>
        </td>
        <td>
          <div className="items-center">
            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
              Price
            </span>
            <p className="mb-0 fw-semibold">$249.29</p>
          </div>
        </td>
        <td>
          <div className="items-center">
            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
              Delivery Date
            </span>
            <p className="mb-0">05 Jun 2022</p>
          </div>
        </td>
        <td>
          <span className="avatar avatar-md">
            <img src="../assets/images/ecommerce/png/4.png" alt="" />
          </span>
        </td>
        <td>
          <a aria-label="anchor" href="javascript:void(0);">
            <span className="orders-arrow">
              <i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i>
            </span>
          </a>
        </td>
      </tr>
    
    </tbody>
  );
};

export default OrdersTable;
