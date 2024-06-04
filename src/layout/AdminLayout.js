
import Header from "./Header";
import Sidebar from "./Sidebar";
import React, { useState } from "react";

export const AdminLayout = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar);
  };
  console.log(hideSidebar)
  return (
    <div className="page">
     <div>
     <Header hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <Sidebar hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
     </div>
      <div className="content main-index ">
        <div className={`main-content py-3 min-h-[calc(100vh - 3.75rem)] h-full  ${hideSidebar?"!w-[108%]  !-ml-[150px] ":" !w-full !ml-0 "} `}>
          {children}
        </div>
      </div>
    </div>
  );
};
