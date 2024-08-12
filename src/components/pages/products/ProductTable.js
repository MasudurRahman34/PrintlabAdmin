import TableRow from "./TableRow";
import Pagination from "@/components/Pagination";
import Loading from "@/components/ui/Loading";
import useToastMessage from "@/hooks/useToastMessage";
import { deleteProductMutation } from "@/resolvers/mutation";
import { getAllProducts } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductTable = () => {
  const showToastMessage = useToastMessage();
  const [show, setShow] = useState(true);
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch, isError, isFetching, isSuccess } = useQuery(
    {
      queryKey: ["get-all-products", page],
      queryFn: () => getAllProducts({ page }),
      enabled: !!page,
    }
  );

  const { mutate, isPending } = useMutation({
    mutationKey: "delete-product",
    mutationFn: deleteProductMutation,
  });

  const deleteProduct = (id) => {
    mutate(
      {
        product_id: id,
      },
      {
        onSuccess: (data) => {
          toast.success("Product deleted successfully");
          refetch();
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  return (
    <div class="box-body">
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <div className="mb-4 table-responsive">
          <table className="table min-w-full border whitespace-nowrap table-hover table-bordered">
            <thead>
              <tr className="bg-gray-200 border border-solid border-inherit dark:border-defaultborder/10">
                <th scope="col" className="text-start">
                  Image
                </th>

                <th scope="col" className="text-start">
                  Title
                </th>
                <th scope="col" className="text-start">
                  Category
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
                    <div className="flex items-center">
                      <div className="me-2">
                        <span className="avatar avatar-md ">
                          <Image
                            src={
                              item.media.find((media) => media.is_profile === 1)
                                ?.url ||
                              item.media[0]?.url ||
                              "/assets/media/placeholder.png"
                            }
                            alt="Product Image"
                            width={50}
                            height={50}
                          />
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>{item.title}</td>

                  <td>
                    {item.categories.map((category) => (
                      <span
                        key={category.id}
                        className="badge bg-light text-default"
                      >
                        {category.title}
                      </span>
                    ))}
                  </td>

                  <td>
                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                      <Link
                        href={`/products/${item.slug}`}
                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
                      >
                        <i className="ri-pencil-line"></i>
                      </Link>
                      <button
                        type="button"
                        disabled={isPending}
                        onClick={() => {
                          deleteProduct(item.id);
                        }}
                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
                      >
                        <i class="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isSuccess && <Pagination meta={data.meta} />}
        </div>
      )}
    </div>
  );
};

export default ProductTable;
