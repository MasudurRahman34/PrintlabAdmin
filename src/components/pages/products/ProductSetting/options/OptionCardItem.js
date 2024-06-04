import AttributeOptionManage from "./AttributeOptionManage";
import React, { useState } from "react";

const OptionCardItem = ({
  item,
  handleOptionCheck,
  checkedAttribute,
  product_refetch,
  attribute,
  attribute_refetch,
}) => {
  return (
    <div className="flex items-center col-span-12 px-3 py-3 border rounded-md lg:col-span-6 xl:col-span-4">
      <div className="flex w-full gap-3">
        <div
          class="form-check "
          style={{
            display: "flex",
            alignItems: "center",

            gap: "5px",
            width: "100%",
          }}
        >
          <input
            className="pr-2 form-check-input"
            type="checkbox"
            id="gridCheck1"
            // if item id is exists in the checkedAttribute array and the checked value is true then set the checked value to true
            checked={
              checkedAttribute?.options.filter((element) => element === item.id)
                .length > 0
            }
            onChange={() =>
              handleOptionCheck({
                checked_value: item.id,
                attribute_id: item.attribute_id,
              })
            }
          />

          <div className="flex items-center gap-3">
            {attribute.type.label === "Color" ? (
              <span
                className="w-8 h-8 rounded-full"
                style={{
                  backgroundColor: item.title,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              ></span>
            ) : (
              <p className="text-sm font-semibold text-black ">{item.title}</p>
            )}

            <div className="ti-btn-group !m-0">
              <AttributeOptionManage
                attribute_option_id={item.id}
                product_refetch={product_refetch}
                attribute_refetch={attribute_refetch}
                attribute_option={item}
                attribute={attribute}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCardItem;
