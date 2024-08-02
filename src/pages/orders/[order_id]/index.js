import OrdersDetails from "@/components/pages/Orders/SingleOrderPage";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const index = () => {
  return (
    <AdminLayout>
      <OrdersDetails />
    </AdminLayout>
  );
};

export default index;
