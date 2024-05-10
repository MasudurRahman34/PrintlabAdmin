import AccordionsCard from "@/components/AccordionsCard";
import AddProductleft from "@/components/AddProductleft";
import AddProductmiddle from "@/components/AddProductmiddle";
import ProductData from "@/components/productdata/ProductData";
import { AdminLayout } from "@/layout/AdminLayout";

const Productlis = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-3 px-5 mt-5 bg-[#F0F1F7] mb-[50px]">
        <div className="col-span-3">
          <AddProductleft />
        </div>
        <div className="col-span-7">
          <AddProductmiddle />
        </div>
        <div className="col-span-2 w-full rounded-md">
          <AccordionsCard />
        </div>
        <div className="col-span-10 bg-white px-5 rounded-md border border-[#333335]">
         <ProductData/>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Productlis;
