import AccordionsCard from "@/components/AccordionsCard";
import AddProductleft from "@/components/AddProductleft";
import AddProductmiddle from "@/components/AddProductmiddle";
import { AdminLayout } from "@/layout/AdminLayout";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Productlis = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-3 px-5 mt-5 bg-[#F0F1F7]">
        <div className="col-span-3">
          <AddProductleft />
        </div>
        <div className="col-span-7">
          <AddProductmiddle/>
        </div>
        <div className="col-span-2 w-full rounded-md">
          <AccordionsCard/>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Productlis;
