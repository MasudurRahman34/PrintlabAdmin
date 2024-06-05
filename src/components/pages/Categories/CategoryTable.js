import CategoryRow from "./CategoryRow";
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
            {/*  <Pagination links={data?.links} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
