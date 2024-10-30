import React from "react";

const QuantityTableRow = ({
  row,
  state = {
    increment: 1,
    min_quantity: 1,
    max_quantity: 1,
    status: 1,
    per_quantity_price: 1,
    calculation_type: "multiply",
  },
  idx,
  setState,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <tr class="border-b border-defaultborder">
      <td>
        {/* Cost will be a input number */}

        <input
          type="number"
          min={1}
          className="w-20"
          name="min_quantity"
          value={state.min_quantity}
          onChange={handleChange}
        />
      </td>
      <td>
        {/* Duration will be a input number */}

        <input
          type="number"
          min={1}
          className="w-20"
          name="max_quantity"
          value={state.max_quantity}
          onChange={handleChange}
        />
      </td>
      <td scope="row">
        <input
          type="number"
          className="w-28"
          name="increment"
          value={state.increment}
          onChange={handleChange}
        />
      </td>
      <td scope="row">
        <input
          type="number"
          min={1}
          className="w-28"
          name="per_increment_price"
          value={state.per_increment_price}
          onChange={handleChange}
        />
      </td>
      <td scope="row">
        <input
          type="number"
          min={0}
          className="w-28"
          name="reduction_percentage"
          value={state.reduction_percentage}
          onChange={handleChange}
        />
      </td>
      <td scope="row" className="flex flex-col gap-2">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            className="w-28"
            name={`${idx}_calculation_type`}
            value="add"
            checked={state[`${idx}_calculation_type`] === "add"}
            onClick={handleChange}
          />
          Add
        </label>
      </td>
    </tr>
  );
};

export default QuantityTableRow;
