import Pagination from "./Pagination";
import CreateProductModal from "./pages/products/CreateProductModal";
import SingleProducttable from "./ui/SingleProducttable";
import { getAllProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const AddProductleft = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [searchitem, setSearchItem] = useState("");
  const {
    data: productss,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["getProductsQuery", page],
    queryFn: () => getAllProducts({ page }),
    enabled: !!page,
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <CreateProductModal
        refetch={refetch}
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      />

      <div class="box-body bg-white">
        <div className="flex justify-between py-3">
          <input
            onChange={handleSearchChange}
            placeholder="Search"
            className="text-xs rounded-md"
          />
          <button
            onClick={() => setModalIsOpen(true)}
            className="ti-btn ti-btn-primary-full ti-btn-wave"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="table-responsive mb-4 overflow-y-auto max-h-[450px] ">
          <table className="table min-w-full table-auto whitespace-nowrap table-bordered">
            <thead>
              <tr>
                <th scope="col" className="text-start ">
                  Title
                </th>
                <th scope="col" className="text-start">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              {productss?.data?.map((product) => (
                <SingleProducttable product={product} key={product?.title} />
              ))}
            </tbody>
          </table>
        </div>
        {isSuccess && (
          <Pagination meta={productss?.meta} paginationFn={handlePageChange} />
        )}
      </div>
    </>
  );
};

export default AddProductleft;
