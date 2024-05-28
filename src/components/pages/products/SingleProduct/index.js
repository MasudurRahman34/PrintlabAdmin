import ConfigureTable from "../ProductSetting/ConfigureTable";
import AccordionsCard from "./AccordionsCard";
import AddProductmiddle from "./AddProductmiddle";
import AddProductleft from "@/components/AddProductleft";
import ProductData from "@/components/productdata/ProductData";
import {
  getProductCombinationQuery,
  getSingleProductQuery,
} from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

const SingleProduct = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["getSingleProductQuery", slug],
    queryFn: () => getSingleProductQuery(slug),
    enabled: !!slug,
  });

  const {
    data: combination_data,
    isError: combination_error,
    isLoading: combination_loading,
  } = useQuery({
    queryKey: ["getCombinationTable", slug],
    queryFn: () => getProductCombinationQuery(slug),
    enabled: !!slug,
  });
  return (
    <div className="grid grid-cols-12 gap-3 px-5 mt-5 bg-[#F0F1F7] mb-[50px]">
      <div className="xxl:col-span-3 xl:col-span-6  col-span-12">
        <AddProductleft />
      </div>
      <div className=" xxl:col-span-7 xl:col-span-6  col-span-12">
        <AddProductmiddle
          data={data?.data}
          isLoading={isLoading}
          refetch={refetch}
          isError={isError}
        />
      </div>
      <div className="w-full xxl:col-span-2 xl:col-span-6  col-span-12 rounded-md">
        <AccordionsCard
          data={data?.data}
          isLoading={isLoading}
          refetch={refetch}
          isError={isError}
        />
      </div>
      <div className="col-span-12 bg-white px-5 rounded-md border border-[#333335]">
        <ProductData
          data={data?.data}
          isLoading={isLoading}
          error={error}
          isError={isError}
          refetch={refetch}
        />
      </div>

      {combination_loading ? (
        <div>Loading...</div>
      ) : combination_error ? (
        <div>Error: {combination_error.message}</div>
      ) : (
        combination_data?.data.length > 0 && (
          <div className="col-span-12 bg-white px-5 rounded-md border border-[#333335]">
            <ConfigureTable data={combination_data} />
          </div>
        )
      )}
    </div>
  );
};

export default SingleProduct;
