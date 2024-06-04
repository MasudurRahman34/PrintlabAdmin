import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const CategoryIndex = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getAllCategories,
  });

  return (
    <div className="px-5 py-5 bg-white ">
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 lg:col-span-3">
          <CategoryForm refetch={refetch} />
        </div>
        <div className="col-span-12 lg:col-span-9 category-right">
          <CategoryTable data={data} refetch={refetch} />
        </div>
      </div>
    </div>
  );
};

export default CategoryIndex;
