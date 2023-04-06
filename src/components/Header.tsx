import React from "react";
import cysyncLogo from "../assets/svgs/cysyncLogo.svg";
import minimizeIcon from "../assets/svgs/minimizeIcon.svg";
import expandIcon from "../assets/svgs/expandIcon.svg";
import crossIcon from "../assets/svgs/crossIcon.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-4 sm:px-8 lg:px-16 pt-6 sm:pt-10">
      <div className="flex items-center">
        <img src={cysyncLogo} alt="Cysync logo" className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-4" />
        <h1 className="text-white font-bold text-base sm:text-lg">cySync</h1>
      </div>
      <div className="flex items-center mr-2 sm:mr-4">
        <img src={minimizeIcon} alt="icon 1" className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-4 pt-1 sm:pt-2" />
        <img src={expandIcon} alt="icon 2" className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-4" />
        <img src={crossIcon} alt="icon 3" className="w-3 h-3 sm:w-4 sm:h-4" />
      </div>
    </header>
  );
};

export default Header;
