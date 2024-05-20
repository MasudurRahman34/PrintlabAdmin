import "gridjs/dist/theme/mermaid.css";
import { Grid, _ } from "gridjs-react";
import React, { useEffect } from "react";

const tableColumns = ["Title", "Category"];

const tableData = [
  ["t-shirt design", "T-shirt"],
  ["s-shirt design", "s-shirt"],
  ["pant", "pant"],
];

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
const AddProductleft = () => {
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
