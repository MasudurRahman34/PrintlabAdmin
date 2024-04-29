import EcommerceCard from "@/components/EcommerceCard";
import OrdersOverView from "@/components/OrdersOverView";
import OrdersTable from "@/components/OrdersTable";
import RecentOrders from "@/components/RecentOrders";
import TopSellingProducts from "@/components/TopSellingProducts";
import { AdminLayout } from "@/layout/AdminLayout";

const Ecommerce = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-x-6 mt-5">
        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
          <div className="grid grid-cols-12 gap-x-6 ">
            <EcommerceCard/>
            <EcommerceCard/>
            <EcommerceCard/>
            <EcommerceCard/>
            <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div className="box overflow-hidden">
                                    <div className="ecommerce-sale-image">
                                        <img src="../assets/images/ecommerce/png/35.png" className="card-img-top" alt="..."/>
                                        <div className="card-img-overlay  p-6 text-white">
                                            <p className=" opacity-[0.7] text-[0.75rem]">Spruko Official.Inc</p>
                                            <p className="font-semibold mb-6 text-[1rem]">BIG SAVING DAYS</p>
                                            <p className="ecommerce-bankoffer-details mb-4">Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above <a href="javascript:void(0);" className="underline text-white">T&amp;C</a></p>
                                            <p className="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                                            <p className="ecommerce-sales-calendar text-center mb-0">
                                                <span>15</span>
                                                <span className="block text-[0.9375rem] leading-none font-semibold">Jan</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <a href="javascript:void(0);" className="text-primary text-[0.9375rem] font-semibold">Biggest sale is back.</a>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe</p>
                                        <button type="button" className="tibtn ti-btn-primary-full ti-btn-wave !py-[0.55rem] !px-[0.95rem] gap-2 rounded-[0.35rem] text-[0.85rem] font-medium !shadow-none me-2">Notify Me</button>
                                        <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-wave !rounded-[0.35rem] !text-[0.85rem] !font-medium !shadow-none">Offers</button>
                                    </div>
                                </div>
            </div>
            <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Recent Orders
                                        </div>
                                        <div className="hs-dropdown ti-dropdown">
                                            <a aria-label="anchor" href="javascript:void(0);" className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                                aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                            </a>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="javascript:void(0);">Action</a></li>
                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="javascript:void(0);">Another action</a></li>
                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="javascript:void(0);">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <ul className="list-none mb-0">
                                            <RecentOrders/>
                                            <RecentOrders/>
                                            <RecentOrders/>
                                            <RecentOrders/>
                                        </ul>
                                    </div>
                                </div>
            </div>
            <div className="xl:col-span-12 col-span-12">
                <div className="box">
                                    <div className="box-header justify-between sm:flex block">
                                        <div className="box-title">
                                            Orders
                                        </div>
                                        <div>
                                            <nav className="sm:flex block sm:mt-0 mt-2" aria-label="Tabs">
                                                <a className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4  text-[0.8rem] font-medium text-center rounded-md hover:text-primary active" id="active-item" data-hs-tab="#taskactive" aria-controls="taskactive">
                                                    Active Orders
                                                </a>
                                                <a className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " id="completed-item" data-hs-tab="#completed" aria-controls="completed">
                                                    Completed
                                                </a>
                                                <a className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " id="cancelled-item" data-hs-tab="#cancelled" aria-controls="cancelled">
                                                    Cancelled
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="box-body !p-0">
                                        <div className="tab-content">
                                            <div className="tab-pane show active text-[#8c9097] dark:text-white/50 !border-0 !p-0" id="taskactive"
                                                role="tabpanel">
                                                <div className="table-responsive overflow-auto">
                                                    <table className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                        <OrdersTable/>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="completed"  role="tabpanel" aria-labelledby="completed-item">
                                                <div className="table-responsive overflow-auto">
                                                    <table className="table card-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                        <tbody className="active-tab">
                                                            <tr>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/2.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Lisa Rebecca</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1,199.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                        <p className="mb-0">24 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/6.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-inherit border-solid">
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/13.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Matt Martin</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 font-semibold">$799.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Delived On</span>
                                                                        <p className="mb-0">18 Nov 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/7.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-inherit border-solid">
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/7.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Mitchell Osama</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$279.00</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Delivery On</span>
                                                                        <p className="mb-0">29 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/8.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-inherit border-solid">
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/12.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Cornor Mcgood</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 font-semibold">$79.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                        <p className="mb-0">05 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/9.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/15.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Kishan Patel</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1449.29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                        <p className="mb-0">20 Nov 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/10.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="cancelled" role="tabpanel" aria-labelledby="cancelled-item">
                                                <div className="table-responsive overflow-auto">
                                                    <table className="table card-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                        <tbody className="active-tab">
                                                            <tr>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/6.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Hailey Bobber</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$199.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">09 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/11.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-inherit border-solid">
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/14.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Anthony Mansion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$179.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">28 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/12.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-inherit border-solid">
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/16.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Simon Carter</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$149.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">30 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/13.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-inherit border-solid">
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/3.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Sofia Sekh</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1439.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">03 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/14.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="flex items-center">
                                                                        <div className="leading-none">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                <img src="../assets/images/faces/9.jpg" alt=""/>
                                                                            </span>
                                                                        </div>
                                                                        <div className="items-center">
                                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                            <p className="mb-0">Kimura Kai</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1092.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">02 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src="../assets/images/ecommerce/png/15.png" alt=""/>
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <a aria-label="anchor" href="javascript:void(0);">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
            <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">Earnings</div>
                                        <div className="hs-dropdown ti-dropdown">
                                            <a href="javascript:void(0);" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                              aria-expanded="false">
                                              View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                            </a>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                              <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                  href="javascript:void(0);">Today</a></li>
                                              <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                  href="javascript:void(0);">This Week</a></li>
                                              <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                  href="javascript:void(0);">Last Week</a></li>
                                            </ul>
                                          </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="sm:grid sm:grid-cols-12 lg:ps-[3rem] mb-6 pb-6 sm:gap-0 gap-y-3">
                                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                                <div className="mb-1 earning first-half ms-4">First Half</div>
                                                <div className="mb-0">
                                                    <span className="mt-1 text-[1rem] font-semibold">$51.94k</span>
                                                    <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.9%</span></span>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                                <div className="mb-1 earning top-gross ms-4">Top Gross</div>
                                                <div className="mb-0">
                                                    <span className="mt-1 text-[1rem] font-semibold">$18.32k</span>
                                                    <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.39%</span></span>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                                <div className="mb-1 earning second-half ms-3">Second Half</div>
                                                <div className="mb-0">
                                                    <span className="mt-1 text-[1rem] font-semibold">$38k</span>
                                                    <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-danger/10 text-danger !px-1 !py-2 text-[0.625rem]">-0.15%</span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="earnings"></div>
                                    </div>
                                </div>
            </div>
            <div className="xl:col-span-12 col-span-12">
            <div className="box custom-card">
                                    <div className="box-header">
                                        <div className="box-title">Top Selling Products</div>
                                    </div>
                                    <div className="box-body !p-0">
                                        <div className="table-responsive">
                                            <table className="table whitespace-nowrap min-w-full mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="text-center">S.no</th>
                                                        <th scope="col" className="text-start">Product Name</th>
                                                        <th scope="col" className="text-start">Category</th>
                                                        <th scope="col" className="text-start">Stock</th>
                                                        <th scope="col" className="text-start">Total Sales</th>
                                                    </tr>
                                                </thead>
                                                <TopSellingProducts/>
                                            </table>
                                        </div>
                                    </div>
            </div>
            </div>
            <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Top Countries By Sales
                                        </div>
                                        <div className="hs-dropdown ti-dropdown">
                                            <a aria-label="anchor" href="javascript:void(0);" className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                                aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                            </a>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="javascript:void(0);">Action</a></li>
                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="javascript:void(0);">Another action</a></li>
                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="javascript:void(0);">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="flex items-center mb-2">
                                            <h4 className="mb-0 leading-none text-[1.5rem] font-medium">38,256</h4>
                                            <span className="badge bg-primary/10 mx-1 text-primary">12.24%</span>
                                            <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Since last week</span>
                                        </div>
                                        <ul className="mb-0 pt-3 list-none">
                                            <li className="mb-3">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2">
                                                            <img src="../assets/images/flags/french_flag.jpg" alt="" className="rounded-full h-[1.25rem] w-[1.25rem]"/>
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">France</span>
                                                    </div>
                                                    <div>
                                                        <i className="ti ti-trending-up text-[1rem] text-success"></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">5,932</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2 avatar-rounded">
                                                            <img src="../assets/images/flags/spain_flag.jpg" alt="" className="rounded-full h-[1.25rem] w-[1.25rem]"/>
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">spain</span>
                                                    </div>
                                                    <div>
                                                        <i className="ti ti-trending-down text-[1rem] text-danger"></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">5,383</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2 avatar-rounded">
                                                            <img src="../assets/images/flags/argentina_flag.jpg" alt="" className="rounded-full h-[1.25rem] w-[1.25rem]"/>
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">Argentina</span>
                                                    </div>
                                                    <div>
                                                        <i className="ti ti-trending-up text-[1rem] text-success"></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">4,825</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2 avatar-rounded">
                                                            <img src="../assets/images/flags/uae_flag.jpg" alt="" className="rounded-full h-[1.25rem] w-[1.25rem]"/>
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">Uae</span>
                                                    </div>
                                                    <div>
                                                        <i className="ti ti-trending-up text-[1rem] text-success"></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">4,527</div>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2 avatar-rounded">
                                                            <img src="../assets/images/flags/germany_flag.jpg" alt="" className="rounded-full h-[1.25rem] w-[1.25rem]"/>
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">Germany</span>
                                                    </div>
                                                    <div>
                                                        <i className="ti ti-trending-down text-[1rem] text-danger"></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">4,501</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            </div>
            <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Top Customers
                                        </div>
                                        <div className="hs-dropdown ti-dropdown">
                                            <a href="javascript:void(0);" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                              aria-expanded="false">
                                              View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                            </a>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                              <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                  href="javascript:void(0);">Today</a></li>
                                              <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                  href="javascript:void(0);">This Week</a></li>
                                              <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                  href="javascript:void(0);">Last Week</a></li>
                                            </ul>
                                          </div>
                                    </div>
                                    <div className="box-body">
                                        <ul className="list-none mb-0">
                                            <li className="mb-4">
                                                <a href="javascript:void(0);">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-start justify-center">
                                                            <img src="../assets/images/faces/4.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2"/>
                                                            <div>
                                                                <p className="mb-0 font-semibold">Emma Wilson</p>
                                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">15 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">$1,835</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="javascript:void(0);">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-start justify-center">
                                                            <img src="../assets/images/faces/15.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2"/>
                                                            <div>
                                                                <p className="mb-0 font-semibold">Robert Lewis</p>
                                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">18 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">$2,415</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="javascript:void(0);">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-start justify-center">
                                                            <img src="../assets/images/faces/5.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2"/>
                                                            <div>
                                                                <p className="mb-0 font-semibold">Angelina Hose</p>
                                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">21 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">$2,341</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="mb-0">
                                                <a href="javascript:void(0);">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-start justify-center">
                                                            <img src="../assets/images/faces/2.jpg" alt="" className="me-2 avatar avatar-md avatar-rounded !mb-0"/>
                                                            <div>
                                                                <p className="mb-0 font-semibold">Samantha Sam</p>
                                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">24 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">2,624</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                     </div>
                                </div>
            </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-6 mt-5" >
      <div className="xl:col-span-12 col-span-12">
     <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Products Overview
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div>
                                      <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here"
                                        aria-label=".form-control-sm example"/>
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                      <a href="javascript:void(0);"
                                        className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                        aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                      </a>
                                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="javascript:void(0);">New</a></li>
                                        <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="javascript:void(0);">Popular</a></li>
                                        <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="javascript:void(0);">Relevant</a></li>
                                      </ul>
                                    </div>
                                  </div>
                            </div>
                            <div className="box-body">
                                <div className="overflow-x-auto">
                                    <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                                        <thead>
                                            <tr className="border border-inherit border-solid  dark:border-defaultborder/10 ">
                                                <th scope="col" className="!text-start">Name</th>
                                                <th scope="col" className="!text-start">Product Id</th>
                                                <th scope="col" className="!text-start">Price</th>
                                                <th scope="col" className="!text-start">Status</th>
                                                <th scope="col" className="!text-start">Sales</th>
                                                <th scope="col" className="!text-start">Revenue</th>
                                            </tr>
                                        </thead>
                                        
                                        <OrdersOverView/>
                                    </table>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center">
                                    <div>
                                        Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="ti-pagination mb-0">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="javascript:void(0);">
                                                        Prev
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link active" href="javascript:void(0);">1</a></li>
                                                <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                                <li className="page-item">
                                                    <a className="page-link !text-primary" href="javascript:void(0);">
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
    </AdminLayout>
  );
};

export default Ecommerce;
