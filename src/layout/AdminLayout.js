import Header from "./Header";
import Sidebar from "./Sidebar";
import useScreenWidth from "@/hooks/useScreenWidth";
import React, { useState } from "react";

export const AdminLayout = ({ children }) => {
  const screenWidth = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const toggleSidebar = () => {

    if (screenWidth <= 992) {
      setIsOpen(!isOpen);
    } else {
      setHideSidebar(!hideSidebar);
    }
  };
  return (
    <div className="page">
      <Header hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar
        hideSidebar={hideSidebar}
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className=" content main-index"
        style={{
          marginLeft: screenWidth > 992 ? (hideSidebar ? "5rem" : "15rem") : 0,
        }}
      >
        <div className="main-content py-3 min-h-[calc(100vh - 3.75rem)] h-full w-full ">
          {children}
        </div>
      </div>
    </div>
  );
};
