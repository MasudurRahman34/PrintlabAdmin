import OptionCard from "./OptionCard";
import React, { useEffect } from "react";

const OptionAccordions = ({
  options = [],
  toggleAccordion,
  checkedAttributes,

  product_refetch,
  handleOptionCheck,
  attribute_refetch,
}) => {
  return (
    <div
      className="flex-1 p-3 accordion customized-accordion accordions-items-seperate"
      style={{ width: "100%" }}
      id="customizedAccordion"
    >
      <div className="hs-accordion-group">
        {options
          // Filter out the options that are not checked by checkedAttributesid exists in the checkedAttributes array and the checked value is true
          .filter((accordion) =>
            checkedAttributes.find((item) => item.id === accordion.id)
          )
          .map((accordion) => (
            <OptionCard
              key={accordion.id}
              option={accordion}
              attribute_refetch={attribute_refetch}
              checkedAttribute={checkedAttributes.find(
                (item) => item.id === accordion.id
              )}
              toggleAccordion={toggleAccordion}
              product_refetch={product_refetch}
              handleOptionCheck={handleOptionCheck}
            />
          ))}
      </div>
    </div>
  );
};

export default OptionAccordions;
