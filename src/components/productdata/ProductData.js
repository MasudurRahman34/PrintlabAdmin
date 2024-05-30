import ArtworkComponent from "../pages/products/ProductSetting/Artwork";
import Attribute from "../pages/products/ProductSetting/Attribute";
import Specification from "../pages/products/ProductSetting/Specification";
import { useState } from "react";

const tabList = [
  {
    id: 1,
    name: "Artwork",
  },
  {
    id: 2,
    name: "Specification",
  },

  {
    id: 3,
    name: "Attribute",
  },
  {
    id: 4,
    name: "Offer",
  },
];

export default function ProductData({
  data,
  isLoading,
  isError,
  error,
  refetch,
  combination_refetch,
}) {
  const [active, setActive] = useState("Attribute");

  return (
    <div>
      <div className="flex items-center py-5 border-b border-[#333335]">
        <p className="text-base font-medium text-black">Product data</p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 py-3 md:col-span-4 ">
          <ul className="flex flex-col gap-2">
            {tabList.map((tab) => (
              <li
                key={tab.id}
                className={`px-3 py-2 border cursor-pointer   ${
                  active === tab.name ? "text-white  bg-purple-500 " : ""
                }`}
                onClick={() => setActive(tab.name)}
              >
                <p className={`text-sm md:text-base font-bold`}>{tab.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8">
          {active === "Artwork" && (
            <ArtworkComponent
              data={data}
              isLoading={isLoading}
              error={error}
              isError={isError}
              refetch={refetch}
            />
          )}
          {active === "Specification" && (
            <Specification
              product_id={data?.id}
              product_data={data}
              product_isLoading={isLoading}
              product_error={error}
              product_isError={isError}
              product_refetch={refetch}
            />
          )}
          {active === "Attribute" && (
            <Attribute
              product_id={data?.id}
              product_data={data}
              product_isLoading={isLoading}
              product_error={error}
              product_isError={isError}
              product_refetch={refetch}
              combination_refetch={combination_refetch}
            />
          )}
        </div>
      </div>
    </div>
  );
}
