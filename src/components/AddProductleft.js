import "gridjs/dist/theme/mermaid.css";
import { getAllProducts } from "@/resolvers/query";
import { useQuery } from "@tanstack/react-query";
import { Grid, _ } from "gridjs-react";
import React, { useEffect } from "react";

const AddProductleft = ({ Products }) => {
  const tableColumns = ["Title", "Category"];

  const [tableData, setTableData] = React.useState([]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "getProductsQuery",
    queryFn: getAllProducts,
  });

  useEffect(() => {
    if (data) {
      setTableData(
        data?.data?.map((product) => [
          product?.title,
          product?.categories[0]?.title,
        ])
      );
    }
  }, [data]);

  function MyCustomGrid() {
    return (
      <Grid
        sort={true}
        search={true}
        columns={tableColumns}
        data={tableData}
        language={{
          search: {
            placeholder: "🔍 Search...",
          },
        }}
        pagination={{
          enabled: true,
          limit: 7,
        }}
      />
    );
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="px-5 py-3 bg-white rounded-md xl:px-0 sm:col-span-12 md:col-span-6 lg:col-span-3">
      <div>
        <p className="mt-5 text-base font-semibold text-black ">Product</p>
        <div className="mt-2">
          <MyCustomGrid />
        </div>
      </div>
    </div>
  );
};

export default AddProductleft;
