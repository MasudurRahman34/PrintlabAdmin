import TableRow from "./TableRow";
import Pagination from "@/components/ui/Pagination";
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import Link from "next/link";
import React from "react";

const ProductTable = () => {
  const columns = [
    {
      name: "Product Name",
      formatter: (cell) => {
        return cell;
      },
      sort: true,
    },
    {
      name: "Category",
      formatter: (_, row) => {
        return row._cells[1].data.length > 0
          ? row._cells[1].data?.map((category) => category.title).join(", ")
          : "No Category";
      },
    },
    {
      name: "Action",
      formatter: (cell) => {
        return _(
          <div class="flex flex-row items-center !gap-2 text-[0.9375rem]">
            <Link
              aria-label="anchor"
              href={`/products/${cell.slug}`}
              class="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
            >
              <i class="ri-pencil-line"></i>
            </Link>
            <button
              type="button"
              class="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
              onClick={() => setShow(true)}
            >
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div class="box-body">
      <Grid
        columns={columns}
        server={{
          url: "https://printlabapi.devtaijul.com/api/v1/products",
          then: (res) => {
            return res.data.map((product) => {
              return [product.title, product.categories, product];
            });
          },
        }}
        search={{
          server: {
            url: (prev, keyword) => `${prev}?search=${keyword}`,
          },
        }}
        pagination={{
          enabled: true,
          limit: 10,
        }}
      />
    </div>
  );
};

export default ProductTable;
