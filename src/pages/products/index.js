import MetaData from "@/components/MetaData";
import ProductsComponent from "@/components/pages/products";
import AdminLayout from "@/layout/AdminLayout";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <AdminLayout>
      <MetaData title="Products" />
      <ProductsComponent />
    </AdminLayout>
  );
};

export default Products;
