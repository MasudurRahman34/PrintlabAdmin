import React, { useState, useEffect } from "react";
import { updateCombinationMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import CombinationQuantityRule from "./Combination/CombinationQuantityRule";
import Switcher from "@/components/ui/Switcher";

const CombinationRow = ({ row, idx, combinationIds, handleAddCombination }) => {
  const [state, setState] = useState({
    price: row?.price,
    quantity: row?.quantity,
    increment: row?.increment,
    max_quantity: row?.max_quantity,
    min_quantity: row?.min_quantity,
    per_increment_price: row?.per_increment_price,
    quantity_option_status: row?.quantity_option_status,
    reduction_percentage: row?.reduction_percentage,
    quantity_rule: row?.quantity_rule,
    [`${idx}_calculation_type`]: row?.calculation_type,
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
    // input validation should be done here

    // check max cannot be less than min
    // check price and quantity should be greater than 0
    // check increment should be greater than 0
    // check per increment price should be greater than 0
    // check reduction percentage should be greater than 0

    if (state.quantity_rule) {
      if (state.min_quantity >= state.max_quantity) {
        return toast.error("Max Quantity should be greater than Min Quantity");
      }
      if (state.increment <= 0) {
        return toast.error("Increment should be greater than 0");
      }
      if (state.per_increment_price <= 0) {
        return toast.error("Per Increment Price should be greater than 0");
      }
      if (state.reduction_percentage <= 0) {
        return toast.error("Reduction Percentage should be greater than 0");
      }
    }

    const variables = {
      visibility: 1,
      status: 1,
      disbled: 0,
    };
    const {
      price,
      quantity,
      calculation_type,
      increment,
      max_quantity,
      min_quantity,
      per_increment_price,
      quantity_option_status,
      reduction_percentage,
      quantity_rule,
    } = state;

    if (price) variables.price = price;
    if (quantity) variables.quantity = quantity;
    if (calculation_type) variables.calculation_type = calculation_type;
    if (increment) variables.increment = increment;
    if (max_quantity) variables.max_quantity = max_quantity;
    if (min_quantity) variables.min_quantity = min_quantity;
    if (per_increment_price)
      variables.per_increment_price = per_increment_price;
    if (quantity_option_status)
      variables.quantity_option_status = quantity_option_status;
    if (reduction_percentage)
      variables.reduction_percentage = reduction_percentage;
    if (quantity_rule) variables.quantity_rule = quantity_rule ? 1 : 0;

    if (price <= 0) {
      return toast.error("Price should be greater than 0");
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
    <>
      <tr
        className={`border-b border-defaultborder ${
          idx % 2 === 0 ? "bg-gray-300" : ""
        }`}
      >
        <td scope="row" className="!ps-4 !pe-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="combination_id"
            checked={combinationIds.includes(row?.id)}
            aria-label="..."
            onChange={() => handleAddCombination(row?.id)}
          />
        </td>
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
          <div className="flex items-center avatar-list-stacked">
            {row?.combination_string.split(",").map((item, index) => {
              if (item.startsWith("Color : ")) {
                const color = item.split(" : ")[1];

                return (
                  <>
                    <div
                      style={{
                        backgroundColor: color,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    />
                    <span
                      className="ml-2 badge bg-primary/10 text-primary"
                      key={index}
                    >
                      {item}
                    </span>
                  </>
                );
              }
              return (
                <span
                  className="ml-2 badge bg-primary/10 text-primary"
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </td>

        <td>
          <Switcher
            isChecked={state.quantity_rule ? true : false}
            setIsChecked={() => {
              setState((prev) => ({
                ...prev,
                quantity_rule: !state.quantity_rule,
              }));
            }}
          />
        </td>

        <td>
          <div className="hstack flex gap-3 text-[.9375rem]">
            <button
              aria-label="anchor"
              className="ti-btn ti-btn-icon ti-btn-sm ti-btn-success-full"
              onClick={handleMutate}
            >
              {isPending ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <i className="ri-save-line"></i>
              )}
            </button>
          </div>
        </td>
      </tr>
      <tr
        className={`w-full transition-all  duration-1000 border-b border-defaultborder ${
          idx % 2 === 0 ? "bg-gray-300" : ""
        }  ${state.quantity_rule ? "h-full" : "h-0"}`}
      >
        <td colSpan="9" className={`${state.quantity_rule ? "" : "hidden"}`}>
          <CombinationQuantityRule
            combination_data={row}
            state={state}
            setState={setState}
            idx={idx}
          />
        </td>
      </tr>
    </>
  );
};

export default CombinationRow;
