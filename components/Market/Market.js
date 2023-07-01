"use client";
import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { selectModal } from "../../features/modalSlice";
import { AiOutlinePlus } from "react-icons/ai";
import { selectTab, setTabs } from "../../features/tabSlice";

const Market = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const tabs = useSelector(selectTab);

  return (
    <>
      <div
        className={`  ${modal ? "max-w-[300px]" : "max-w-[600px]"}  ${
          tabs === "market" ? "inline-block w-full" : "marketTab"
        }`}
      >
        <h1 className="hidden md:inline-block text-red-600 font-medium uppercase py-1">
          Market Stories
        </h1>
        <div
          className={`grid h-fit gap-3 xl:gap-5 pt-2 md:pt-0 ${
            modal ? "expandRow" : "marketCards"
          } `}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div
          className={`absolute bg-blue_dark w-12 h-12 rounded-full  text-white flex justify-center items-center right-0 z-50 ${
            modal ? "top-md_y" : "top-[65%]"
          } ${tabs === "market" ? "top-[90%] right-5" : ""} `}
        >
          <AiOutlinePlus className="w-7 h-7" />
        </div>
      </div>
    </>
  );
};

export default Market;
