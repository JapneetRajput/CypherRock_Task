import React from "react";
import cysyncLogo from "../assets/svgs/cysyncLogo.svg";
import minimizeIcon from "../assets/svgs/minimizeIcon.svg";
import expandIcon from "../assets/svgs/expandIcon.svg";
import crossIcon from "../assets/svgs/crossIcon.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-8 pl-16 pt-10">
      <div className="flex items-center">
        <img src={cysyncLogo} alt="Cysync logo" className="w-7 h-7 mr-4" />
        <h1 className="text-white font-bold text-lg">cySync</h1>
      </div>
      <div className="flex items-center mr-4">
        <img src={minimizeIcon} alt="icon 1" className="w-4 h-4 mr-4 pt-2" />
        <img src={expandIcon} alt="icon 2" className="w-4 h-4 mr-4" />
        <img src={crossIcon} alt="icon 3" className="w-4 h-4" />
      </div>
    </header>
  );
};

export default Header;
