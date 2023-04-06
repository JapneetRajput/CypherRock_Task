import React, { useState } from "react";
import yellowTick from "../assets/svgs/yellowTick.png";

const Subheader = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 pr-12">
      <div className="flex items-center mb-3 md:mb-0">
        {/* Add any content you want to display on the left */}
      </div>
      <div className="flex items-center">
        <img src={yellowTick} alt="icon 1" className="w-6 h-6 mr-3" />
        <span className="text-[#F5CEA3] mr-4 text-lg">Synchronized</span>
        <div className="divider-vertical" />
        <button
          className={`ml-4 w-7 h-4 flex items-center rounded-full transition-colors duration-300 border-white  ${
            toggle ? "border-2 border-[#D3A630]" : "bg-[#D3A630]"
          }`}
          onClick={handleToggle}
        >
          <span
            className={`block w-3 h-3 my-1 rounded-full transition duration-300 ${
              toggle
                ? "transform translate-x-full bg-[#D3A630]"
                : "bg-[#0A1018]"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Subheader;
