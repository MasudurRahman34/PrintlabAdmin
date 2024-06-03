import { useState } from "react";

const BannerImg = () => {
  const [open, setopen] = useState(false);

  return (
    <div>
        <div className="grid grid-cols-12 gap-6">
        <div>
          <button onClick={()=>setopen(!open)} className="py-2 xl:py-3 xl:px-5 px-5 bg-yellow-300 rounded-md text-[12px] outline-none mt-5 mb-5 font-bold">
            Add Banner
          </button>
        </div>
      </div>
      <div
        className={`grid grid-cols-12 gap-6 mx-auto px-5 relative z-10  ${
          open ? "visible opacity-100" : "invisible opacity-0"
        } `}
      >
        <div className={` xl:col-span-6 xxl:col-span-5   col-span-12 mx-auto ${open?"left-[35%] top-0":" -left-[999px] top-0"} transition  delay-300 ease-in-out   absolute z-20 px-5 bg-gray-200 py-5 rounded-md `}>
          <div className="mb-2 xl:mb-4">
            <label className="box-title">Title</label>
            <input
              className="block rounded-md w-full"
              type="text"
              placeholder="Enter title"
            ></input>
          </div>
          <div className="mb-2 xl:mb-4">
            <label className="box-title">Banner Link</label>
            <input
              className="block rounded-md w-full"
              type="text"
              placeholder="Enter title "
            ></input>
          </div>
          <div className="mb-2 xl:mb-4">
            <label className="box-title">Upload Image</label>
            <div className="box-body">
              <div>
                <label className="block">
                  <span className="sr-only">Choose Profile photo</span>
                  <input
                    type="file"
                    className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50
                file:me-4 file:py-2 file:px-4
                file:rounded-s-sm file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary focus-visible:outline-none
                "
                  />
                </label>
              </div>
            </div>
          </div>
          <button className="py-3 text-center border w-full  text-sm font-bold border-black rounded-md  ">Add Banner</button>
        </div>
      </div>
    </div>
  );
};

export default BannerImg;
