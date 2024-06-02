import Link from "next/link";
import React from "react";

const Sidebar = ({hideSidebar}) => {
  console.log(hideSidebar)
  return (
    <aside className={`hidden app-sidebar lg:block   ${hideSidebar ?"w-[5rem]":"w-[15rem]"} `} id="sidebar">
      {/*  <!-- Start::main-sidebar-header --> */}
      <div className="main-sidebar-header ">
      <i className={`bx bx-file-blank side-menu__icon`}></i>
        <a href="index.html" className={`header-logo ${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}"`}>
          <img
            src="../assets/images/brand-logos/printlab-logo.jpg"
            alt="logo"
            className="desktop-logo"
          />
          <img
            src="../assets/images/brand-logos/printlab-logo.jpg"
            alt="logo"
            className="toggle-logo"
          />
          <img
            src="../assets/images/brand-logos/printlab-logo.jpg"
            alt="logo"
            className="desktop-dark"
          />
          <img
            src="../assets/images/brand-logos/printlab-logo.jpg"
            alt="logo"
            className="toggle-dark"
          />

          <img
            src="../assets/images/brand-logos/printlab-logo.jpg"
            alt="logo"
            className="toggle-white"
          />
        </a>
      </div>
      {/*  <!-- End::main-sidebar-header -->

    <!-- Start::main-sidebar --> */}
      <div className="main-sidebar w-[100px]" id="sidebar-scroll">
        {/*  <!-- Start::nav --> */}
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
          </div>
          <ul className="main-menu">


            <Link href="/">
              <li className="slide has-sub">
                <a className="side-menu__item">
                <i className="bx bx-home side-menu__icon"></i>
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Dashboards</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>

            <Link href="/products">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Products</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>
            <Link href="/orders">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Orders</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>

            <Link href="/ordersdetails">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Orders Detail</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>

            <Link href="/productdetails">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Products Detail</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                  
                </a>
              </li>
            </Link>

            <Link href="/categories">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
                
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Category</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>
            <Link href="/addproduct">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
            
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Add Products</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>
            <Link href="/media">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Media</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>
            <Link href="/banner">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
               
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Add Banner</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>
            <Link href="/usermanagements">
              <li className="slide has-sub">
                <a className="side-menu__item">
                  <i className="bx bx-file-blank side-menu__icon"></i>
                  <div className={`${hideSidebar? " opacity-0 invisible" :" opacity-100 visible"}`}>
                  <span className="side-menu__label">Users</span>
                  <i className="fe fe-chevron-right side-menu__angle"></i>
                  </div>
                </a>
              </li>
            </Link>
            {/* <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-medal side-menu__icon"></i>
                <span className="side-menu__label">Utilities</span>
                <i className="fe fe-chevron-right side-menu__angle"></i>
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Utilities</a>
                </li>
                <li className="slide">
                  <a href="avatars.html" className="side-menu__item">
                    Avatars
                  </a>
                </li>
                <li className="slide">
                  <a href="borders.html" className="side-menu__item">
                    Borders
                  </a>
                </li>
                <li className="slide">
                  <a href="colors.html" className="side-menu__item">
                    Colors
                  </a>
                </li>
                <li className="slide">
                  <a href="grids.html" className="side-menu__item">
                    Grids
                  </a>
                </li>
                <li className="slide">
                  <a href="flex.html" className="side-menu__item">
                    Flex
                  </a>
                </li>
                <li className="slide">
                  <a href="columns.html" className="side-menu__item">
                    Columns
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          {/* <div className="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div> */}
        </nav>
        {/*       <!-- End::nav --> */}
      </div>
      {/*   <!-- End::main-sidebar --> */}
    </aside>
  );
};

export default Sidebar;
