import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectTab } from "../../features/tabSlice";


const Card = () => {
  const dispatch = useDispatch();
  const tabs = useSelector(selectTab);
  return (
    <>
      <div
        className={`rounded-lg overflow-hidden w-full min-w-[200px] max-w-[280px] relative h-[160px] col-span-1 ${
          tabs === "market" ? "mx-auto" : ""
        }`}
      >
        <div className="w-full relative h-[180px]">
          <Image src="/stocks.jpg" fill={true} alt="building" />
        </div>
        <div
          className="absolute bg-black text-white bg-opacity-60 text-sm z-10 bottom-0 left-0 right-0 px-3 
          py-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quo est
          modi inventore?
        </div>
      </div>
    </>
  );
};

export default Card;
