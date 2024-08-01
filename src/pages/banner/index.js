import BannerImg from "@/components/BannerImg";
import BannerTable from "@/components/BannerTable";
import Pagination from "@/components/Pagination";
import BannerPageComponent from "@/components/pages/banner/BannerPageComponent";
import { AdminLayout } from "@/layout/AdminLayout";

const Banner = () => {
  return (
    <AdminLayout>
      <BannerPageComponent />
    </AdminLayout>
  );
};

export default Banner;
