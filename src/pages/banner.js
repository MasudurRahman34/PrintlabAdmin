import BannerImg from "@/components/BannerImg";
import BannerTable from "@/components/BannerTable";
import Pagination from "@/components/Pagination";
import { AdminLayout } from "@/layout/AdminLayout";


const Banner = () => {
  return (
    <AdminLayout>
      <div className="block justify-between page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            Products List
          </h3>
        </div>
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <li className="text-[0.813rem] ps-[0.5rem]">
            <a
              className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
              href="javascript:void(0);"
            >
              Ecommerce
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </a>
          </li>
          <li
            className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
            aria-current="page"
          >
            Banner List
          </li>
        </ol>
      </div>
    
      <BannerImg  />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header">
              <div className="box-title">Banner</div>
            </div>
            <div className="box-body">
              <div className="table-responsive mb-4">
                <table className="table whitespace-nowrap table-bordered min-w-full">
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
                        Banner item
                      </th>
                      <th scope="col" className="text-start">
                        Link
                      </th>
                      <th scope="col" className="text-start">
                        All img
                      </th>
                      <th scope="col" className="text-start">
                        Published
                      </th>
                      <th scope="col" className="text-start">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="product-list">
                      <td className="product-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="product1"
                          value=""
                          aria-label="..."
                        />
                      </td>
                      <td>
                        <div className="flex items-center">
                          <div className="me-2">
                            <span className="avatar avatar-md avatar-rounded">
                              <img
                                src="../assets/images/ecommerce/png/1.png"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="font-semibold">
                            DapZem &amp; Co Blue Hoodie
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-light text-default">
                          www.facebook.com
                        </span>
                      </td>
                      <td>5</td>
                      <td>24,Nov 2022 - 04:42PM</td>
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
                  </tbody>
                </table>
              </div>

              <Pagination />
            </div>
          </div>
        </div>
      </div>

    </AdminLayout>
  );
};

export default Banner;
