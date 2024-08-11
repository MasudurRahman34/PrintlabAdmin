import MetaData from "@/components/MetaData";
import OrdersDetails from "@/components/pages/Orders/SingleOrderPage";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const index = () => {
  return (
    <AdminLayout>
      <MetaData title="Orders" />
      <OrdersDetails />
    </AdminLayout>
  );
};

export default index;
