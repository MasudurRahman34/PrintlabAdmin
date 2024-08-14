import Pagination from "@/components/Pagination";
import Loading from "@/components/ui/Loading";
import { useAuth } from "@/hooks/useAuth";
import { getAllOrders } from "@/resolvers/query";
import { formatDateString, formateDate, formatPrice } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const TableData = ({}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { session } = useAuth();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isSuccess, refetch, error } = useQuery({
    queryKey: ["orders", session?.token, page],
    queryFn: () =>
      getAllOrders({
        page,
        token: session?.token,
        start_date: formatDateString(startDate),
        end_date: formatDateString(endDate),
      }),
    enabled: !!session?.token || !!page,
  });

  const handlePageChange = ({ page }) => {
    setPage(page);
  };

  useEffect(() => {
    refetch();
  }, [page, startDate, endDate]);

  return (
    <>
      <div className="justify-between box-header">
        <div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-base">Start Date :</h1>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  if (date > endDate) {
                    toast.error("Start date cannot be greater than end date");
                  } else {
                    setStartDate(date);
                  }
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="ti-form-control form-control"
              />
            </div>

            <div className="flex items-center gap-2">
              <h1 className="text-base">End Date :</h1>

              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="ti-form-control form-control"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box-body">
        {isLoading ? (
          <Loading />
        ) : data?.data?.length > 0 ? (
          <>
            <div className=" table-responsive">
              <table className="table min-w-full whitespace-nowrap table-bordered">
                <thead>
                  <tr className="bg-gray-200 border border-solid border-inherit dark:border-defaultborder/10">
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
                    <tr
                      className="border border-solid product-list border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                      key={item.id}
                    >
                      <td>{item.order_number}</td>

                      <td>{formateDate(item.created_at)}</td>

                      <td>
                        <span
                          className={`px-4 py-1 rounded-md text-white ${
                            item.status === "Pending" ||
                            item.status === "On Hold"
                              ? "bg-warning"
                              : item.status === "Paid"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {item.status}
                        </span>
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              {isSuccess && (
                <Pagination meta={data.meta} paginationFn={handlePageChange} />
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-32 ">
            <p className="text-base">
              No Order found from {formatDateString(startDate)} to{" "}
              {formatDateString(endDate)}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TableData;
