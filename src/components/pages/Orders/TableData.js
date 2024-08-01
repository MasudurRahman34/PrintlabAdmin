import { useAuth } from "@/hooks/useAuth";
import { formatPrice } from "@/utils/common";
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
          return _(<span className="text-warning">{cell}</span>);
        } else if (cell === "Paid") {
          return _(<span className="text-success">{cell}</span>);
        } else {
          return _(<span className="text-danger">{cell}</span>);
        }
      },
    },
    {
      name: "Total Price",
      formatter: (cell) => formatPrice(cell),
    },
    {
      name: "Action",
      formatter: (cell) => {
        return _(
          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
            <Link
              aria-label="anchor"
              href={`/orders/${cell}`}
              className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
            >
              <i className="ri-pencil-line"></i>
            </Link>
            <button
              type="button"
              className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
              onClick={() => setShow(true)}
            >
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="box-body">
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
          server: {
            url: (prev, page) => `${prev}?page=${page}`,
          },
        }}
      />
    </div>
  );
};

export default TableData;
