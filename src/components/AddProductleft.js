
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/resolvers/query";
import SingleProducttable from "./ui/SingleProducttable";
import { useState } from "react";
import Pagination from "./ui/Pagination";
import { useRouter } from "next/router";


const AddProductleft = () => {
    const router = useRouter();
  const { page } = router.query;
  const [searchitem,setSearchItem]=useState("")
  const { data:productss, isLoading, isError, refetch } = useQuery({
    queryKey: ["getProductsQuery"],
    queryFn:getAllProducts,
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };


  return (
    <div class="box-body bg-white">
     <div className="flex justify-between py-3">
     <h5>Products</h5>
     <input onChange={handleSearchChange} placeholder="Search" className="rounded-md text-sm w-[90%] ml-4 " />
     </div>
    <div class="table-responsive mb-4 overflow-y-auto max-h-[450px] ">
      <table class="table whitespace-nowrap table-bordered min-w-full">
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
          {productss?.data?.map((product) =>(<SingleProducttable product={product} key={product?.title}/>))}
        </tbody>
      </table>
    </div>
    <Pagination links={productss.links}  />
  </div>

  );
};

export default AddProductleft;
