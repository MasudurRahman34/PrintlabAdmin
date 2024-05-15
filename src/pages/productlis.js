import AccordionsCard from "@/components/AccordionsCard";
import AddProductleft from "@/components/AddProductleft";
import AddProductmiddle from "@/components/AddProductmiddle";
import ProductData from "@/components/productdata/ProductData";
import { AdminLayout } from "@/layout/AdminLayout";

const Productlis = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-3 px-5 mt-5 bg-[#F0F1F7] mb-[50px]">
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 xxl:col-span-3">
          <AddProductleft />
        </div>
        <div className=" sm:col-span-12 md:col-span-6  lg:col-span-6 xl:col-span-6 xxl:col-span-7 ">
          <AddProductmiddle />
        </div>
        <div className="w-full rounded-md sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 xxl:col-span-2">
          <AccordionsCard />
        </div>
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-10 bg-white px-5 rounded-md border border-[#333335]">
         <ProductData/>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Productlis;
