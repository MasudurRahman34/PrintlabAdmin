import { updateCombinationMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CombinationRow = ({ row, idx }) => {
  const [state, setState] = useState({
    price: row?.price,
    quantity: row?.quantity,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "updateCombination",
    mutationFn: updateCombinationMutation,
  });

  const handleMutate = () => {
    // handle mutation here
    const variables = {
      visibility: 1,
      status: 1,
      disbled: 0,
    };
    const { price, quantity } = state;
    if (price) variables.price = price;
    if (quantity) variables.quantity = quantity;

    if (price <= 0 || quantity <= 0) {
      return toast.error("Price and Quantity should be greater than 0");
    }

    mutate(
      { combination_id: row?.id, variables },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          // handle success here
        },
        onError: (error) => {
          // handle error here
        },
      }
    );
  };

  // price field should be a input field to edit the price as number
  return (
    <tr className="border-b border-defaultborder">
      <td>{idx + 1}</td>
      <td>{row?.sku}</td>
      <td>
        <div className="flex space-x-2">
          <input
            type="number"
            name="price"
            className="w-28"
            value={state.price}
            onChange={handleChange}
          />
        </div>
      </td>
      <td>
        <div className="flex space-x-2">
          <input
            type="number"
            className="w-28"
            name="quantity"
            value={state.quantity}
            onChange={handleChange}
          />
        </div>
      </td>
      <td>
        <div className="avatar-list-stacked">
          {row?.combination_string.split(",").map((item, index) => (
            <span className="ml-2 badge bg-primary/10 text-primary" key={index}>
              {item}
            </span>
          ))}
        </div>
      </td>
      <td>
        <div className="avatar-list-stacked">
          <span className="badge bg-primary/10 text-primary">
            {row?.visibility.label}
          </span>
        </div>
      </td>
      <td>
        <div className="avatar-list-stacked">
          <span className="badge bg-primary/10 text-primary">
            {row.status.label}
          </span>
        </div>
      </td>
      <td>
        {/* Default is a radio button . where any one should be selected */}
        <div className="avatar-list-stacked">
          <span className="badge bg-primary/10 text-primary">
            {row.default.label}
          </span>
        </div>
      </td>
      <td>
        <div className="hstack flex gap-3 text-[.9375rem]">
          <button
            aria-label="anchor"
            className="ti-btn ti-btn-icon ti-btn-sm ti-btn-success-full"
            onClick={handleMutate}
          >
            <i className="ri-save-line"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CombinationRow;
