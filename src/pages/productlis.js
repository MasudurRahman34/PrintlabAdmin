import { AdminLayout } from "@/layout/AdminLayout";


const Productlis = () => {
    return (
        <AdminLayout>
                <div className="block justify-between page-header md:flex">
                    <div>
                        <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold"> Products List</h3>
                    </div>
                    <ol className="flex items-center whitespace-nowrap min-w-0">
                        <li className="text-[0.813rem] ps-[0.5rem]">
                          <a className="flex items-center text-primary hover:text-primary dark:text-primary truncate" href="javascript:void(0);">
                            Ecommerce
                            <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
                          </a>
                        </li>
                        <li className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 " aria-current="page">
                            Products List
                        </li>
                    </ol>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Products List
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive mb-4">
                                    <table className="table whitespace-nowrap table-bordered min-w-full">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="!text-start">
                                                    <input className="form-check-input check-all" type="checkbox" id="all-products" value="" aria-label="..."/>
                                                </th>
                                                <th scope="col" className="text-start">Product</th>
                                                <th scope="col" className="text-start">Category</th>
                                                <th scope="col" className="text-start">Price</th>
                                                <th scope="col" className="text-start">Stock</th>
                                                <th scope="col" className="text-start">Gender</th>
                                                <th scope="col" className="text-start">Seller</th>
                                                <th scope="col" className="text-start">Published</th>
                                                <th scope="col" className="text-start">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="product-list">
                                                <td className="product-checkbox"><input className="form-check-input" type="checkbox" id="product1" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../assets/images/ecommerce/png/1.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="font-semibold">
                                                            DapZem &amp; Co Blue Hoodie
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default">Clothing</span>
                                                </td>
                                                <td>$1,299</td>
                                                <td>283</td>
                                                <td>Male</td>
                                                <td>Apilla.co.in</td>
                                                <td>24,Nov 2022 - 04:42PM</td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                          className="ri-pencil-line"></i></a>
                                                      <a aria-label="anchor" href="javascript:void(0);"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                          className="ri-delete-bin-line"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="product-list">
                                                <td className="product-checkbox"><input className="form-check-input" type="checkbox" id="product2" value="" aria-label="..."/></td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src="../assets/images/ecommerce/png/2.png" alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="font-semibold">
                                                            Leather jacket for men
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default">Clothing</span>
                                                </td>
                                                <td>$799</td>
                                                <td>98</td>
                                                <td>Male</td>
                                                <td>Donzo Company</td>
                                                <td>18,Nov 2022 - 06:53AM</td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <a aria-label="anchor" href="edit-products.html"
                                                        className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                          className="ri-pencil-line"></i></a>
                                                      <a aria-label="anchor" href="javascript:void(0);"
                                                        className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                          className="ri-delete-bin-line"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div className="sm:flex items-center justify-between flex-wrap">
                                    <nav aria-label="Page navigation" className="">
                                        <ul className="ti-pagination mb-0 flex flex-row rounded-sm text-[1rem] !ps-0">
                                            <li className="page-item disabled">
                                                <a className="page-link !py-[0.375rem] !px-[0.75rem]" href="javascript:void(0);">
                                                    Previous
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link !py-[0.375rem] !px-[0.75rem]"  href="javascript:void(0);">1</a></li>
                                            <li className="page-item"><a className="page-link !py-[0.375rem] !px-[0.75rem]" href="javascript:void(0);">2</a></li>
                                            <li className="page-item sm:block hidden "><a className="page-link !py-[0.375rem] !px-[0.75rem]" href="javascript:void(0);">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link !text-primary !py-[0.375rem] !px-[0.75rem]" href="javascript:void(0);">
                                                    next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button type="button" className="ti-btn bg-danger text-white !font-medium m-1">Delete All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </AdminLayout>
    );
};

export default Productlis;