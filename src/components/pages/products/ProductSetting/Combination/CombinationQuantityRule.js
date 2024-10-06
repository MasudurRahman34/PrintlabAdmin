import React from "react";

import QuantityTableRow from "./QuantityTableRow";

const CombinationQuantityRule = ({
  combination_data,
  state,
  setState,
  idx,
}) => {
  return (
    <div>
      <table className="table min-w-full mt-3 whitespace-nowrap table-bordered">
        <thead>
          <tr className="border-b border-defaultborder">
            <th scope="col" className="text-start">
              Min Quantity
            </th>
            <th scope="col" className="text-start">
              Max Quantity
            </th>
            <th scope="col" className="text-start">
              Quantity Increment
            </th>
            <th scope="col" className="text-start">
              Per Increment Price
            </th>
            <th scope="col" className="text-start">
              Price Reduction Rate (%)
            </th>
            <th scope="col" className="text-start">
              Calculation Type
            </th>
          </tr>
        </thead>
        <tbody>
          <QuantityTableRow
            state={state}
            setState={setState}
            row={combination_data}
            idx={idx}
          />
        </tbody>
      </table>
    </div>
  );
};

export default CombinationQuantityRule;
