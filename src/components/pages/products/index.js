import ProductTable from "./ProductTable";
import DeleteModal from "@/components/ui/DeleteModal";
import { getAllProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFiletypeCsv } from "react-icons/bs";
import { LuFileJson } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";


const ProductsComponent = () => {
  const [searchItem, setSearchItem] = useState('');
  const router = useRouter();
  const { page } = router.query;

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["get-all-products", page],
    queryFn:()=> getAllProducts({page}),
  });
  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };
  console.log(searchItem)
  return (
    <div className="main-content">
      {/* <!-- Page Header --> */}
      <div className="block justify-between page-header md:flex">
        <div className="flex items-center gap-3">
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
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
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <li className="text-[0.813rem] ps-[0.5rem]">
            <a
              className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
              href="javascript:void(0);"
            >
              Ecommerce
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </a>
          </li>
          <li
            className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
            aria-current="page"
          >
            Products List
          </li>
        </ol>
      </div>
      {/*   <!-- Page Header Close -->
                <!-- Start::row-1 --> */}
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div className="flex gap-3 items-center">
              <p classNameName="!text-[20px]">Products List</p>
              <div className="flex" role="search">

                <input onChange={handleSearchChange} className="form-control !w-auto !rounded-sm me-2" type="search" value={searchItem}
                placeholder="Search" aria-label="Search"/>
                <button className="ti-btn ti-btn-light !font-medium"
                type="submit">Search</button>
              </div>

              </div>

              <div class="ti-btn-list space-x-2 rtl:space-x-reverse">
        <button type="button" class="ti-btn ti-btn-primary-full label-ti-btn">
            <i className=" label-ti-btn-icon  me-2"><BsFiletypeCsv /></i>Export as 
            Cvs
        </button>
        <button type="button" class="ti-btn ti-btn-secondary-full label-ti-btn">
        <i className=" label-ti-btn-icon  me-2"><LuFileJson /></i>Export as 
            Json
        </button>
        <button type="button" class="ti-btn ti-btn-warning-full label-ti-btn ">
        <i className=" label-ti-btn-icon  me-2"><FaRegFilePdf /></i>Export as 

            Pdf
        </button>
    </div>

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
