import Delete from "./Delete";
import { truncateHTML } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryRow = ({ item, refetch }) => {
  const profileImg = (media) => {
    return (
      (media?.length > 0 &&
        media.find((media) => media.is_profile === 1)?.url) ||
      "https://placehold.co/400"
    );
  };

  return (
    <>
      <tr
        className="border border-solid product-list border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
        key={item.id}
      >
        <td>
          <div className="flex items-center">
            <div className="me-2">
              <div class="avatar me-2">
                <img src={profileImg(item?.media)} alt="img" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{item.title}</div>
        </td>
        <td className="min-w-sm">
          <div className="">
            {truncateHTML({
              html: item.description,
              maxWords: 8,
            })}
          </div>
        </td>

        <td>
          <div className="font-semibold">{item.slug}</div>
        </td>

        <td>
          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
            <Link
              aria-label="anchor"
              href={`/categories/${item.slug}`}
              className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
            >
              <i className="ri-pencil-line"></i>
            </Link>
            <Delete category_id={item.id} refetch={refetch} />
          </div>
        </td>
      </tr>
      {item.children.length > 0 &&
        item.children.map((child) => (
          <tr
            className="border border-solid product-list border-inherit hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light"
            key={child.id}
          >
            <td>
              <div className="flex items-center">
                <div className="me-2">
                  <span class="avatar me-2">
                    <img src={profileImg(item?.media)} alt="img" />
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className="font-medium ">
                {" "}
                {">"} {child.title}
              </div>
            </td>
            <td className="max-w-sm text-wrap">
              <div className=" text-muted">
                {truncateHTML({
                  html: child.description,
                  maxWords: 8,
                })}
              </div>
            </td>

            <td>
              <div className="font-semibold">{child.slug}</div>
            </td>

            <td>
              <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                <Link
                  aria-label="anchor"
                  href={`/categories/${child.slug}`}
                  className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
                >
                  <i className="ri-pencil-line"></i>
                </Link>
                <Delete category_id={child.id} refetch={refetch} />
              </div>
            </td>
          </tr>
        ))}
    </>
  );
};

export default CategoryRow;
