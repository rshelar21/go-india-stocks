import React from "react";
import { navStocks } from "../../utils/constant";

const Shares = () => {
  return (
    <>
      <div className="px-5 bg-neutral-950 text-white py-1 flex gap-7 w-full overflow-scroll relative no-scrollbar">
        {navStocks.map((item, index) => (
          <span
            className={`w-fit text-xs whitespace-nowrap lg:text-sm ${
              item.status
                ? "text-green-500"
                : item.status === false
                ? "text-red-500"
                : "text-white"
            }`}
            key={index}
          >
            {item.value}
          </span>
        ))}
      </div>
    </>
  );
};

export default Shares;
