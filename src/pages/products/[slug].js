import AccordionsCard from "@/components/AccordionsCard";
import AddProductleft from "@/components/AddProductleft";
import ProductData from "@/components/productdata/ProductData";
import { AdminLayout } from "@/layout/AdminLayout";
import { getAllCategories, getSingleProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const AddProductmiddle = dynamic(
  () => import("@/components/AddProductmiddle"),
  {
    ssr: false,
  }
);

const UpdateProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useQuery({
    queryKey: ["product", slug],
    enabled: !!slug,
    queryFn: () => getSingleProducts(slug),
  });
  console.log(data);

  const { data: categories,isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  console.log(data);
if(isLoading){
  return <h1>Loading...</h1>
}
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-3 px-5 mt-5 bg-[#F0F1F7] mb-[50px]">
        <div className="col-span-3">
          <AddProductleft />
        </div>
        <div className="col-span-7">
          <AddProductmiddle />
        </div>
        <div className="w-full col-span-2 rounded-md">
          <AccordionsCard Category={categories?.data} />
        </div>
        <div className="col-span-12 bg-white px-5 rounded-md border border-[#333335]">
          <ProductData />
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpdateProductPage;
