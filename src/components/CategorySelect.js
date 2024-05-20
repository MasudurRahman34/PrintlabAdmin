import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CategorySelect = ({ selected, onChange, name = "" }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getAllCategories,
  });

  return (
    <select
      className="ti-form-select rounded-sm !py-2 !px-3"
      data-trigger
      name={name}
      id={name}
      defaultValue={selected}
      onChange={onChange}
    >
      <option value="">Choose category</option>
      {data?.data.map((category) => (
        <option
          key={category.id}
          value={category.id}
          selected={selected === category.id}
          onChange={(e) =>
            onChange({
              target: {
                name,
                value: e.target.value,
              },
            })
          }
        >
          {category.title}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
