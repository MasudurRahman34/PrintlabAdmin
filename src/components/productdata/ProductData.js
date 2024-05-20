import Attribute from "../pages/products/ProductSetting/Attribute";
import General from "../pages/products/ProductSetting/General";
import Advancedata from "./Advancedata";
import { useState } from "react";

const tabList = [
  {
    id: 1,
    name: "specification",
  },
  {
    id: 2,
    name: "invoce",
  },

  {
    id: 3,
    name: "sopping",
  },
  {
    id: 4,
    name: "Advance",
  },
  {
    id: 5,
    name: "offer",
  },
  {
    id: 6,
    name: "attribute",
  },
];

export default function ProductData() {
  const [active, setActive] = useState("attribute");

  return (
    <div>
      <div className="flex items-center py-5 border-b border-[#333335]">
        <p className="text-base font-medium text-black">Product data</p>
        <div>
          <select class="ti-form-select rounded-sm !py-2 !px-3 w-[40%] ml-[50px]">
            <option selected>Simple Product</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-2">
          <ul className="bg-[#FAFAFA]">
            {tabList.map((tab) => (
              <li key={tab.id} className="px-3 py-2 border">
                <button
                  className={`text-sm md:text-base font-normal text-[#333335] ${
                    active === tab.name ? "text-[#333335] font-bold" : ""
                  }`}
                  onClick={() => setActive(tab.name)}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-10">
          {active === "specification" && <General />}
          {active === "attribute" && <Attribute />}
        </div>
      </div>
    </div>
  );
}
