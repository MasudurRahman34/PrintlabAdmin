import React from "react";

const AttributeList = ({ title, checked, value, handleCheck }) => {
  return (
    <div className="flex items-center justify-between w-full mt-2">
      <label className="text-[#333335] text-sm md:text-base w-[10%] ">
        {title}
      </label>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={(e) => {
          handleCheck(value);
        }}
      />
    </div>
  );
};

export default AttributeList;
