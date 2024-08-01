import { useAuth } from "@/hooks/useAuth";
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import Link from "next/link";
import React from "react";

const TableData = ({}) => {
  const { session } = useAuth();
  const columns = [
    {
      name: "Order Number",
      formatter: (cell) => cell,
      sort: true,
    },
    {
      name: "Customer Name",
      formatter: (cell) => cell,
    },
    {
      name: "Payment Status",
      formatter: (cell) => {
        if (cell === "pending") {
          return _(<span class="text-warning">{cell}</span>);
        } else if (status === "completed") {
          return _(<span class="text-success">{cell}</span>);
        } else {
          return _(<span class="text-danger">{cell}</span>);
        }
      },
    },
    {
      name: "Total Price",
      formatter: (cell) => cell,
    },
    {
      name: "Action",
      formatter: (cell) => {
        return _(
          <div class="flex flex-row items-center !gap-2 text-[0.9375rem]">
            <Link
              aria-label="anchor"
              href={`/orders/${cell}`}
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
          url: "https://printlabapi.devtaijul.com/api/v1/orders",
          then: (res) => {
            return res.data.map((order) => {
              const { order_number, order_date, total_price, status, id } =
                order;
              return [order_number, order_date, status, total_price, id];
            });
          },
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        }}
        search={{
          server: {
            url: (prev, keyword) => `${prev}?search=${keyword}`,
          },
        }}
        pagination={{
          enabled: true,
          limit: 2,
          server: {
            url: (prev, page, limit) =>
              `${prev}?limit=${limit}&offset=${page * limit}`,
          },
        }}
      />
    </div>
  );
};

export default TableData;
