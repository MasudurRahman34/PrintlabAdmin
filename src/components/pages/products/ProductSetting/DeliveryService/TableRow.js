import { updateProductDeliveryServiceMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TableRow = ({ row, product_id }) => {
  const [state, setState] = useState({
    cost: 0,
    duration: 0,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "updateProductDeliveryServiceMutation",
    mutationFn: updateProductDeliveryServiceMutation,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const variables = {
      service_id: row.id,
    };

    if (state.cost <= 0) {
      return toast.error("Cost should be greater than 0");
    }

    if (state.duration <= 0) {
      return toast.error("Duration should be greater than 0");
    }

    variables.cost = state.cost;
    variables.duration = state.duration;

    mutate(
      { variables, product_id },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success("Delivery Service updated successfully");
        },
        onError: (error) => {
          toast.error(error.response.data.message[0] || "An error occurred");
          console.log(error);
        },
      }
    );
  };

  useEffect(() => {
    if (row?.cost && row?.duration) {
      setState({
        cost: row?.cost,
        duration: row?.duration,
      });
    }
  }, [row]);

  return (
    <tr class="border-b border-defaultborder">
      <th scope="row">{row?.title}</th>
      <td>
        <span class="badge bg-success/10 text-success">
          {row?.status?.label}
        </span>
      </td>
      <td>
        {/* Cost will be a input number */}

        <input
          type="number"
          className="w-20"
          name="cost"
          value={state.cost}
          onChange={handleChange}
        />
      </td>
      <td>
        {/* Duration will be a input number */}

        <input
          type="number"
          className="w-20"
          name="duration"
          value={state.duration}
          onChange={handleChange}
        />
      </td>
      <td>
        <button
          aria-label="anchor"
          className="text-info text-[1rem] leading-none mr-3"
          onClick={handleSave}
        >
          <i className="ri-save-line"></i>
        </button>
        {row?.deletable.value === 1 && (
          <button className="text-danger text-[1rem] leading-none">
            <i className="ri-delete-bin-5-line"></i>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
