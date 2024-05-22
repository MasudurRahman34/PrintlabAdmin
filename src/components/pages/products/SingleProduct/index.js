import AccordionsCard from "./AccordionsCard";
import AddProductmiddle from "./AddProductmiddle";
import AddProductleft from "@/components/AddProductleft";
import ProductData from "@/components/productdata/ProductData";
import { getSingleProductQuery } from "@/resolvers/query";
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

  return (
    <div className="grid grid-cols-12 gap-3 px-5 mt-5 bg-[#F0F1F7] mb-[50px]">
      <div className="col-span-3">
        <AddProductleft />
      </div>
      <div className="col-span-7">
        <AddProductmiddle
          data={data?.data}
          isLoading={isLoading}
          refetch={refetch}
          isError={isError}
        />
      </div>
      <div className="w-full col-span-2 rounded-md">
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
    </div>
  );
};

export default SingleProduct;
