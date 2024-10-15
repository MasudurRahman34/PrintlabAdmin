import { useQuery } from "@tanstack/react-query";
import React from "react";

const CombinationChangeAlert = ({
  isNewAttribute,
  isNewAttributeOption,
  productAttributeData,
}) => {
  if (!isNewAttribute) {
    return (
      <div className="mt-3 text-right">
        <p className="text-green-800">
          New attribute option found. Configure the product .
        </p>
      </div>
    );
  }
  if (!isNewAttributeOption) {
    return (
      <div className="mt-3 text-right">
        <p className="text-green-800">
          New attribute found. Configure the product .
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default CombinationChangeAlert;
