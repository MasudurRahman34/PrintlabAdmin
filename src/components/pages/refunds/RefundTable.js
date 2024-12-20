import Pagination from "@/components/Pagination";
import Loading from "@/components/ui/Loading";
import { useAuth } from "@/hooks/useAuth";

import { getAllRefunds } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";

import React, { useState } from "react";

import UpdateRefund from "./UpdateRefund";
import { formateDate } from "@/utils/common";
import Link from "next/link";
import DateFormatter from "@/components/ui/DateFormatter";

const RefundTable = () => {
  const { session } = useAuth();

  const [page, setPage] = useState(1);
  const { data, isLoading, refetch, isError, isSuccess } = useQuery({
    queryKey: ["get-all-refunds", page, session?.token],
    queryFn: () => getAllRefunds({ page, token: session?.token }),
    enabled: !!page && !!session?.token,
  });

  const paginationFn = ({ page }) => {
    setPage(page);
    refetch();
  };

  return (
    <div class="box-body">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div>Error</div>
      ) : isSuccess ? (
        <div className="mb-4 table-responsive">
          {data?.data?.length > 0 ? (
            <div>
              <table className="table min-w-full border whitespace-nowrap table-hover table-bordered">
                <thead>
                  <tr className="bg-gray-200 border border-solid border-inherit dark:border-defaultborder/10">
                    <th scope="col" className="text-start">
                      Order Item Number
                    </th>
                    <th scope="col" className="text-start">
                      Date
                    </th>

                    <th scope="col" className="text-start">
                      Reason for Refund
                    </th>
                    <th scope="col" className="text-start">
                      Refund status
                    </th>

                    <th scope="col" className="text-start">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((item) => (
                    <tr
                      className="border border-solid product-list border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                      key={item.id}
                    >
                      <td>
                        <Link
                          href={`/order-items/${item?.order_item?.id}`}
                          className="hover:underline"
                        >
                          {item?.order_item?.order_item_number}
                        </Link>
                      </td>
                      <td>
                        <DateFormatter dateInput={item.createdAt} />{" "}
                      </td>

                      <td>
                        <p>{item.refund_reason}</p>
                      </td>
                      <td>
                        {item.status === 0 ? (
                          <p className="text-warning">Pending</p>
                        ) : item.status === 1 ? (
                          <p className="text-success"> Approved</p>
                        ) : (
                          <p className="text-danger">Rejected</p>
                        )}
                      </td>

                      <td>
                        <UpdateRefund item={item} refetch={refetch} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isSuccess && (
                <Pagination meta={data.meta} paginationFn={paginationFn} />
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-32 ">
              <p className="text-base">No Refund Available</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default RefundTable;
