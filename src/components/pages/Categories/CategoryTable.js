import CategoryRow from "./CategoryRow";
import Link from "next/link";
import React from "react";

const CategoryTable = ({ data, refetch }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xl:col-span-12">
        <div className="box">
          <div className="box-header">
            <div className="box-title">Category List</div>
          </div>
          <div className="box-body">
            <div className="mb-4 table-responsive">
              <table className="table min-w-full whitespace-nowrap table-bordered">
                <thead>
                  <tr>
                    <th scope="col" className="!text-start">
                      <input
                        className="form-check-input check-all"
                        type="checkbox"
                        id="all-products"
                        value=""
                        aria-label="..."
                      />
                    </th>
                    <th scope="col" className="text-start">
                      Image
                    </th>
                    <th scope="col" className="text-start">
                      Name
                    </th>
                    <th scope="col" className="text-start">
                      Description
                    </th>
                    <th scope="col" className="text-start">
                      Slug
                    </th>

                    <th scope="col" className="text-start">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((item) => (
                    <CategoryRow key={item.id} item={item} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex-wrap items-center justify-between sm:flex">
              <nav aria-label="Page navigation" className="">
                <ul className="ti-pagination mb-0 flex flex-row rounded-sm text-[1rem] !ps-0">
                  <li className="page-item disabled">
                    <a
                      className="page-link !py-[0.375rem] !px-[0.75rem]"
                      href="javascript:void(0);"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a
                      className="page-link !py-[0.375rem] !px-[0.75rem]"
                      href="javascript:void(0);"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link !py-[0.375rem] !px-[0.75rem]"
                      href="javascript:void(0);"
                    >
                      2
                    </a>
                  </li>
                  <li className="hidden page-item sm:block ">
                    <a
                      className="page-link !py-[0.375rem] !px-[0.75rem]"
                      href="javascript:void(0);"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]"
                      href="javascript:void(0);"
                    >
                      next
                    </a>
                  </li>
                </ul>
              </nav>
              <button
                type="button"
                className="ti-btn bg-danger text-white !font-medium m-1"
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
