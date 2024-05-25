import React, { useState } from "react";

const OptionCardItem = ({ item, handleOptionCheck, checkedAttribute }) => {
  const [activeDropdown, setActiveDropdown] = React.useState(false);

  return (
    <div className="flex items-center justify-between col-span-12 py-3 border-b border-gray-200 lg:col-span-6">
      <div className="flex w-full gap-3">
        <div
          class="form-check "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5px",
            width: "100%",
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="gridCheck1"
            // if item id is exists in the checkedAttribute array and the checked value is true then set the checked value to true
            checked={
              checkedAttribute?.options.filter((element) => element === item.id)
                .length > 0
            }
            onChange={() =>
              handleOptionCheck({
                checked_value: item.id,
                attribute_id: item.attribute_id,
              })
            }
          />

          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold">{item.title}</p>
            <div className="ti-btn-group !m-0">
              <div
                className={`hs-dropdown ti-dropdown relative z-50 ${
                  activeDropdown && "open"
                } `}
              >
                <button
                  className=""
                  onClick={() => {
                    setActiveDropdown(!activeDropdown);
                  }}
                >
                  <i class="ri-arrow-down-s-line align-middle inline-block"></i>
                </button>

                <ul
                  className={` hs-dropdown-menu ti-dropdown-menu ${
                    activeDropdown ? "block" : "hidden"
                  }`}
                  aria-labelledby="dropdownMenuButton1"
                  style={
                    activeDropdown
                      ? {
                          position: "absolute",
                          margin: "0px",
                          top: "100%",
                          right: "0",
                        }
                      : { display: "none" }
                  }
                >
                  <li>
                    <button className="ti-dropdown-item">Action</button>
                  </li>
                  <li>
                    <button className="ti-dropdown-item">Another action</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCardItem;
