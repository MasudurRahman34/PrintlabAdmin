import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";

export const AdminLayout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <Sidebar />
      <div className="content main-index">
        <div className="main-content py-3 min-h-[calc(100vh - 3.75rem)] h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
