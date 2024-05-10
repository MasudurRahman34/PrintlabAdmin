import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const AddProductleft = () => {
    return (
        <div className="bg-white  px-5 py-3 rounded-md">
        <div className="flex  border">
          <input type="Search" className=" border-none rounded-l-lg w-full" />
          <button className="border bg-yellow-500 rounded-r-lg py-3 px-5 text-base font-medium">
            Search
          </button>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <select
            name="select"
            className="bg-white border-2 text-black border-black rounded-md"
          >
            <option value="Soft by" selected>
              Soft by
            </option>
            <option value="dog">higt to low</option>
            <option value="cat">low to hight</option>
          </select>
          <button className="py-3  px-5 bg-white text-black border-2 border-black  font-bold rounded-md">
            +
          </button>
        </div>
        <div>
          <p className="text-base font-semibold text-black mt-5 ">Product</p>
          <div className="mt-2">
           <p className="text-base font-normal  text-black">T-Shirt design</p>
          </div>
        </div>
        <div className="mt-[200px] flex justify-center items-center">
          <button className="border border-black py-3 text-center px-8 text-base font-bold">
            <FaArrowLeft />
          </button>
          <button className="border border-black py-2 text-center px-8 text-base font-bold">
            2
          </button>
          <button className="border border-black py-2 text-center px-8 text-base font-bold">
            3
          </button>
          <button className="border border-black py-3 text-center px-8 text-base font-bold">
            <FaArrowRight />
          </button>
        </div>
        </div>
    );
};

export default AddProductleft;