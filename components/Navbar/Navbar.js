import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { navStocks } from "../../utils/constant";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex sticky top-0 z-50 bg-white px-4 justify-between shadow-md items-center py-2 w-full">
          <div className="relative w-20 h-14">
            <Image src="/logo.png" alt="logo" fill={true} />
          </div>

          <div className="md:mr-auto ml-8 w-full max-w-[800px] shadow-inner rounded bg-gray-200 mr-2">
            <div
              className="flex w-full justify-between rounded overflow-hidden px-2 py-1 items-center 
          "
            >
              <input
                type="text"
                placeholder=""
                className="border-none outline-none hover:outline-none 
            p-2 w-full bg-transparent"
              />
              <MagnifyingGlassIcon className="h-full w-6 " />
            </div>
          </div>

          <div className="hidden md:flex space-x-2 xl:space-x-4 ">
            <button className="btn border-none">Contact Us</button>
            <button className="btn">SIGN UP</button>
            <button className="btn">SIGN IN</button>
          </div>

          <div className="">
            <div className="md:hidden w-[40px] h-[40px] relative overflow-hidden rounded-full bg-stone-600">
              <Image src="/user1.png" alt="user" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
