'use client'
import React from "react";
import { BiHomeCircle, BiGridAlt } from "react-icons/bi";
import { BsGrid1X2Fill, BsChatSquareText } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
//

const Footer = () => {
  return (
    <>
      <div className="flex justify-between bg-blue_dark text-white z-50 md:hidden px-5 pt-2 absolute w-full
      bottom-0 
      ">
        <div>
        <BsGrid1X2Fill className="w-5 h-5"/>
        </div>

        <div className="">
        <BiGridAlt className="w-5 h-5"/>
        </div>

        <div className="border-b-2 border-red-600 px-6 pb-2">
        <BiHomeCircle className="w-5 h-5"/>
        </div>

        <div>
        <BsChatSquareText className="w-5 h-5"/>
        </div>

        <div>
        <FaTasks className="w-5 h-5"/>
        </div>
      </div>
    </>
  );
};

export default Footer;
