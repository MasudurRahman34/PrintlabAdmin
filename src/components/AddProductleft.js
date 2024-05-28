// import "gridjs/dist/theme/mermaid.css";
// import { getAllProducts } from "@/resolvers/query";
// import { useQuery } from "@tanstack/react-query";
// import { Grid, _ } from "gridjs-react";
// import React, { useEffect } from "react";
import { useRouter } from "next/router";
// import { Pagination } from "gridjs/dist/src/view/plugin/pagination";
import TableRow from "./pages/products/TableRow";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/resolvers/query";
import { BsTypeH1 } from "react-icons/bs";
import SingleProducttable from "./ui/SingleProducttable";

const AddProductleft = () => {
  const router = useRouter();
  const { slug } = router.query;
console.log(slug)





  // const tableColumns = ["Title", "Category"];
  // const [tableData, setTableData] = React.useState([]);
  const { data:productss, isLoading, isError, refetch } = useQuery({
    queryKey: ["getProductsQuery"],
    queryFn:getAllProducts,
  });
  console.log(productss)
  // useEffect(() => {
  //   if (data) {
  //     setTableData(
  //       data?.data?.map((product) => [
  //         product?.title,
  //         product?.categories[0]?.title,
  //       ])
  //     );
  //   }
  // }, [data]);

  // function MyCustomGrid() {
  //   return (
  //     <Grid
  //       sort={true}
  //       search={true}
  //       columns={tableColumns}
  //       data={tableData}
  //       language={{
  //         search: {
  //           placeholder: "🔍 Search...",
  //         },
  //       }}
  //       pagination={{
  //         enabled: true,
  //         limit: 7,
  //       }}
  //     />
  //   );
  // }

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    // <div className="px-5 py-3 bg-white rounded-md xl:px-0 sm:col-span-12 md:col-span-6 lg:col-span-3">
    //   <div>
    //     <p className="mt-5 text-base font-semibold text-black ">Product</p>
    //     <div className="mt-2">
    //       <MyCustomGrid />
    //     </div>
    //   </div>
    // </div>
    <div class="box-body">
    <div class="table-responsive mb-4 overflow-y-auto max-h-[500px] ">
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
    {/* <Pagination links={links} /> */}
  </div>

  );
};

export default AddProductleft;
