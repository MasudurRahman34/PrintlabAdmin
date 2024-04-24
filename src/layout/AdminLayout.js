import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const AdminLayout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content main-index">
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};
