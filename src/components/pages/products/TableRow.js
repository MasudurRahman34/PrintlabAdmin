import categories from "@/pages/categories";
import Link from "next/link";
import React from "react";

const TableRow = ({ product }) => {
  return (
    <tr class="product-list">
      <td class="product-checkbox">
        <input
          class="form-check-input"
          type="checkbox"
          id="product1"
          value=""
          aria-label="..."
        />
      </td>
      <td>
        <div class="flex items-center">
          <span class="avatar avatar-md me-2">
            <img src="../assets/images/faces/6.jpg" alt="img" />
          </span>
        </div>
      </td>
      <td>
        <div class="flex items-center">
          <div class="font-semibold">{product.title}</div>
        </div>
      </td>
      <td>
        <span class="badge bg-light text-default text-wrap">
          {product?.categories.length > 0 &&
            product.categories.map((category) => category.title).join(", ")}
        </span>
      </td>
      <td>$1,299</td>

      <td>24,Nov 2022 - 04:42PM</td>
      <td>
        <div class="flex flex-row items-center !gap-2 text-[0.9375rem]">
          <Link
            aria-label="anchor"
            href={`/products/${product.slug}`}
            class="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
          >
            <i class="ri-pencil-line"></i>
          </Link>
          <Link
            aria-label="anchor"
            href="javascript:void(0);"
            class="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
          >
            <i class="ri-delete-bin-line"></i>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
