import Pagination from "@/components/Pagination";
import { useAuth } from "@/hooks/useAuth";
import { getAllOrders } from "@/resolvers/query";
import { formateDate, formatPrice } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import Link from "next/link";
import React, { useState } from "react";

const TableData = ({}) => {
  const { session } = useAuth();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isSuccess, refetch, error } = useQuery({
    queryKey: ["orders", session?.token, page],
    queryFn: () => getAllOrders({ page, token: session?.token }),
    enabled: !!session?.token || !!page,
  });

  console.log(data);

  return (
    <div className="box-body">
      <div className=" table-responsive">
        <table className="table min-w-full whitespace-nowrap table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-start">
                Order Number
              </th>

              <th scope="col" className="text-start">
                Order Date
              </th>
              <th scope="col" className="text-start">
                Payment Status
              </th>
              <th scope="col" className="text-start">
                Total Price
              </th>

              <th scope="col" className="text-start">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item) => (
              <tr className="product-list" key={item.id}>
                <td>{item.order_number}</td>

                <td>{formateDate(item.created_at)}</td>

                <td>
                  <span className="text-warning">{item.status}</span>
                </td>
                <td>{formatPrice(item.total_price)}</td>

                <td>
                  <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                    <Link
                      aria-label="anchor"
                      href={`/orders/${item.id}`}
                      className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
                    >
                      <i className="ri-pencil-line"></i>
                    </Link>
                    {/*  <button
                      type="button"
                      className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>{isSuccess && <Pagination meta={data.meta} />}</div>
    </div>
  );
};

export default TableData;
