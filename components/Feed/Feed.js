"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Post from "./Post";
import { posts } from "../../data/posts";
import { useDispatch, useSelector } from "react-redux";
import { selectTab, setTabs } from "../../features/tabSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const tabs = useSelector(selectTab);

  return (
    <>
      <div
        className={`ml-8 md:ml-0 max-w-full ${
          tabs === "forum" ? "inline-block" : "hidden md:inline-block"
        } `}
      >
        <div className="hidden md:inline-block pt-2 px-4">
          <h1 className="text-red-600 font-medium">DISSCUSSION FORUM</h1>
        </div>

        <div className="mx-8 md:mx-10 xl:mx-20">
          <h1 className="text-lg font-medium">Filter</h1>

          <div className="p-2 md:p-4 shadow-feed rounded-lg flex items-center w-full max-w-[700px] justify-between mb-4">
            <div className="flex space-x-1 md:space-x-4">
              <button className="bg-red-600 btns">Sector 1</button>
              <button className="bg-blue-800 btns">Sector 2</button>
              <button className="bg-yellow-300 btns">Sector 3</button>
            </div>

            <div className="shadow-inner rounded-full bg-gray-200">
              <div className="flex md:w-[200px] justify-between rounded overflow-hidden px-3  items-center">
                <MagnifyingGlassIcon className="h-full w-6 flex-grow" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="border-none outline-none w-full hover:outline-none p-1 md:p-2 bg-transparent 
                placeholder:text-gray-500 placeholder:text-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[700px] overflow-y-auto scroll-smooth h-full max-h-[500px] pb-20 custom-scroll">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
