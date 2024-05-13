import Header from "./Header";
import Sidebar from "./Sidebar";
import React, { useState } from "react";

export const AdminLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setHideSidebar(!hideSidebar);
  };
  return (
    <div className="page">
      <Header hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <div className="content main-index">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};
