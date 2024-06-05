import useScreenWidth from "@/hooks/useScreenWidth";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { LuListOrdered } from "react-icons/lu";
import { MdPermMedia } from "react-icons/md";
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";

const links = [
  {
    href: "/",
    label: "Home",
    Icon: () => <FaHome className="w-6 h-6" />,
  },
  {
    href: "/products",
    label: "Products",
    Icon: () => <AiFillProduct className="w-6 h-6" />,
  },
  /*  {
    href: "/orders",
    label: "Orders",
    Icon: () => <LuListOrdered className="w-6 h-6" />,
  }, */
  /*  {
    href: "/ordersdetails",
    label: "Orders Detail",
    Icon: () => <LuListOrdered className="w-6 h-6" />,
  }, */
  /*  {
    href: "/productdetails",
    label: "Products Detail",
    Icon: () => <AiFillProduct className="w-6 h-6" />,
  }, */
  {
    href: "/categories",
    label: "Category",
    Icon: () => <BiCategory className="w-6 h-6" />,
  },
  /* {
    href: "/addproduct",
    label: "Add Products",
    Icon: () => <IoMdAddCircle className="w-6 h-6" />,
  }, */
  {
    href: "/media",
    label: "Media",
    Icon: () => <MdPermMedia className="w-6 h-6" />,
  },
  /*  {
    href: "/banner",
    label: "Add Banner",
    Icon: () => <PiFlagBannerFoldFill className="w-6 h-6" />,
  }, */
  /* {
    href: "/usermanagements",
    label: "Users",
    Icon: () => <FaUsersCog className="w-6 h-6" />,
  }, */
];

const Sidebar = ({ hideSidebar, toggleSidebar, isOpen, setIsOpen }) => {
  const screenWidth = useScreenWidth();

  return (
    <div>
      <div
        className={`w-screen h-screen app-sidebar lg:hidden ${
          screenWidth <= 992 && isOpen ? "block" : "hidden"
        }`}
        onClick={() => {
          setIsOpen(false);
        }}
        style={{
          opacity: 0.2,
        }}
      ></div>
      <aside
        className={`${
          screenWidth <= 992 && isOpen ? "block" : "hidden"
        } app-sidebar lg:block   ${hideSidebar ? "w-[5rem]" : "w-[15rem]"} `}
        id="sidebar"
      >
        {/*  <!-- Start::main-sidebar-header --> */}
        <div
          className="main-sidebar-header "
          style={{
            width: hideSidebar ? "5rem" : "15rem",
          }}
        >
          <a
            href="index.html"
            className={`header-logo ${
              hideSidebar ? " opacity-0 invisible" : " opacity-100 visible"
            }"`}
          >
            {!hideSidebar && (
              <img
                src="../assets/images/brand-logos/printlab-logo.jpg"
                alt="logo"
                className="desktop-dark"
              />
            )}
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
              {links.map((link, idx) => {
                return (
                  <li className="slide has-sub" key={idx}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 side-menu__item"
                    >
                      <span>
                        <link.Icon />
                      </span>
                      <span
                        className={`${
                          hideSidebar
                            ? " opacity-0 invisible"
                            : " opacity-100 visible"
                        }`}
                      >
                        <span className="side-menu__label">{link.label}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/*       <!-- End::nav --> */}
        </div>
        {/*   <!-- End::main-sidebar --> */}
      </aside>
    </div>
  );
};

export default Sidebar;
