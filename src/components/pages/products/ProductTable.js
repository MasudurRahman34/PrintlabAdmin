import TableRow from "./TableRow";
import React from "react";

const ProductTable = ({ products = [] }) => {
  return (
    <div class="box-body">
      <div class="table-responsive mb-4">
        <table class="table whitespace-nowrap table-bordered min-w-full">
          <thead>
            <tr>
              <th scope="col" class="!text-start">
                <input
                  class="form-check-input check-all"
                  type="checkbox"
                  id="all-products"
                  value=""
                  aria-label="..."
                />
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
      <div class="sm:flex items-center justify-end flex-wrap">
        <nav aria-label="Page navigation" class="">
          <ul class="ti-pagination mb-0 flex flex-row rounded-sm text-[1rem] !ps-0">
            <li class="page-item disabled">
              <a
                class="page-link !py-[0.375rem] !px-[0.75rem]"
                href="javascript:void(0);"
              >
                Previous
              </a>
            </li>
            <li class="page-item active">
              <a
                class="page-link !py-[0.375rem] !px-[0.75rem]"
                href="javascript:void(0);"
              >
                1
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link !py-[0.375rem] !px-[0.75rem]"
                href="javascript:void(0);"
              >
                2
              </a>
            </li>
            <li class="page-item sm:block hidden ">
              <a
                class="page-link !py-[0.375rem] !px-[0.75rem]"
                href="javascript:void(0);"
              >
                3
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link !text-primary !py-[0.375rem] !px-[0.75rem]"
                href="javascript:void(0);"
              >
                next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductTable;
