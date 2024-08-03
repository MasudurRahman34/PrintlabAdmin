import Card from "@/components/Card";
import OrderComponents from "@/components/pages/Orders/OrderComponents";
import AdminLayout from "@/layout/AdminLayout";
import React from "react";

const Orders = () => {
  return (
    <AdminLayout>
      <OrderComponents />
    </AdminLayout>
  );
};

export default Orders;
