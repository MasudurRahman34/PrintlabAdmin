import AttributeManage from "./options/AttributeManage";
import React from "react";

const AttributeList = ({
  title,
  checked,
  value,
  handleCheck,
  attribute_refetch,
  product_refetch,
  type,
}) => {
  return (
    <div className="flex items-center justify-between w-full mt-2">
      <label className="text-[#333335] text-sm md:text-base w-[10%] ">
        {title}
        <AttributeManage
          attribute_id={value}
          attribute_refetch={attribute_refetch}
          product_refetch={product_refetch}
          attribute={{ title, type }}
        />
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
