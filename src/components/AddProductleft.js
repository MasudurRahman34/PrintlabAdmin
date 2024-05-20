import "gridjs/dist/theme/mermaid.css";
import { Grid, _ } from "gridjs-react";
import React, { useEffect} from "react";
const AddProductleft = ({Products}) => {
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
          gridjsHeadRoot[0]?.appendChild(button);
  
          return () => {
            if (gridjsHeadRoot[0]) {
              gridjsHeadRoot[0]?.removeChild(button);
            }
          };
        }
      }
    }, []);
  
    return null;
  };
  const tableColumns = ["Title", "Category"];
  const tableData = Products?.map(product => [product?.title, product?.categories[0]?.title]);

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
  return (
    <div className="bg-white  px-5 py-3 xl:px-0 rounded-md  sm:col-span-12 md:col-span-6 lg:col-span-3">

      <div>
        <p className="text-base  font-semibold text-black mt-5  ">Product</p>
        <div className="mt-2">

          <MyCustomGrid />
          <GridHeaderButton />
        </div>
      </div>
    </div>
  );
};

export default AddProductleft;
