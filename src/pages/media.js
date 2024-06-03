import Media from "@/components/pages/Media";
import { AdminLayout } from "@/layout/AdminLayout";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <div className="bg-[#F6F8F7] px-5 pt-5 h-full min-h-[90vh] ">
        <Media />
      </div>
    </AdminLayout>
  );
};

export default page;
