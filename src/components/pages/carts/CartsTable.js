import Pagination from "@/components/Pagination";
import Loading from "@/components/ui/Loading";
import { useAuth } from "@/hooks/useAuth";
import { getAllCarts, getAllOrders } from "@/resolvers/query";
import { formatDateString, formateDate, formatPrice } from "@/utils/common";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const CartsTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { session } = useAuth();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isSuccess, refetch, error } = useQuery({
    queryKey: ["carts", session?.token, page],
    queryFn: () =>
      getAllCarts({
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
  }, [page, startDate, endDate, refetch]);

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
                      Product Title
                    </th>

                    <th scope="col" className="text-start">
                      IP Address
                    </th>
                    <th scope="col" className="text-start">
                      Combination String
                    </th>
                    <th scope="col" className="text-start">
                      Status
                    </th>
                    <th scope="col" className="text-start">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((item) => (
                    <tr
                      className="border border-solid product-list border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
                      key={item.id}
                    >
                      <td>{item.product.title}</td>

                      <td>{item.ip_address}</td>

                      <td>{item.combination_string}</td>
                      <td>
                        {item.completed === 1 ? (
                          <span className="px-4 py-1 text-white rounded-md bg-success">
                            Completed
                          </span>
                        ) : (
                          <span className="px-4 py-1 text-white rounded-md bg-warning">
                            Pending
                          </span>
                        )}
                      </td>
                      <td>{formatPrice(item.total)}</td>
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

export default CartsTable;
