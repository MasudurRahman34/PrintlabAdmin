import Card from "@/components/Card";
import DealsStatistics from "@/components/DealsStatistics";
import ManageProduct from "@/components/ManageProduct";

const admindaseboard = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">
            Welcome back, Json Taylor !
          </p>
          <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">
            Track your sales activity, leads and deals here.
          </p>
        </div>
        <div className="btn-list md:mt-0 mt-2">
          <button
            type="button"
            className="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.375rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none"
          >
            <i className="ri-filter-3-fill  inline-block"></i>Filters
          </button>
          <button
            type="button"
            className="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] shadow-none"
          >
            <i className="ri-upload-cloud-line  inline-block"></i>Export
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xxl:col-span-9 xl:col-span-12  col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-4 xl:col-span-4  col-span-12">
              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box crm-highlight-card">
                  <div className="box-body">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[1.125rem] text-white mb-2">
                          Your target is incomplete
                        </div>
                        <span className="block text-[0.75rem] text-white">
                          <span className="opacity-[0.7]">
                            You have completed
                          </span>
                          <span className="font-semibold text-warning">
                            48%
                          </span>{" "}
                          <span className="opacity-[0.7]">
                            of the given target, you can also check your status
                          </span>
                          .
                        </span>
                        <span className="block font-semibold mt-[0.125rem]">
                          <a
                            className="text-white text-[0.813rem]"
                            href="javascript:void(0);"
                          >
                            <u>Click here</u>
                          </a>
                        </span>
                      </div>
                      <div>
                        <div id="crm-main"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box">
                  <div className="box-header flex justify-between">
                    <div className="box-title">Top Deals</div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem]  !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical text-[0.8rem]"></i>
                      </a>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Month
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Year
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="list-none crm-top-deals mb-0">
                      <li className="mb-[0.9rem]">
                        <div className="flex items-start flex-wrap">
                          <div className="me-2">
                            <span className=" inline-flex items-center justify-center">
                              <img
                                src="../assets/images/faces/10.jpg"
                                alt=""
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                              />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">
                              Michael Jordan
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                              michael.jordan@example.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">
                            $2,893
                          </div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-start flex-wrap">
                          <div className="me-2">
                            <span className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-warning  bg-warning/10 font-semibold">
                              EK
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">
                              Emigo Kiaren
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                              emigo.kiaren@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">
                            $4,289
                          </div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span className="inline-flex items-center justify-center">
                              <img
                                src="../assets/images/faces/12.jpg"
                                alt=""
                                className="!w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full"
                              />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">
                              Randy Origoan
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                              randy.origoan@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">
                            $6,347
                          </div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-success bg-success/10 font-semibold">
                              GP
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">
                              George Pieterson
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                              george.pieterson@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">
                            $3,894
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-primary bg-primary/10 font-semibold">
                              KA
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">
                              Kiara Advain
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                              kiaraadvain214@gmail.com
                            </p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">
                            $2,679
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box">
                  <div className="box-header justify-between">
                    <div className="box-title">Profit Earned</div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        href="javascript:void(0);"
                        className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                        aria-expanded="false"
                      >
                        View All
                        <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </a>
                      <ul
                        className="hs-dropdown-menu ti-dropdown-menu hidden"
                        role="menu"
                      >
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Today
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            This Week
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Last Week
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body !py-0 !ps-0">
                    <div id="crm-profits-earned"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-8  xl:col-span-8  col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <ManageProduct />
                <ManageProduct />
                <ManageProduct />
                <ManageProduct />
                <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                  <div className="box">
                    <div className="box-header !gap-0 !m-0 justify-between">
                      <div className="box-title">Revenue Analytics</div>
                      <div className="hs-dropdown ti-dropdown">
                        <a
                          href="javascript:void(0);"
                          className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                          aria-expanded="false"
                        >
                          View All
                          <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                        </a>
                        <ul
                          className="hs-dropdown-menu ti-dropdown-menu hidden"
                          role="menu"
                        >
                          <li>
                            <a
                              className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                              href="javascript:void(0);"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                              href="javascript:void(0);"
                            >
                              This Week
                            </a>
                          </li>
                          <li>
                            <a
                              className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                              href="javascript:void(0);"
                            >
                              Last Week
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="box-body !py-5">
                      <div id="crm-revenue-analytics"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
              <div className="box custom-card">
                <div className="box-header justify-between">
                  <div className="box-title">Deals Statistics</div>
                  <div className="flex flex-wrap gap-2">
                    <div>
                      <input
                        className="ti-form-control form-control-sm"
                        type="text"
                        placeholder="Search Here"
                        aria-label=".form-control-sm example"
                      />
                    </div>
                    <div className="hs-dropdown ti-dropdown">
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                        aria-expanded="false"
                      >
                        Sort By
                        <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </a>
                      <ul
                        className="hs-dropdown-menu ti-dropdown-menu hidden"
                        role="menu"
                      >
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            New
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Popular
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="javascript:void(0);"
                          >
                            Relevant
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  <div className="overflow-x-auto">
                    <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                      <thead>
                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                          <th scope="row" className="!ps-4 !pe-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkboxNoLabel1"
                              value=""
                              aria-label="..."
                            />
                          </th>
                          <th
                            scope="col"
                            className="!text-start !text-[0.85rem] min-w-[200px]"
                          >
                            Sales Rep
                          </th>
                          <th
                            scope="col"
                            className="!text-start !text-[0.85rem]"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="!text-start !text-[0.85rem]"
                          >
                            Mail
                          </th>
                          <th
                            scope="col"
                            className="!text-start !text-[0.85rem]"
                          >
                            Location
                          </th>
                          <th
                            scope="col"
                            className="!text-start !text-[0.85rem]"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="!text-start !text-[0.85rem]"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <DealsStatistics />
                    </table>
                  </div>
                </div>
                <div className="box-footer">
                  <div className="sm:flex items-center">
                    <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                      Showing 5 Entries{" "}
                      <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                    </div>
                    <div className="ms-auto">
                      <nav
                        aria-label="Page navigation"
                        className="pagination-style-4"
                      >
                        <ul className="ti-pagination mb-0">
                          <li className="page-item disabled">
                            <a className="page-link" href="javascript:void(0);">
                              Prev
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link active"
                              href="javascript:void(0);"
                            >
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:void(0);">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link !text-primary"
                              href="javascript:void(0);"
                            >
                              next
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-12 xl:col-span-12  col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">Leads By Source</div>
                  <div className="hs-dropdown ti-dropdown">
                    <a
                      aria-label="anchor"
                      href="javascript:void(0);"
                      className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ! !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                      aria-expanded="false"
                    >
                      <i className="fe fe-more-vertical text-[0.8rem]"></i>
                    </a>
                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Week
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Month
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Year
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-body overflow-hidden">
                  <div className="leads-source-chart flex items-center justify-center">
                    <canvas
                      id="leads-source"
                      className="chartjs-chart w-full"
                    ></canvas>
                    <div className="lead-source-value ">
                      <span className="block text-[0.875rem] ">Total</span>
                      <span className="block text-[1.5625rem] font-bold">
                        4,145
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
                  <div className="col !p-0">
                    <div className="!ps-4 p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend mobile inline-block">
                        Mobile
                      </span>
                      <div>
                        <span className="text-[1rem]  font-semibold">
                          1,624
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">
                        Desktop
                      </span>
                      <div>
                        <span className="text-[1rem]  font-semibold">
                          1,267
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend laptop inline-block">
                        Laptop
                      </span>
                      <div>
                        <span className="text-[1rem]  font-semibold">
                          1,153
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="!pe-4 p-[0.95rem] text-center">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend tablet inline-block">
                        Tablet
                      </span>
                      <div>
                        <span className="text-[1rem]  font-semibold">679</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-6  col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">Deals Status</div>
                  <div className="hs-dropdown ti-dropdown">
                    <a
                      href="javascript:void(0);"
                      className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                      aria-expanded="false"
                    >
                      View All
                      <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                    </a>
                    <ul
                      className="hs-dropdown-menu ti-dropdown-menu hidden"
                      role="menu"
                    >
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Today
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          This Week
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Last Week
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div className="flex items-center mb-[0.8rem]">
                    <h4 className="font-bold mb-0 text-[1.5rem] ">4,289</h4>
                    <div className="ms-2">
                      <span className="py-[0.18rem] px-[0.45rem] rounded-sm text-success !font-medium !text-[0.75em] bg-success/10">
                        1.02
                        <i className="ri-arrow-up-s-fill align-mmiddle ms-1"></i>
                      </span>
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] ms-1">
                        compared to last week
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
                    <div
                      className="flex flex-col justify-center rounded-s-[0.625rem] overflow-hidden bg-primary w-[21%]"
                      aria-valuenow="21"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="flex flex-col justify-center rounded-none overflow-hidden bg-info w-[26%]"
                      aria-valuenow="26"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="flex flex-col justify-center rounded-none overflow-hidden bg-warning w-[35%]"
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="flex flex-col justify-center rounded-e-[0.625rem] overflow-hidden bg-success w-[18%]"
                      aria-valuenow="18"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <ul className="list-none mb-0 pt-2 crm-deals-status">
                    <li className="primary">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Successful Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                          987 deals
                        </div>
                      </div>
                    </li>
                    <li className="info">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Pending Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                          1,073 deals
                        </div>
                      </div>
                    </li>
                    <li className="warning">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Rejected Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                          1,674 deals
                        </div>
                      </div>
                    </li>
                    <li className="success">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Upcoming Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">
                          921 deals
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-6  col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">Recent Activity</div>
                  <div className="hs-dropdown ti-dropdown">
                    <a
                      href="javascript:void(0);"
                      className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                      aria-expanded="false"
                    >
                      View All
                      <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                    </a>
                    <ul
                      className="hs-dropdown-menu ti-dropdown-menu hidden"
                      role="menu"
                    >
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Today
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          This Week
                        </a>
                      </li>
                      <li>
                        <a
                          className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="javascript:void(0);"
                        >
                          Last Week
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div>
                    <ul className="list-none mb-0 crm-recent-activity">
                      <li className="crm-recent-activity-content">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium leading-[1.25rem] text-[0.65rem] text-primary bg-primary/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content text-defaultsize">
                            <span className="font-semibold ">
                              Update of calendar events &amp;
                            </span>
                            <span>
                              <a
                                href="javascript:void(0);"
                                className="text-primary font-semibold"
                              >
                                Added new events in next week.
                              </a>
                            </span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              4:45PM
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content">
                        <div className="flex items-start  text-defaultsize">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>
                              New theme for{" "}
                              <span className="font-semibold">
                                Spruko Website
                              </span>{" "}
                              completed
                            </span>
                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">
                              Lorem ipsum, dolor sit amet.
                            </span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              3 hrs
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-success bg-success/10 rounded-full">
                              <i className="bi bi-circle-fill  text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>
                              Created a{" "}
                              <span className="text-success font-semibold">
                                New Task
                              </span>{" "}
                              today{" "}
                              <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] text-[0.65rem] inline-flex items-center justify-center font-medium bg-purple/10 rounded-full ms-1">
                                <i className="ri-add-fill text-purple text-[0.75rem]"></i>
                              </span>
                            </span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              22 hrs
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>
                              New member{" "}
                              <span className="py-[0.2rem] px-[0.45rem] font-semibold rounded-sm text-pink text-[0.75em] bg-pink/10">
                                @andreas gurrero
                              </span>{" "}
                              added today to AI Summit.
                            </span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              Today
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-warning bg-warning/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>32 New people joined summit.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              22 hrs
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-info bg-info/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>
                              Neon Tarly added{" "}
                              <span className="text-info font-semibold">
                                Robert Bright
                              </span>{" "}
                              to AI summit project.
                            </span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              12 hrs
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>
                              Replied to new support request{" "}
                              <i className="ri-checkbox-circle-line text-success text-[1rem] align-middle"></i>
                            </span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              4 hrs
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-purple bg-purple/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>
                              Completed documentation of{" "}
                              <a
                                href="javascript:void(0);"
                                className="text-purple underline font-semibold"
                              >
                                AI Summit.
                              </a>
                            </span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">
                              4 hrs
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default admindaseboard;
