"use client";
import React from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { BsFillBellFill, BsFillChatSquareTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { sideBarLinks } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, setModal } from "../../features/modalSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const handlerExpand = () => {
    dispatch(setModal({ active: !modal }));
  };

  return (
    <>
      <div
        className={` bg-blue_dark fixed h-full md:h-screen z-50 md:relative md:top-0 flex `}
      >
        <div className={`${modal ? "w-[300px]" : "hidden"}`}>
          <div className=" flex items-center justify-between border-b p-4 border-gray-600">
            <div className="flex items-center text-white space-x-2">
              <FaUser className="w-5 h-5 rounded-full" />
              <h3>Hello, User</h3>
            </div>

            <div>
              <BsFillBellFill className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="pt-1 cursor-pointer">
            <div className="flex text-white items-center justify-between hover:bg-[#062440] py-1 px-2">
              <div className="flex items-center space-x-1">
                <BsFillChatSquareTextFill className="w-5 h-4" />
                <span className="text-sm font-normal m-0 p-0">
                  Disscussion Fourm
                </span>
              </div>
              <IoMdArrowDropdown className="w-5 h-5" />
            </div>

            <div className="flex text-white items-center justify-between hover:bg-[#062440] py-1 px-2">
              <div className="flex items-center space-x-1">
                <RiMoneyDollarCircleFill className="w-5 h-4" />
                <span className="text-sm font-normal m-0 p-0">
                  Market Stories
                </span>
              </div>
            </div>

            <div className="text-white text-sm">
              <ul className="">
                {sideBarLinks.map((item, index) => (
                  <li className="py-1 hover:bg-[#062440] pl-8" key={index}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="absolute top-[200px] -right-5 bg-blue_dark  py-5 rounded-tr rounded-br cursor-pointer "
          onClick={handlerExpand}
        >
          <IoMdArrowDropright className="text-white w-5 h-5" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
