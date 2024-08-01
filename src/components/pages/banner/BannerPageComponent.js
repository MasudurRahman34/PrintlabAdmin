import DeleteBanner from "./DeleteBanner";
import BannerImg from "@/components/BannerImg";
import Pagination from "@/components/Pagination";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { deleteBannerMutation } from "@/resolvers/mutation";
import { getBannersQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const BannerPageComponent = () => {
  const { session } = useAuth();

  const { data, isLoading, isError, refetch, isSuccess } = useQuery({
    queryKey: ["get-all-banner", session?.token],
    queryFn: () => getBannersQuery({ token: session?.token }),
    enabled: !!session?.token,
  });

  return (
    <div>
      <div className="justify-between block page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            Products List
          </h3>
        </div>
        <ol className="flex items-center min-w-0 whitespace-nowrap">
          <li className="text-[0.813rem] ps-[0.5rem]">
            <a
              className="flex items-center truncate text-primary hover:text-primary dark:text-primary"
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
            Banner List
          </li>
        </ol>
      </div>

      <BannerImg />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Banner</div>
            </div>
            {isLoading ? (
              <div>Loading</div>
            ) : isError ? (
              <div>Error</div>
            ) : data?.data.length > 0 ? (
              <div className="box-body">
                <div className="mb-4 table-responsive">
                  <table className="table min-w-full whitespace-nowrap table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" className="text-start">
                          Banner Image
                        </th>
                        <th scope="col" className="text-start">
                          Link
                        </th>
                        <th scope="col" className="text-start">
                          Title
                        </th>

                        <th scope="col" className="text-start">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data.map((item) => (
                        <tr className="product-list" key={item.id}>
                          <td>
                            <div className="flex items-center">
                              <div className="me-2">
                                <span className="avatar avatar-md ">
                                  <img src={item.imageUrl} alt="" />
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-light text-default">
                              {item.imageUrl}
                            </span>
                          </td>
                          <td>{item.title}</td>

                          <td>
                            <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                              <a
                                aria-label="anchor"
                                href="edit-products.html"
                                className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
                              >
                                <i className="ri-pencil-line"></i>
                              </a>
                              <DeleteBanner id={item.id} refetch={refetch} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="p-4 text-center">No data found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPageComponent;
