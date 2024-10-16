import React from "react";
import UpdateRefundForm from "./UpdateRefundForm";

const UpdateRefund = ({ item, refetch }) => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <UpdateRefundForm
        item={item}
        show={show}
        setShow={setShow}
        refetch={refetch}
      />
      <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
        <button
          className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
          onClick={() => {
            setShow(true);
          }}
        >
          <i className="ri-pencil-line"></i>
        </button>
      </div>
    </>
  );
};

export default UpdateRefund;
