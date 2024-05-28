import TableRow from "./TableRow";
import Pagination from "@/components/ui/Pagination";
import React from "react";

const ProductTable = ({ products = [], links }) => {
  return (
    <div class="box-body">
      <div class="table-responsive mb-4">
        <table class="table whitespace-nowrap table-bordered min-w-full">
          <thead>
            <tr>
              <th scope="col" class="text-start">
                Image
              </th>
              <th scope="col" class="text-start">
                Product
              </th>
              <th scope="col" class="text-start">
                Category
              </th>
              <th scope="col" class="text-start">
                Price
              </th>

              <th scope="col" class="text-start">
                Published
              </th>
              <th scope="col" class="text-start">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <TableRow key={product.id} product={product} />;
            })}
          </tbody>
        </table>
      </div>
      <Pagination links={links} />
    </div>
  );
};

export default ProductTable;
