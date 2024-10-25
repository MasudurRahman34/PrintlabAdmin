import Link from "next/link";
import React from "react";
import DeleteTopList from "./DeleteTopList";

const TopListingItemTable = ({ items = [], refetch_top_list }) => {
  return (
    <table className="table min-w-full mt-5 border whitespace-nowrap table-hover table-bordered">
      <thead>
        <tr className="bg-gray-200 border border-solid border-inherit dark:border-defaultborder/10">
          <th scope="col" className="text-start">
            Heading
          </th>

          <th scope="col" className="text-start">
            Sub Heading
          </th>
          <th scope="col" className="text-start">
            Type
          </th>

          <th scope="col" className="text-start">
            Connected Items
          </th>
          <th scope="col" className="text-start">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            className="border border-solid product-list border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
            key={item.id}
          >
            <td>
              <span className="text-sm">{item.heading}</span>
            </td>

            <td>
              <span className="text-sm">{item.sub_heading}</span>
            </td>

            <td>
              <span className="text-sm">{item.type} </span>
            </td>
            <td>
              <ul className="text-xs">
                {item.top_listing_items.length ? (
                  item.top_listing_items.map((innerItem) => {
                    if (item.type === "product") {
                      return (
                        <li key={innerItem.id}>
                          <Link href={`/products/${innerItem.id}`}>
                            {innerItem.itemable.title}
                          </Link>
                        </li>
                      );
                    } else {
                      return (
                        <li key={innerItem.id}>
                          <Link href={`/categories/${innerItem.id}`}>
                            {innerItem.itemable.title}
                          </Link>
                        </li>
                      );
                    }
                  })
                ) : (
                  <li>N/A</li>
                )}
              </ul>
            </td>

            <td>
              <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                <Link
                  href={`/top-listing/${item.id}`}
                  className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
                >
                  <i className="ri-pencil-line"></i>
                </Link>
                <DeleteTopList
                  topListId={item.id}
                  refetch_top_list={refetch_top_list}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopListingItemTable;
