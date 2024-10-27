import React from "react";

const CombinationChangeAlert = ({
  isNewAttribute,
  isDeletedAt,
  isConfigured,
}) => {
  if (isNewAttribute) {
    return (
      <div className="mt-3 text-right">
        <p className="text-red-800">
          You have new attribute. It might be cause as mismatch the combination.
          you need to configure the product and previus data will be lost.
        </p>
      </div>
    );
  }
  if (isConfigured || isDeletedAt) {
    return (
      <div className="mt-3 text-right">
        <p className="text-green-800">
          Need to configure the product. We noticed that you have made changes
          to the product. Please configure the product to apply the changes.
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default CombinationChangeAlert;
