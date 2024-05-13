import { AdminLayout } from "@/layout/AdminLayout";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <AdminLayout>
      {/*  <!-- Start::main-content --> */}
      <div className="main-content">
        <div className="my-6">
          {/*   <!-- Start::row-1 --> */}
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 xl:col-span-12">
              <div className="box">
                <div className="box-body !p-0">
                  <nav
                    className="w-full mx-auto px-4 xxl:flex sm:items-center xxl:justify-between navbar navbar-expand-xxl bg-white dark:bg-bodybg !py-2"
                    aria-label="Global"
                  >
                    <div className="flex items-center justify-between">
                      <Link href="index.html" className="header-logo me-6">
                        <img
                          src="../assets/images/brand-logos/toggle-dark.png"
                          alt="logo"
                          className="block dark:hidden"
                        />
                        <img
                          src="../assets/images/brand-logos/toggle-dark.png"
                          alt="logo"
                          className="hidden dark:block"
                        />
                      </Link>
                      <div className="xxl:hidden">
                        <button
                          type="button"
                          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                          data-hs-collapse="#navbar-collapse-with-animation"
                          aria-controls="navbar-collapse-with-animation"
                          aria-label="Toggle navigation"
                        >
                          <svg
                            className="w-4 h-4 hs-collapse-open:hidden"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                          </svg>
                          <svg
                            className="hidden w-4 h-4 hs-collapse-open:block"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div
                      id="navbar-collapse-with-animation"
                      className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow xxl:block"
                    >
                      <div className="flex-wrap mt-5 xxl:flex gap-x-5 gap-y-2 sm:mt-0">
                        <ul className="flex-wrap items-center flex-grow mt-2 navbar-nav me-auto lg:mb-0 xxl:items-center xxl:flex xxl:mt-0">
                          <li className="mb-2 nav-item xxl:mb-0">
                            <a
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 active hover:!text-primary"
                              aria-current="page"
                              href="javascript:void(0);"
                            >
                              Men
                            </a>
                          </li>
                          <li className="mb-2 nav-item xxl:mb-0">
                            <a
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"
                              href="javascript:void(0);"
                            >
                              Women
                            </a>
                          </li>
                          <li className="mb-2 nav-item xxl:mb-0 hs-dropdown ti-dropdown">
                            <a
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 dropdown-toggle"
                              href="javascript:void(0);"
                              id="navbarDropdown"
                              aria-expanded="false"
                            >
                              Kids
                              <i className="inline-block align-middle ri-arrow-down-s-line ms-1"></i>
                            </a>
                            <ul
                              className="hidden hs-dropdown-menu ti-dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <a
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href="javascript:void(0);"
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href="javascript:void(0);"
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href="javascript:void(0);"
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mb-2 nav-item xxl:mb-0">
                            <a
                              href="javascript:void(0);"
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"
                            >
                              Today Deals
                            </a>
                          </li>
                          <li className="mb-2 nav-item xxl:mb-0">
                            <a
                              href="javascript:void(0);"
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"
                            >
                              Electronics
                            </a>
                          </li>
                          <li className="mb-2 nav-item xxl:mb-0">
                            <a
                              href="javascript:void(0);"
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"
                            >
                              Home &amp; Kitchen
                            </a>
                          </li>
                          <li className="mb-2 nav-item xxl:mb-0">
                            <a
                              href="javascript:void(0);"
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="mb-2 nav-item xxl:mb-0">
                            <a
                              href="javascript:void(0);"
                              className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"
                            >
                              <i className="inline-block align-middle ri-customer-service-line me-2"></i>
                              Customer Service
                            </a>
                          </li>
                          <li className="nav-item xxl:mb-mb-0 mb-2 xxl:ms-0 !ms-4">
                            <div className="block btn-group xxl:flex hs-dropdown ti-dropdown">
                              <button
                                className="ti-btn  !text-[0.75rem] ti-btn-primary !m-0"
                                type="button"
                                aria-expanded="false"
                              >
                                SortBy
                                <i className="inline-block align-middle ri-arrow-down-s-line ms-1"></i>
                              </button>
                              <ul className="hidden hs-dropdown-menu ti-dropdown-menu">
                                <li>
                                  <a
                                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                    href="javascript:void(0);"
                                  >
                                    Featured
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                    href="javascript:void(0);"
                                  >
                                    Price: High to Low
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="ti-dropdown-item active !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                    href="javascript:void(0);"
                                  >
                                    Price: Low to High
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                    href="javascript:void(0);"
                                  >
                                    Newest
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                    href="javascript:void(0);"
                                  >
                                    Ratings
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item xxl:mb-0 mb-2 xxl:ms-4 !ms-4">
                            <div className="inline-flex">
                              <button
                                type="button"
                                className="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-e-none"
                              >
                                IV
                              </button>
                              <button
                                type="button"
                                className="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-none"
                              >
                                III
                              </button>
                              <button
                                type="button"
                                className="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-s-none"
                              >
                                II
                              </button>
                            </div>
                          </li>
                        </ul>
                        <div className="flex" role="search">
                          <input
                            className="form-control !w-auto !rounded-sm me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          <button
                            className="ti-btn ti-btn-light !font-medium"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-span-12 xxl:col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-12">
              <div className="box products-navigation-card">
                <div className="box-body !p-0">
                  <div className="p-4 border-b dark:border-defaultborder/10">
                    <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">
                      CATEGORIES
                    </p>
                    <div className="px-2 py-4 pb-0">
                      <div className="mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="electronics"
                        />
                        <label className="form-check-label" for="electronics">
                          Electronics
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          2,712
                        </span>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Accesories"
                        />
                        <label className="form-check-label" for="Accesories">
                          Accesories
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          536
                        </span>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="clothing"
                          checked
                        />
                        <label className="form-check-label" for="clothing">
                          Clothing
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          18,289
                        </span>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="fashion"
                        />
                        <label className="form-check-label" for="fashion">
                          Fashion
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          3,453
                        </span>
                      </div>
                      <div
                        id="hs-show-hide-categories-heading"
                        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-show-hide-categories"
                      >
                        <div className="mt-1 mb-2 form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="furniture"
                          />
                          <label className="form-check-label" for="furniture">
                            Furniture
                          </label>
                          <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                            7,165
                          </span>
                        </div>
                        <div className="mb-2 form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="footwear"
                          />
                          <label className="form-check-label" for="footwear">
                            Footwear
                          </label>
                          <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                            5,964
                          </span>
                        </div>
                        <div className="mb-2 form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="mobiles"
                          />
                          <label className="form-check-label" for="mobiles">
                            Mobiles
                          </label>
                          <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                            2,123
                          </span>
                        </div>
                      </div>
                      <a
                        className="inline-flex items-center ecommerce-more-link text-success hs-collapse-toggle gap-x-2"
                        href="javascript:void(0);"
                        id="hs-show-hide-categories"
                        data-hs-collapse="#hs-show-hide-categories-heading"
                      >
                        <span className="hs-collapse-open:hidden">MORE</span>
                        <span className="hidden hs-collapse-open:block">
                          MORE
                        </span>
                        <svg
                          className="hs-collapse-open:rotate-180 w-2.5 h-2.5"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-b dark:border-defaultborder/10">
                  <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">
                    BRANDS
                  </p>
                  <div className="px-2 py-4 pb-0">
                    <div className="mb-2 form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Jimmy-Lolfiger"
                        checked
                      />
                      <label className="form-check-label" for="Jimmy-Lolfiger">
                        Jimmy Lolfiger
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        512
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="dapzem1"
                        checked
                      />
                      <label className="form-check-label" for="dapzem1">
                        Dapzem &amp; Co
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        2,186
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="denim-winjo1"
                        checked
                      />
                      <label className="form-check-label" for="denim-winjo1">
                        Denim Winjo
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        734
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Louie-Phillippe"
                      />
                      <label className="form-check-label" for="Louie-Phillippe">
                        Louie Phillippe
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        16
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="garage-clothing"
                      />
                      <label className="form-check-label" for="garage-clothing">
                        Garage &amp;Co
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        1,432
                      </span>
                    </div>
                    <div
                      id="hs-show-hide-brands-heading"
                      className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-show-hide-brands"
                    >
                      <div className="mt-1 mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="blueberry"
                          checked
                        />
                        <label className="form-check-label" for="blueberry">
                          Blueberry &amp;Co
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          257
                        </span>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="aus-polo-assn"
                          checked
                        />
                        <label className="form-check-label" for="aus-polo-assn">
                          Aus Polo Assn
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          1,845
                        </span>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="denim-corp"
                          checked
                        />
                        <label className="form-check-label" for="denim-corp">
                          Denim Corp
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          5,893
                        </span>
                      </div>
                    </div>
                    <a
                      className="inline-flex items-center ecommerce-more-link text-success hs-collapse-toggle gap-x-2"
                      href="javascript:void(0);"
                      id="hs-show-hide-brands"
                      data-hs-collapse="#hs-show-hide-brands-heading"
                    >
                      <span className="hs-collapse-open:hidden">MORE</span>
                      <span className="hidden hs-collapse-open:block">
                        MORE
                      </span>
                      <svg
                        className="hs-collapse-open:rotate-180 w-2.5 h-2.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 border-b dark:border-defaultborder/10">
                  <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">
                    PRICE
                  </p>
                  <div className="px-2 py-3 pb-0">
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="low"
                      />
                      <label className="form-check-label" for="low">
                        $0 - $599
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        22,873
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="low1"
                        checked
                      />
                      <label className="form-check-label" for="low1">
                        $599 - $1299
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        11,345
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="medium"
                      />
                      <label className="form-check-label" for="medium">
                        $1,299 - $2,199
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        6,987
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="high"
                      />
                      <label className="form-check-label" for="high">
                        $2,199 - $3,499
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        5,236
                      </span>
                    </div>
                    <div className="mb-4 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="high1"
                      />
                      <label className="form-check-label" for="high1">
                        $3,499 &amp;Above
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        3,735
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-b dark:border-defaultborder/10">
                  <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">
                    DISCOUNT
                  </p>
                  <div className="px-2 py-3 pb-0">
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Jimmy-Lolfiger1"
                      />
                      <label className="form-check-label" for="Jimmy-Lolfiger1">
                        0% - 20%
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        16,563
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="dapzem2"
                      />
                      <label className="form-check-label" for="dapzem2">
                        20% - 40%
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        15,234
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="denim-winjo"
                      />
                      <label className="form-check-label" for="denim-winjo">
                        40% - 60%
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        6,278
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Louie-Phillippe1"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="Louie-Phillippe1"
                      >
                        60% - 80%
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        4,531
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="garage-clothing1"
                      />
                      <label
                        className="form-check-label"
                        for="garage-clothing1"
                      >
                        80% - 90%
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        2,405
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">
                    SIZES
                  </p>
                  <div className="px-2 py-3 pb-0">
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="extra-small"
                      />
                      <label className="form-check-label" for="extra-small">
                        Extra Small (XS)
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        23,156
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="small"
                      />
                      <label className="form-check-label" for="small">
                        Small (SM)
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        15,632
                      </span>
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="medium1"
                      />
                      <label className="form-check-label" for="medium1">
                        Medium (MD)
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        15,032
                      </span>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="large"
                        checked
                      />
                      <label className="form-check-label" for="large">
                        Large (L)
                      </label>
                      <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                        7,154
                      </span>
                    </div>
                    <div
                      id="hs-show-hide-sizes-heading"
                      className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-show-hide-sizes"
                    >
                      <div className="mt-1 mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="extra-large"
                        />
                        <label className="form-check-label" for="extra-large">
                          Extra Large (XL)
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          5,946
                        </span>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="double-extralarge"
                        />
                        <label
                          className="form-check-label"
                          for="double-extralarge"
                        >
                          XXL
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          3,267
                        </span>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="triple-extralarge"
                        />
                        <label
                          className="form-check-label"
                          for="triple-extralarge"
                        >
                          XXL
                        </label>
                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">
                          578
                        </span>
                      </div>
                    </div>
                    <a
                      className="inline-flex items-center ecommerce-more-link text-success hs-collapse-toggle gap-x-2"
                      href="javascript:void(0);"
                      id="hs-show-hide-sizes"
                      data-hs-collapse="#hs-show-hide-sizes-heading"
                    >
                      <span className="hs-collapse-open:hidden">MORE</span>
                      <span className="hidden hs-collapse-open:block">
                        MORE
                      </span>
                      <svg
                        className="hs-collapse-open:rotate-180 w-2.5 h-2.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 xxl:col-span-9 xl:col-span-8 lg:col-span-8 md:col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/1.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Dapzem &amp;Co
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.2
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Branded hoodie ethnic style
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $229
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $1,799
                          </span>
                        </span>
                        <span className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">
                          72% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $229
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/2.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Denim Winjo
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.0
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Vintage pure leather Jacket
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $599
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $2,499
                          </span>
                        </span>
                        <span className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">
                          75% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $599
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/3.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>{" "}
                      /
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Jimmy Lolfiger
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.5
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Unisex jacket for men &amp;women
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $1,199
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $3,299
                          </span>
                        </span>
                        <span className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">
                          62% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $1,199
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/4.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Bluberry Co.In
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.2
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Full sleeve white hoodie
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $349
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $1,299
                          </span>
                        </span>
                        <span className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">
                          60% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $349
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/5.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Aus Polo Assn
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.5
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Snow jacket with low pockets
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $1,899
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $3,799
                          </span>
                        </span>
                        <span className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">
                          50% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $1,899
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/6.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        BMW
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.1
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Ethnic wear jackets form BMW
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $1,499
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $2,499
                          </span>
                        </span>
                        <span className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">
                          38% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $1,499
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/7.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Denim Corporation
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.4
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Flap pockets denim jackets for men
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $299
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $399
                          </span>
                        </span>
                        <span className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">
                          35% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $299
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/8.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Pufa
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          3.8
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Ergonic designed full sleeve coat
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $2,399
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $5,699
                          </span>
                        </span>
                        <span className="badge bg-primary/10 text-primary ltr:float-right rtl:float-left text-[0.625rem]">
                          72% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $2,399
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/9.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Louie Phillippe
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.0
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Ergonic green colored full sleeve jacket
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $1,899
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $3,299
                          </span>
                        </span>
                        <span className="badge bg-primary/10 text-primary ltr:float-right rtl:float-left text-[0.625rem]">
                          60% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $1,899
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/10.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Denim Corp
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.1
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        beautiful brown colored snow jacket
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $2,499
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $4,999
                          </span>
                        </span>
                        <span className="badge bg-primary/10 text-primary ltr:float-right rtl:float-left text-[0.625rem]">
                          50% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $2,499
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/11.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Garage &amp;Co
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.3
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Full sleeve sweat shirt
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $249
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $1,299
                          </span>
                        </span>
                        <span className="badge bg-primary/10 text-primary  ltr:float-right rtl:float-left text-[0.625rem]">
                          70% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $249
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                  <div className="box product-card">
                    <div className="box-body">
                      <a href="product-details.html" className="product-image">
                        <img
                          src="../assets/images/ecommerce/png/12.png"
                          className="mb-3 rounded-md card-img"
                          alt="..."
                        />
                      </a>
                      <div className="product-icons">
                        <a
                          aria-label="anchor"
                          href="wishlist.html"
                          className="wishlist"
                        >
                          <i className="ri-heart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="cart.html"
                          className="cart"
                        >
                          <i className="ri-shopping-cart-line"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="product-details.html"
                          className="view"
                        >
                          <i className="ri-eye-line"></i>
                        </a>
                      </div>
                      <p className="flex items-center justify-between mb-0 font-semibold product-name">
                        Blueberry &amp;Co
                        <span className="text-xs ltr:float-right rtl:float-left text-warning">
                          4.0
                          <i className="inline-block align-middle ri-star-s-fill ms-1"></i>
                        </span>
                      </p>
                      <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                        Light colored sweater form blueberry
                      </p>
                      <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                        <span>
                          $499
                          <span className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">
                            $799
                          </span>
                        </span>
                        <span className="badge bg-primary/10  text-primary ltr:float-right rtl:float-left text-[0.625rem]">
                          32% off
                        </span>
                      </p>
                      <p className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                        <i className="ti ti-discount-2 text-[1rem] me-1"></i>
                        Offer Price $499
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*         <!--End::row-1 --> */}

        {/*        <!-- Pagination --> */}
        <ul className="ti-pagination !px-3 !py-[0.375rem] !text-[1rem] !mb-4 flex justify-end">
          <li className="page-item disabled">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              2
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link !px-3 !py-[0.375rem]"
              href="javascript:void(0);"
            >
              Next
            </a>
          </li>
        </ul>
        {/*            <!-- Pagination --> */}
      </div>
    </AdminLayout>
  );
};

export default Products;
