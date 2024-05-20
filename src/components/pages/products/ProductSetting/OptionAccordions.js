import OptionCard from "./OptionCard";
import React, { useEffect } from "react";

const OptionAccordions = ({ options = [], toggleAccordion, refetch }) => {
  return (
    <div
      className="flex-1 p-3 accordion customized-accordion accordions-items-seperate"
      id="customizedAccordion"
    >
      <div className="hs-accordion-group">
        {options
          .filter((item) => item?.checked)
          .map((accordion) => (
            <OptionCard
              key={accordion.id}
              option={accordion}
              toggleAccordion={toggleAccordion}
              refetch={refetch}
            />
          ))}
      </div>
    </div>
  );
};

export default OptionAccordions;
