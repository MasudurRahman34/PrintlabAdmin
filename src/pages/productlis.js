import AddProductleft from "@/components/AddProductleft";
import AddProductmedile from "@/components/AddProductmedile";
import AddProductright from "@/components/AddProductright";
import { AdminLayout } from "@/layout/AdminLayout";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Productlis = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-12 gap-6 px-5 mt-10 bg-[#F0F1F7]">
        <div className="col-span-3">
          <AddProductleft />
        </div>
        <div className="col-span-7">
          <AddProductmedile />
        </div>
        <div className="col-span-2 flex justify-center items-center mt-5 bg-white rounded-md">
          <AddProductright />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Productlis;
