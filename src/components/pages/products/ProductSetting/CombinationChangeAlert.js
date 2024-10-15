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
  return (
    <div className="mt-3 text-right">
      <p className="text-red-500">
        You have new attribute. It might be cause as mismatch the combination.
        you need to configure the product and previus data will be lost.
      </p>
    </div>
  );
};

export default CombinationChangeAlert;
