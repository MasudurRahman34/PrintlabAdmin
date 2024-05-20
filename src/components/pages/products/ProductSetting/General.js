import React from "react";

const General = () => {
  return (
    <div className=" general">
      <div className="mt-2">
        <label className="text-[#333335] text-sm md:text-base w-[10%] ">
          Regular price{" "}
        </label>
        <input type="text" className="w-[50%] ml-4  rounded-md" />
      </div>
      <div className="mt-2">
        <label className="text-[#333335] text-sm md:text-base w-[10%] ">
          Sale price
        </label>
        <input type="text" className="w-[50%] ml-4  rounded-md" />
      </div>
    </div>
  );
};

export default General;
