import ProductTable from "./ProductTable";
import DeleteModal from "@/components/ui/DeleteModal";
import { getAllProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductsComponent = () => {
  const router = useRouter();
  const { page } = router.query;
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["get-all-products", page],
    queryFn: getAllProducts,
    enabled: !!page,
  });

  return (
    <div class="main-content">
      {/* <!-- Page Header --> */}
      <div class="block justify-between page-header md:flex">
        <div className="flex items-center gap-3">
          <h3 class="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            {" "}
            Products List
          </h3>
          <Link
            href="/products/add-product"
            className="ti-btn ti-btn-primary-full ti-btn-wave"
          >
            Add Product
          </Link>
        </div>
        <ol class="flex items-center whitespace-nowrap min-w-0">
          <li class="text-[0.813rem] ps-[0.5rem]">
            <a
              class="flex items-center text-primary hover:text-primary dark:text-primary truncate"
              href="javascript:void(0);"
            >
              Ecommerce
              <i class="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </a>
          </li>
          <li
            class="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
            aria-current="page"
          >
            Products List
          </li>
        </ol>
      </div>
      {/*   <!-- Page Header Close -->
                <!-- Start::row-1 --> */}
      <div class="grid grid-cols-12 gap-6">
        <div class="xl:col-span-12 col-span-12">
          <div class="box">
            <div class="box-header">
              <div class="box-title">Products List</div>
            </div>
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error: {error.message}</div>
            ) : (
              <ProductTable products={data?.data} links={data?.links} />
            )}
          </div>
        </div>
      </div>
      {/*  <!--End::row-1 --> */}
    </div>
  );
};

export default ProductsComponent;
