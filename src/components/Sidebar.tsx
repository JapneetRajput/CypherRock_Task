import React, { useState } from "react";

// CSS
import "./sidebar.css";

import groupWallet from "../assets/svgs/Groupwallet-icon.svg";
import portfolio from "../assets/svgs/portfolio.svg";
import tutorial from "../assets/svgs/tutorial.svg";
import setting from "../assets/svgs/setting.svg";
import transaction from "../assets/svgs/transaction.svg";
import threeDotsHoriz from "../assets/svgs/threeDotsHoriz.svg";

const Sidebar: React.FC = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="bg-[#161C23] absolute top-28 left-10 h-5/6 w-1/6 p-4 pl-0 rounded-xl">
      <a
        href="/"
        className="block items-center font-bold font-lato text-lg py-6 px-8 text-white"
      >
        <img src={portfolio} alt="arrow icon" className="inline w-8 h-8 mr-2" />
        Portfolio
      </a>
      <div className="divider mb-4"></div>
      <a
        href="/"
        className={`inline-block ${
          active ? "border-l-4 border-[#C0996F]" : ""
        } py-2 text-[#C0996F] px-8`}
      >
        <img
          src={groupWallet}
          alt="arrow icon"
          className="inline w-6 h-6 mr-2"
        />
        Wallets
      </a>
      <div className="pl-16">
        <a href="/" className="block sub-link py-2 text-[#C78D4E]">
          Wallet 1
          <img
            src={threeDotsHoriz}
            alt="wallet icon"
            className="inline w-3 h-3 ml-2"
          />
        </a>
        <a href="/" className="block sub-link py-2 text-[#7D6D5C]">
          Wallet 2
          <img
            src={threeDotsHoriz}
            alt="wallet icon"
            className="inline w-3 h-3 ml-2"
          />
        </a>
        <a href="/" className="block sub-link py-2 text-[#7D6D5C]">
          Wallet 3
          <img
            src={threeDotsHoriz}
            alt="wallet icon"
            className="inline w-3 h-3 ml-2"
          />
        </a>
      </div>
      <div className="divider"></div>
      <a href="/" className="block py-2 px-8 text-white">
        <img
          src={transaction}
          alt="arrow icon"
          className="inline w-6 h-6 mr-2"
        />
        Last Transaction
      </a>
      <div className="divider"></div>
      <a href="/" className="block py-2 px-8 text-white">
        <img src={tutorial} alt="arrow icon" className="inline w-6 h-6 mr-2" />
        Tutorials
      </a>
      <div className="divider"></div>
      <a href="/" className="block py-2 px-8 text-white">
        <img src={setting} alt="arrow icon" className="inline w-6 h-6 mr-2" />
        Settings
      </a>
      <button
        className=" hover:bg-blue-600 text-[#9898FF] py-2 px-4 mt-10 mx-9 ml-10 rounded-md"
        style={{ borderColor: "#5151FF", borderWidth: "1px" }}
      >
        Make Beneficiary
      </button>
      <div className="bg-[#4B3C2B] w-full h-14 absolute bottom-0  text-[#E7DDD2] rounded-md">
        <button className="absolute bottom-4 left-24">Support</button>
      </div>
    </div>
  );
};

export default Sidebar;
