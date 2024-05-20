import React, { useState } from "react";

const Switcher = ({ isChecked, setIsChecked, lable = "" }) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer select-none autoSaverSwitch">
        <input
          type="checkbox"
          name="autoSaver"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-primary" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-6" : ""
            }`}
          ></span>
        </span>
        <span className="flex items-center text-sm font-medium text-black label">
          {lable}
        </span>
      </label>
    </>
  );
};

export default Switcher;
