import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { updateQuantityRuleMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateTableRow = ({ row }) => {
  const { session } = useAuth();
  const showToastMessage = useToastMessage();
  const [state, setState] = useState({
    increment: 1,
    min_quantity: 1,
    max_quantity: 1,
    status: 1,
    per_quantity_price: 1,
    calculate_as: "multiply",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "update_quantity",
    mutationFn: updateQuantityRuleMutation,
  });

  const handleUpdate = () => {
    const variables = {
      increment: state.increment,
      min_quantity: state.min_quantity,
      max_quantity: state.max_quantity,
      status: state.status ? 1 : 0,
      per_increament_price: state.per_quantity_price,
      calculation_type: state.calculate_as,
    };

    mutate(
      {
        variables,
        quantity_id: row?.id,
        token: session?.token,
      },
      {
        onSuccess: (data) => {
          toast.success("Updated");
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
          showToastMessage(error?.response?.data?.message);
        },
      }
    );
  };

  useEffect(() => {
    if (row) {
      setState({
        increment: row?.increment,
        min_quantity: row?.min_quantity,
        max_quantity: row?.max_quantity,
        status: row?.status,
        per_quantity_price: row?.per_increament_price,
        calculate_as: row?.calculation_type || "multiply",
      });
    }
  }, [row]);

  return (
    <tr class="border-b border-defaultborder">
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
          className="w-28"
          name="per_quantity_price"
          value={state.per_quantity_price}
          onChange={handleChange}
        />
      </td>
      <td scope="row" className="flex flex-col gap-2">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            className="w-28"
            name="calculate_as"
            value="multiply"
            checked={state.calculate_as === "multiply"}
            onChange={handleChange}
          />
          Multiply
        </label>
        <label className="flex items-center gap-3">
          <input
            type="radio"
            className="w-28"
            name="calculate_as"
            value="add"
            checked={state.calculate_as === "add"}
            onChange={handleChange}
          />
          Add
        </label>
      </td>
      <td>
        <span class="badge bg-success/10 text-success">
          {row?.status == 1 ? "active" : "enactive"}
        </span>
      </td>
      <td>
        {/* Cost will be a input number */}

        <input
          type="number"
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
          className="w-20"
          name="max_quantity"
          value={state.max_quantity}
          onChange={handleChange}
        />
      </td>
      <td>
        <button
          aria-label="anchor"
          className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
          onClick={handleUpdate}
        >
          <i className="ri-save-line"></i>
        </button>
      </td>
    </tr>
  );
};

export default UpdateTableRow;
