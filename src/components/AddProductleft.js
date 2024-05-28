
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/resolvers/query";
import SingleProducttable from "./ui/SingleProducttable";
import { useState } from "react";

const AddProductleft = () => {
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
  console.log(searchitem)
  return (
    <div class="box-body bg-white">
     <div className="flex justify-between py-3">
     <h5>Products</h5>
     <input onChange={handleSearchChange} placeholder="Search" className="rounded-md text-sm" />
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
  </div>

  );
};

export default AddProductleft;
