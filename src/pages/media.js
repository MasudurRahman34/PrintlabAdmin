import { AdminLayout } from "@/layout/AdminLayout";
import React from "react";
import flower from "../assess/img/flower.jpeg"
import flower1 from "../assess/img/flower1.jpeg"

const Media = () => {
  return (
    <AdminLayout>
      <div className="bg-[#F6F8F7] px-5 pt-5 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
          Media
        </h1>
        <p className="text-base md:text-lg font-normal text-black">
          Manage All Media and image on yor website
        </p>
        <div className="py-5 bg-white  mt-5 px-5">
            <button className="py-3 px-3 bg-yellow-400 rounded-md font-bold text-black " >Add Media</button>
        </div>
        <div className="w-full border border-yellow-400 mt-5 px-5 "></div>
        <div className="py-5 px-5">
            <p className="text-sm md:text-md  font-bold">All Media</p>
        </div>
        <div className="img-galary flex gap-5 py-5 flex-wrap">
        <img className="w-[90px] h-[80px] object-contain" src={flower}/>
        <img className="w-[90px] h-[80px] object-contain" src={flower1}/>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Media;
