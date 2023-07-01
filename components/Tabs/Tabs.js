"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTab, setTabs } from "../../features/tabSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const tabs = useSelector(selectTab);

  const handlerTabs = (tab) => {
    dispatch(setTabs({ activeTab: tab }));
  };

  return (
    <>
      <div className={`w-full flex bg-blue_dark  md:hidden`}>
        <div
          className={`text-white w-full text-center ${
            tabs === "forum" ? "activeTab" : ""
          } p-1 text-sm`}
          onClick={(e) => handlerTabs("forum")}
        >
          <h1>Disscussion Forum</h1>
        </div>
        <div
          className={`text-white w-full text-center p-1 text-sm ${
            tabs === "market" ? "activeTab" : ""
          }`}
          onClick={(e) => handlerTabs("market")}
        >
          <h1>Market Stories</h1>
        </div>
      </div>
    </>
  );
};

export default Tabs;
