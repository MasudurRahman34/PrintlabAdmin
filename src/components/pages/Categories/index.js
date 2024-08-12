import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import Pagination from "@/components/Pagination";
import Loading from "@/components/ui/Loading";
import { getAllCategories } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const CategoryIndex = () => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["get-all-categories", page],
    queryFn: () => getAllCategories({ page }),
    enabled: !!page,
  });

  const paginationFn = (page) => {
    setPage(page);
  };

  return (
    <div className="px-5 py-5 bg-white ">
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12">
          <button
            className="px-4 py-2 text-white rounded-sm bg-primary"
            onClick={() => {
              setShow(!show);
            }}
          >
            Create Category
          </button>
        </div>
        {show && (
          <div className="col-span-12 2xl:col-span-3">
            <CategoryForm refetch={refetch} />
          </div>
        )}

        <div className="col-span-12 2xl:col-span-9 category-right">
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <div>Error</div>
          ) : (
            <div>
              <CategoryTable data={data} refetch={refetch} />
              <Pagination meta={data?.meta} paginationFn={paginationFn} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryIndex;
