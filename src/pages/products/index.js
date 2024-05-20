import "gridjs/dist/theme/mermaid.css";
import CreateProductModal from "@/components/pages/products/CreateProductModal";
import { AdminLayout } from "@/layout/AdminLayout";
import { Grid, _ } from "gridjs-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function MyCustomGrid() {
  const router = useRouter();
  const tableColumns = [
    {
      name: "Image",
      sortable: false,
      width: "auto",
      formatter: (cell) =>
        _(
          !cell || cell.length > 0 ? (
            cell.map((item) => (
              <>
                {item.is_profile === 1 ? (
                  <img
                    src={item.url}
                    alt="Product Image"
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  <img
                    src={"https://via.placeholder.com/50"}
                    alt="Product Image"
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
              </>
            ))
          ) : (
            <img
              src={"https://via.placeholder.com/50"}
              alt="Product Image"
              style={{ width: "50px", height: "50px" }}
            />
          )
        ),
    },
    {
      name: "Title",
      sort: true,
    },
    {
      name: "Category",
      sort: true,
      formatter: (cell) => {
        return cell.map((item) => item.title).join(", ");
      },
    },
    {
      name: "Published",
      sort: true,
      formatter: (cell) => {
        return cell.value === 1 ? "Yes" : "No";
      },
    },

    {
      name: "Action",
      sort: false,
      formatter: (cell) => {
        return "Edit";
      },
      attributes: (cell) => {
        return {
          onClick: () => {
            router.push(`/products/${cell.id}`);
          },
          className: "text-blue-500 cursor-pointer border text-center",
        };
      },
    },
  ];
  return (
    <Grid
      search={true}
      columns={tableColumns}
      autoWidth={true}
      server={{
        url: "https://printlabapi.devtaijul.com/api/v1/products",
        then: (data) =>
          data.data.map((item) => [
            item.media,
            item.title,
            item.categories,
            item.visibility,
            item,
          ]),
      }}
      resizable={true}
      language={{
        search: {
          placeholder: "🔍 Search...",
        },
      }}
      pagination={{
        enabled: true,
        limit: 10,
      }}
    />
  );
}

export default function products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AdminLayout>
      <CreateProductModal
        modalIsOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
      <div>
        <div className="flex items-center gap-4 mt-4">
          <p className="text-base font-semibold text-black ">Product List</p>
          <button
            type="button"
            className="ti-btn ti-btn-primary-full ti-btn-wave"
            onClick={() => setIsModalOpen(true)}
          >
            Add new product
          </button>
        </div>
        <div className="mt-2 text-center">
          <MyCustomGrid />
        </div>
      </div>
    </AdminLayout>
  );
}
