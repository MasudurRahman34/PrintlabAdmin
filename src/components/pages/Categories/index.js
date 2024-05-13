import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const CategoryIndex = () => {
  const router = useRouter();

  const { slug } = router.query;

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getAllCategories,
  });

  return (
    <div className="px-5 py-5 bg-white ">
      <div className="flex gap-4 ">
        <CategoryForm refetch={refetch} />
        <div className="w-8/12 category-right">
          <CategoryTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default CategoryIndex;
