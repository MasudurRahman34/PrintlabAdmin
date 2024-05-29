import ArtworkComponent from "../pages/products/ProductSetting/Artwork";
import Attribute from "../pages/products/ProductSetting/Attribute";
import Specification from "../pages/products/ProductSetting/Specification";
import { useRouter } from "next/router";
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
}) {
  const router = useRouter();
  const { slug } = router.query;
  const [active, setActive] = useState("Specification");

  return (
    <div>
      <div className="flex items-center py-5 border-b border-[#333335]">
        <p className="text-base font-medium text-black">Product data</p>
        {/* <div>
          <select class="ti-form-select rounded-sm !py-2 !px-3 w-[40%] ml-[50px]">
            <option selected>Simple Product</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div> */}
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-2 py-3">
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
        <div className="col-span-10">
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
            />
          )}
        </div>
      </div>
    </div>
  );
}
