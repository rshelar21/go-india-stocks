import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectTab, setTabs } from "../../features/tabSlice";

const Companies = () => {
  const dispatch = useDispatch();
  const tabs = useSelector(selectTab);
  return (
    <>
      <div
        className="bg-cyan-50 flex  px-5 gap-5 max-w-full overflow-scroll 
       relative no-scrollbar py-1"
      >
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/capri.jpg"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/ganeshhousing.jpg"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/fino.png"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/gravita.jpg"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/hira.jpg"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/dtpatten1.png"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/deepind.png"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/capri.jpg"
            alt="logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/ganeshhousing.jpg"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image fill={true} src="/fino.png" alt="company-logo" />
        </div>
        <div
          className={`relative ${
            tabs === "market" ? "circle" : "min-w-[120px] min-h-[50px]"
          }`}
        >
          <Image
            fill={true}
            src="/gravita.jpg"
            alt="company-logo"
            className={`${tabs === "market" ? "rounded-full" : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
