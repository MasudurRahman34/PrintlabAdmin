import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const CategorySelect = ({ selected, onChange, name = "" }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getAllCategories,
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error fetching categories. Please try again later</p>;

  return (
    <select
      className="ti-form-select rounded-sm !py-2 !px-3 "
      data-trigger
      name={name}
      id={name}
      value={selected}
      onChange={onChange}
    >
      <option value="">Choose category</option>
      {data?.data.map((category) => (
        <>
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
          {category.children.length > 0 &&
            category.children.map((child) => (
              <option
                key={child.id}
                value={child.id}
                selected={selected === child.id}
                onChange={(e) =>
                  onChange({
                    target: {
                      name,
                      value: e.target.value,
                    },
                  })
                }
              >
                __
                {child.title}
              </option>
            ))}
        </>
      ))}
    </select>
  );
};

export default CategorySelect;
