"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTabs } from "../features/tabSlice";
import Companies from "@/components/Featured/Companies";
import Feed from "@/components/Feed/Feed";
import Market from "@/components/Market/Market";
import SideBar from "@/components/SideBar/SideBar";
import Tabs from "@/components/Tabs/Tabs";
import React from "react";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const setView = (e) => {
      let width = e.target.innerWidth;
      if (width > 768) {
        dispatch(setTabs({ activeTab: "" }));
      } else {
        dispatch(setTabs({ activeTab: "forum" }));
      }
    };
    window.addEventListener("resize", setView);

    return () => {
      window.removeEventListener("resize", setView);
    };
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="hidden md:inline-block bg-white px-4 py-1">
          <h1 className="uppercase text-red-600 font-medium">
            Featured Companies
          </h1>
        </div>
        <Companies />
        <Tabs />

        <div className="flex md:justify-between">
          <SideBar />
          <Feed />
          <Market />
        </div>
      </div>
    </>
  );
}
