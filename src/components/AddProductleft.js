import CreateProductModal from "./pages/products/CreateProductModal";
import Pagination from "./ui/Pagination";
import SingleProducttable from "./ui/SingleProducttable";
import { getAllProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const AddProductleft = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const { page } = router.query;
  const [searchitem, setSearchItem] = useState("");
  const {
    data: productss,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["getProductsQuery"],
    queryFn: getAllProducts,
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
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
            Add Product
          </button>
        </div>
        <div class="table-responsive mb-4 overflow-y-auto max-h-[450px] ">
          <table class="table whitespace-nowrap table-bordered min-w-full table-auto">
            <thead>
              <tr>
                <th scope="col" class="text-start">
                  Title
                </th>
                <th scope="col" class="text-start">
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
        <Pagination links={productss.links} />
      </div>
    </>
  );
};

export default AddProductleft;
