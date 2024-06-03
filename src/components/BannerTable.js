import BannerImg from "./BannerImg";
import { useState } from "react";

export default function BannerTable() {
  const [open, setopen] = useState(false);
  console.log(open);

  return (
    <>
      <tbody>
        <tr className="product-list">
          <td className="product-checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              id="product1"
              value=""
              aria-label="..."
            />
          </td>
          <td>
            <div className="flex items-center">
              <div className="me-2">
                <span className="avatar avatar-md avatar-rounded">
                  <img src="../assets/images/ecommerce/png/1.png" alt="" />
                </span>
              </div>
              <div className="font-semibold">DapZem &amp; Co Blue Hoodie</div>
            </div>
          </td>
          <td>
            <span className="badge bg-light text-default">
              www.facebook.com
            </span>
          </td>
          <td>5</td>
          <td>24,Nov 2022 - 04:42PM</td>
          <td>
            <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
              <a
                aria-label="anchor"
                href="edit-products.html"
                className="ti-btn ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"
              >
                <i className="ri-pencil-line"></i>
              </a>
              <a
                aria-label="anchor"
                href="javascript:void(0);"
                className="ti-btn ti-btn-wave product-btn !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"
              >
                <i className="ri-delete-bin-line"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}
