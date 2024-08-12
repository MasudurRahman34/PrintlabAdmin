import CreateProductModal from "./CreateProductModal";
import ProductTable from "./ProductTable";
import { getAllProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "gridjs-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";

const ProductsComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /*   const [searchItem, setSearchItem] = useState(""); */
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      <CreateProductModal
        /* refetch={refetch} */
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      />
      <div>
        {/* <!-- Page Header --> */}
        <div className="justify-between block page-header md:flex">
          <div className="flex items-center gap-3">
            <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-base font-semibold">
              {" "}
              Products List
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalIsOpen(true)}
              className="ti-btn ti-btn-primary"
            >
              Add Product
            </button>
          </div>
        </div>
        {/*   <!-- Page Header Close -->
                <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-12">
            <div className="box">
              {/*  <div className="justify-between box-header">
                <div className="space-x-2 ti-btn-list rtl:space-x-reverse ">
                  <button
                    type="button"
                    className="ti-btn ti-btn-primary-full label-ti-btn"
                  >
                    <i className=" label-ti-btn-icon">
                      <BsFiletypeCsv className="w-5 h-5" />
                    </i>

                    <span className="hidden md:block">Export as Cvs</span>
                  </button>
                  <button
                    type="button"
                    className="ti-btn ti-btn-secondary-full label-ti-btn"
                  >
                    <i className=" label-ti-btn-icon">
                      <LuFileJson />
                    </i>
                    <span className="hidden md:block">Export as Json</span>
                  </button>
                  <button
                    type="button"
                    className="ti-btn ti-btn-warning-full label-ti-btn "
                  >
                    <i className=" label-ti-btn-icon">
                      <FaRegFilePdf />
                    </i>
                    <span className="hidden md:block">Export as Pdf</span>
                  </button>
                </div>
              </div> */}

              <ProductTable />
            </div>
          </div>
        </div>
        {/*  <!--End::row-1 --> */}
      </div>
    </>
  );
};

export default ProductsComponent;
