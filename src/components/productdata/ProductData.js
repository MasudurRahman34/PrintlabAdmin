import Advancedata from "./Advancedata";


export default function ProductData() {
  return (
    <div>
        <div className="flex items-center py-5 border-b border-[#333335]">
            <p className="text-base text-black font-medium">Product data</p>
            <div>
                <select class="ti-form-select rounded-sm !py-2 !px-3 w-[40%] ml-[50px]">
                  <option selected>Simple Product</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
          </div>
          <div className="grid grid-cols-12 gap-5" >
            <div className="col-span-2">
              <ul className="bg-[#FAFAFA]">
                <li className="px-3 py-2 border "> <a href="#" className="text-sm md:text-base  font-normal text-[#333335]" >General</a> </li>
                <li className="px-3 py-2 border "> <a href="#" className="text-sm md:text-base  font-normal text-[#333335]" >Inventory</a> </li>
                <li className="px-3 py-2 border "> <a href="#" className="text-sm md:text-base  font-normal text-[#333335]" >Shipping</a> </li>
                <li className="px-3 py-2 border "> <a href="#" className="text-sm md:text-base  font-normal text-[#333335]" >Attributes</a> </li>
                <li className="px-3 py-2 border "> <a href="#" className="text-sm md:text-base  font-normal text-[#333335]" >Offer</a> </li>
              </ul>
            </div>
            <div className="col-span-10">
              <div className="general hidden">
                <div className="mt-2">
                  <label className="text-[#333335] text-sm md:text-base w-[10%] ">Regular price </label>
                  <input type="text" className="w-[50%] ml-4  rounded-md" />
                </div>
                <div className="mt-2">
                  <label className="text-[#333335] text-sm md:text-base w-[10%] ">Sale price</label>
                  <input type="text" className="w-[50%] ml-4  rounded-md" />
                </div>
              </div>
              <div className="invoce hidden">
                <div className="mt-2">
                  <label className="text-[#333335] text-sm md:text-base w-[10%] ">SKU</label>
                  <input type="text" className="w-[50%] ml-4  rounded-md" />
                </div>
                <div className="mt-2">
                  <div  className="flex ">
                  <label className="text-[#333335] text-sm md:text-base w-[10%] mt-4 ">Stock Status</label>
                  <div class="box-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked/>
                                        <label class="form-check-label" for="defaultCheck1">
                                            In Stock
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"
                                            />
                                        <label class="form-check-label" for="defaultCheck2">
                                            Out of Stock
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="exampleRadios"
                                            id="exampleRadios1"  />
                                        <label class="form-check-label" for="exampleRadios1">
                                        On backorder
                                        </label>
                                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="sopping hidden">
              <Advancedata/>
              </div>
              <div className="Advance hidden">
               <Advancedata/>
              </div>
              <div className="offer">
              <Advancedata/>
              </div>
         
            </div>
          </div>
    </div>
  )
}
