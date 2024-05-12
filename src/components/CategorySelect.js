import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const CategorySelect = ({ selected, setSelected }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getAllCategories,
  });

  return (
    <select
      class="ti-form-select rounded-sm !py-2 !px-3"
      data-trigger
      name="choices-single-default"
      id="choices-single-default"
    >
      <option value="">Choose category</option>
      {data?.data.map((category) => (
        <option
          key={category.id}
          value={category.id}
          selected={selected === category.id}
          onChange={(e) =>
            setSelected({
              ...selected,
              parent_category: e.target.value,
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
