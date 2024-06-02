import Header from "./Header";
import Sidebar from "./Sidebar";
import React, { useState } from "react";

export const AdminLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar);
  };
  console.log(hideSidebar);
  return (
    <div className="page">
      <Header hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <div
        className=" content main-index"
        style={{
          marginLeft: hideSidebar ? "5rem" : "15rem",
        }}
      >
        <div className="main-content py-3 min-h-[calc(100vh - 3.75rem)] h-full w-full ">
          {children}
        </div>
      </div>
    </div>
  );
};
