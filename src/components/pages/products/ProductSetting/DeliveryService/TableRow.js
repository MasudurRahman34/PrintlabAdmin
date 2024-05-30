import React, { useState } from "react";

const TableRow = ({ row }) => {
  const [state, setState] = useState({
    cost: 0,
    duration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

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
          href="javascript:void(0);"
          class="text-info text-[1rem] leading-none mr-3"
        >
          <i class="ri-save-line"></i>
        </button>
        {row?.deletable.value === 1 && (
          <button class="text-danger text-[1rem] leading-none">
            <i class="ri-delete-bin-5-line"></i>
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
