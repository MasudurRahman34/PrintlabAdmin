import React from "react";

const CategoryTable = ({ data }) => {
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
                    <tr className="product-list" key={item}>
                      <td className="product-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`product${item}`}
                          value=""
                          aria-label="..."
                        />
                      </td>
                      <td>
                        <div className="flex items-center">
                          <div className="me-2">
                            <span class="avatar me-2">
                              <img
                                src="../assets/images/faces/2.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-semibold">{item.title}</div>
                      </td>
                      <td className="max-w-sm text-wrap">
                        <div className=" text-muted">{item.description}</div>
                      </td>

                      <td>
                        <div className="font-semibold">{item.slug}</div>
                      </td>

                      <td>
                        <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                          <a
                            aria-label="anchor"
                            href="edit-products.html"
                            className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
                          >
                            <i className="ri-pencil-line"></i>
                          </a>
                          <a
                            aria-label="anchor"
                            href="javascript:void(0);"
                            className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
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
