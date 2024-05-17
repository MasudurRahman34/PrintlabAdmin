import "gridjs/dist/theme/mermaid.css";
import { Grid, _ } from "gridjs-react";
import React, { useEffect } from "react";
import { AdminLayout } from "@/layout/AdminLayout";

const GridHeaderButton = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const gridjsHeadRoot = document.getElementsByClassName("gridjs-head");
      if (gridjsHeadRoot.length > 0) {
        const button = document.createElement("button");
        button.innerText = "Add";
        button.style.cssText = `
          background-color: #0069d9;
          color: #fff;
          border-radius: .25rem;
          padding: .375rem .75rem;
          float: right;
        `;
        button.onclick = function () {
          alert(1);
        };
        gridjsHeadRoot[0].appendChild(button);

        return () => {
          if (gridjsHeadRoot[0]) {
            gridjsHeadRoot[0].removeChild(button);
          }
        };
      }
    }
  }, []);

  return null;
};

const tableColumns = [
  {
    name: "Image",
    formatter: (cell) => _(<img src={cell} alt="Product Image" style={{ width: '50px', height: '50px' }} />)
  },
  "Title",
  "Category",
  "Price",
  "Created by"
];

const tableData = [
  ["https://via.placeholder.com/50", "T-shirt design", "T-shirt", "$200", "2024.05.17"],
  ["https://via.placeholder.com/50", "Pant design", "Pant", "$200", "2024.05.16"],
  ["https://via.placeholder.com/50", "Mug design", "Mug", "$200", "2024.05.14"],
  ["https://via.placeholder.com/50", "t-shirt design", "T-shirt", "$200", "2024.05.13"],
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

export default function products() {
  return (
    <AdminLayout>
      <div>
        <p className="text-base font-semibold text-black mt-5">Product List</p>
        <div className="mt-2 text-center">
          <MyCustomGrid />
          <GridHeaderButton />
        </div>
      </div>
    </AdminLayout>
  );
}
