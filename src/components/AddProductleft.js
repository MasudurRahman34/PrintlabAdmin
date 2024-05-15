import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const AddProductleft = () => {
    return (
        <div className="bg-white  px-5 py-3 xl:px-0 rounded-md  sm:col-span-12 md:col-span-6 lg:col-span-3">
        <div className="flex  border">
          <input type="Search" className=" border-none rounded-l-lg w-full" />
          <button className="border bg-yellow-500 rounded-r-lg py-3 px-5 text-base font-medium">
            Search
          </button>
        </div>
        <div className="mt-5 flex flex-wrap justify-between items-center">
          <select
            name="select"
            className="bg-white border-2 text-black border-[#F3F3F3] rounded-md text-[10px] xl:text-sm"
          >
            <option value="Soft by" selected>
              Soft by
            </option>
            <option value="dog">higt to low</option>
            <option value="cat">low to hight</option>
          </select>
          <button className="py-2  px-3 xl:py-1 xl:px-2 bg-white text-black border-2 text-[10px] xl:text-sm border-[#F3F3F3]  font-bold rounded-md xl:mt-2">
            +
          </button>
        </div>
        <div>
          <p className="text-base  font-semibold text-black mt-5 ">Product</p>
          <div className="mt-2">
          <div class="table-responsive">
          <table class="table whitespace-nowrap  border border-[#949EB7]  !rounded-none min-w-full">
                                        <thead>
                                            <tr class="border-b border-[#949EB7] text-[10px] xl:text-sm">
                                                <th scope="col" class="text-start">#</th>
                                                <th scope="col" class="text-start">Title</th>
                                                <th scope="col" class="text-start">Category</th>                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-[#949EB7] text-[10px] xl:text-[12px]">
                                                <th scope="row" class="text-start">1</th>
                                                <td>T-shirt</td>
                                                <td>Shirt</td>                                        
                                            </tr>                                           
                                            <tr className="xl:text-[12px]">
                                                <th scope="row" class="text-start">1</th>
                                                <td>T-shirt</td>
                                                <td>Shirt</td>                                        
                                            </tr>                                           
                                        </tbody>
                                    </table>
          </div>
          </div>
        </div>
        <div className="mt-[200px] flex justify-between items-center">
          <button className="border border-black py-[11px] text-center px-8 md:px-3 xl:px-3 text-[10px]  xl:text-[12px]">
            <FaArrowLeft />
          </button>
          <button className="border border-black py-2 text-center sm:px-8 md:px-3 xl:px-3 text-[10px] f xl:text-[12px]">
            2
          </button>
          <button className="border border-black py-2 text-center sm:px-8 md:px-3 xl:px-3 text-[10px]  xl:text-[12px]">
            3
          </button>
          <button className="border border-black py-[11px] text-center xl:px-3 md:px-3 sm:px-8 text-[10px]  xl:text-[12px]">
            <FaArrowRight />
          </button>
        </div>
        </div>
    );
};

export default AddProductleft;