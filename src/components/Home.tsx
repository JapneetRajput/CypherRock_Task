import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./home.css";
import Subheader from "./Subheader";
import searchIcon from "../assets/svgs/searchIcon.svg";
import plusIcon from "../assets/svgs/plusIcon.svg";
import deleteIcon from "../assets/svgs/deleteIcon.svg";
import amountIcon from "../assets/svgs/amountIcon.svg";
import downArrow from "../assets/svgs/downArrow.svg";
import receiveIcon from "../assets/svgs/receiveIcon.svg";
import sendIcon from "../assets/svgs/sendIcon.svg";
import bitcoin from "../assets/svgs/bitcoin.svg";
import ethereum from "../assets/svgs/ethereum.svg";
import binance from "../assets/svgs/binance.svg";
import rightArrow from "../assets/svgs/rightArrow.svg";
import Modal from "./Modal";
import CheckpointMarker from "./CheckpointMarker";

const Home: React.FC = () => {
  const data = [
    {
      path: "bitcoin.svg",
      coinName: "BITCOIN",
      holding: "BTC 0.00256",
      value: "$ 0.5268",
      price: "$ 1.2586",
    },
    {
      path: "ethereum.svg",
      coinName: "ETHEREUM",
      holding: "ETH 0.00256",
      value: "$ 0.5268",
      price: "$ 1.2586",
    },
    {
      path: "binance.svg",
      coinName: "BINANCE",
      holding: "BNB 0.00256",
      value: "$ 0.5268",
      price: "$ 1.2586",
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Amount High - Low");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Amount High - Low",
    "Amount Low - High",
    "Arrange A - Z",
    "Arrange Z - A",
  ];

  const toggleDropdown = () => setOpen(!open);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownRef]);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const steps = ["Device", "Verification", "Receive"];

  return (
    <div className="bg-[#0A1018] w-full ">
      <Header />
      <div className="divider-top"></div>
      <Subheader />

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl  my-4 text-white">Receive</h2>

          <div className="flex flex-col items-center mt-10">
            <CheckpointMarker steps={steps} currentStep={currentStep} />
            <div className="mt-5 ml-2">
              {steps.map((step, index) => {
                return (
                  <p
                    className={`inline-block px-20 ${
                      index < currentStep
                        ? "text-[#C78D4E]"
                        : index === currentStep
                        ? "text-[#E19A4C]"
                        : "text-[#A2A1A1]"
                    }`}
                  >
                    {step}
                  </p>
                );
              })}
              <br />
              {currentStep === 0 && (
                // <button
                //   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                //   onClick={handleNextStep}
                // >
                //   Next
                // </button>
                <>
                  <p className="text-[#7E7D7D] text-md ml-4 mt-16">
                    Follow the instructions on device
                  </p>
                  <div
                    className="bg-transparent my-4 pt-3 pb-3 px-3 rounded-lg overflow-hidden shadow-md"
                    onClick={handleNextStep}
                  >
                    <img
                      className="inline-block object-cover w-4 h-3 mr-3 ml-2 mb-1"
                      src={rightArrow}
                      alt="Card"
                    />
                    <span className="text-md text-[#A4A9D6]">
                      Select the Wallet On device
                    </span>
                    {/* <img
                        className="inline-block object-cover w-4 h-3 mr-2 relative top-0 right-0  mb-1 "
                        src={rightArrow}
                        alt="Card"
                      /> */}
                  </div>
                  <div className="bg-transparent my-4 pt-3 pb-3 px-3 rounded-lg overflow-hidden shadow-md">
                    <img
                      className="inline-block object-cover w-4 h-3 mr-3 ml-2 mb-1"
                      src={rightArrow}
                      alt="Card"
                    />
                    <span className="text-md text-[#A4A9D6]">
                      Select the Coin on device
                    </span>
                    {/* <img
                        className="inline-block object-cover w-4 h-3 mr-2 relative top-0 right-0  mb-1 "
                        src={rightArrow}
                        alt="Card"
                      /> */}
                  </div>
                  <div className="bg-transparent my-4 pt-3 pb-3 px-3 rounded-lg overflow-hidden shadow-md">
                    <img
                      className="inline-block object-cover w-4 h-3 mr-3 ml-2 mb-1"
                      src={rightArrow}
                      alt="Card"
                    />
                    <span className="text-md text-[#A4A9D6]">
                      Tap 1 card of any 4 Cards
                    </span>
                    {/* <img
                        className="inline-block object-cover w-4 h-3 mr-2 relative top-0 right-0  mb-1 "
                        src={rightArrow}
                        alt="Card"
                      /> */}
                  </div>
                </>
              )}
              {currentStep === 1 && (
                // <button
                //   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                //   onClick={handleNextStep}
                // >
                //   Next
                // </button>
                <>
                  <div
                    className="bg-transparent my-4 py-8 px-3 rounded-lg overflow-hidden shadow-md flex items-center"
                    onClick={handlePrevStep}
                  >
                    <span className="text-2xl font-bold text-[#E19A4C] mx-auto">
                      25BKJNKNLJL58fjkdhfk26dnfds15
                    </span>
                  </div>

                  <p className="text-[#7E7D7D] text-md ml-4 mt-8">
                    Verify address on device
                  </p>
                  <div
                    className="bg-transparent my-4 pt-3 pb-3 px-3 rounded-lg overflow-hidden shadow-md"
                    onClick={handleNextStep}
                  >
                    <img
                      className="inline-block object-cover w-4 h-3 mr-3 ml-2 mb-1"
                      src={rightArrow}
                      alt="Card"
                    />
                    <span className="text-md text-[#A4A9D6]">
                      Please match the address to be shown in X1 Wallet
                    </span>
                    {/* <img
                      className="inline-block object-cover w-4 h-3 mr-2 relative top-0 right-0  mb-1 "
                      src={rightArrow}
                      alt="Card"
                    /> */}
                  </div>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <p className="text-[#7E7D7D] text-lg ml-4 mt-8">
                    Coin address
                  </p>
                  <div
                    className="bg-transparent my-4 py-4 px-3 rounded-lg overflow-hidden shadow-md flex items-center"
                    onClick={handlePrevStep}
                  >
                    <span className="text-2xl font-bold text-[#E19A4C] mx-auto">
                      25BKJNKNLJL58fjkdhfk26dnfds15
                    </span>
                    <div
                      className="bg-transparent6 cursor:pointer py-3 px-3 mr-6 rounded-xl overflow-hidden shadow-md flex items-center"
                      onClick={handlePrevStep}
                    >
                      <span className="text-xl text-[#E0B36A] mx-auto">
                        Copy
                      </span>
                    </div>
                  </div>
                  <p className="text-[#4848F6] text-lg ml-4 mt-8">
                    Address verified
                  </p>
                  <button
                    className="hover:bg-[#4848F6] hover:text-white text-[#4848F6] py-2 px-4 mt-10  mx-[300px] rounded-md"
                    style={{ borderColor: "#4848F6", borderWidth: "1px" }}
                  >
                    Re-Verify
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>

      <div className="flex flex-col items-center justify-between px-4 py-3 md:flex-row md:pr-8 md:pl-80">
        <div className="flex items-center mb-2 md:mb-0">
          <h1 className="text-[#E2C19D] ml-2 text-2xl font-medium">Wallet 1</h1>
        </div>
        <div className="flex items-center">
          <div className="bg-[#141921] rounded-md p-2 flex items-center mr-4">
            <img src={searchIcon} alt="Search" className="pl-1 pr-3" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none w-full"
            />
          </div>
          <div className="bg-[#141921] rounded-md px-2 py-2 flex items-center">
            <button className="mr-4">
              <img
                src={plusIcon}
                alt="Search"
                className="pl-1 pr-1 pb-1 my-0 inline w-5 h-5"
              />
              <span
                onClick={handleOpenModal}
                className="text-[#BEB4A8] text-md"
              >
                ADD COIN
              </span>
            </button>
            <div className="divider-vertical mx-3"></div>
            <button>
              <img
                src={deleteIcon}
                alt="Search"
                className="pl-1 pr-1 pb-1 my-0 inline w-5 h-5"
              />
              <span className="text-[#BEB4A8] text-md">DELETE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Total coins  */}
      <div className="flex items-center justify-between px-4 py-3 pr-8 pl-80">
        <div className="flex items-center">
          <h1 className="text-[#ADABAA] ml-2 text-md font-medium">
            Total coins - 7
          </h1>
        </div>
        <div className="divider-top"></div>
        <div className="flex items-center">
          {/* <img src={yellowTick} alt="icon 1" className="w-6 h-6 mr-3" /> */}

          <div
            className="rounded-md p-2 flex items-center mr-4"
            ref={dropdownRef}
          >
            <div className="relative">
              <div
                className="cursor-pointer flex items-center"
                onClick={toggleDropdown}
              >
                <img src={amountIcon} alt="Search" className="w-6 h-6 pr-3" />
                <span className="text-[#BEB4A8]">{selectedOption}</span>
                <img src={downArrow} alt="Search" className="w-7 h-7 pl-3" />
              </div>
              {open && (
                <div className="absolute top-8 right-0 bg-[#404854] py-2 px-4 rounded-md shadow-lg z-10">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="cursor-pointer pl-5 text-[#BEB4A8] py-2 hover:text-white transition-colors duration-300"
                      onClick={() => handleSelectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pl-80">
        <table>
          <thead className="text-lg text-[#474848]">
            <tr>
              <th className="pr-36 pl-6">Coin</th>
              <th className="pr-36 pl-6">Holding</th>
              <th className="pr-36 pl-6">Value</th>
              <th className="pr-36 pl-6">Price</th>
              <th className="pr-12 pl-4">Receive</th>
              <th className="pr-12 pl-4">Send</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-[#161C23] h-16 my-4">
              <td>
                <img src={bitcoin} alt="bitcoin" className="inline pl-4" />
                <span className="text-[#ADABAA] pl-1">BITCOIN</span>
              </td>
              <td className="pl-6 text-[#ADABAA]">{data[0]["holding"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[0]["value"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[0]["price"]}</td>
              <td className="pl-3">
                <img
                  src={receiveIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#8484F1] text-md">RECEIVE</span>
              </td>
              {/* <div className="divider-vertical m-0"></div> */}
              <td className="pl-3">
                <img
                  src={sendIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#CAA276] text-md">SEND</span>
              </td>
            </tr>
            <tr className="bg-[#161C23] h-16 my-4">
              <td>
                <img src={ethereum} alt="ethereum" className="inline pl-4" />
                <span className="text-[#ADABAA] pl-1">ETHEREUM</span>
              </td>
              <td className="pl-6 text-[#ADABAA]">{data[1]["holding"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[1]["value"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[1]["price"]}</td>
              <td className="pl-3">
                <img
                  src={receiveIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#8484F1] text-md">RECEIVE</span>
              </td>
              {/* <div className="divider-vertical m-0"></div> */}
              <td className="pl-3">
                <img
                  src={sendIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#CAA276] text-md">SEND</span>
              </td>
            </tr>
            <tr className="bg-[#161C23] h-16 my-4">
              <td>
                <img src={binance} alt="binance" className="inline pl-4" />
                <span className="text-[#ADABAA] pl-1">Binance</span>
              </td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["holding"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["value"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["price"]}</td>
              <td className="pl-3">
                <img
                  src={receiveIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#8484F1] text-md">RECEIVE</span>
              </td>
              {/* <div className="divider-vertical m-0"></div> */}
              <td className="pl-3">
                <img
                  src={sendIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#CAA276] text-md">SEND</span>
              </td>
            </tr>
            <tr className=" bg-[#161C23] h-16 my-4">
              <td>
                <img src={bitcoin} alt="bitcoin" className="inline pl-4" />
                <span className="text-[#ADABAA] pl-1">BITCOIN</span>
              </td>
              <td className="pl-6 text-[#ADABAA]">{data[0]["holding"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[0]["value"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[0]["price"]}</td>
              <td className="pl-3">
                <img
                  src={receiveIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#8484F1] text-md">RECEIVE</span>
              </td>
              {/* <div className="divider-vertical m-0"></div> */}
              <td className="pl-3">
                <img
                  src={sendIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#CAA276] text-md">SEND</span>
              </td>
            </tr>
            <tr className="bg-[#161C23] h-16 my-4">
              <td>
                <img src={ethereum} alt="ethereum" className="inline pl-4" />
                <span className="text-[#ADABAA] pl-1">Ethereum</span>
              </td>
              <td className="pl-6 text-[#ADABAA]">{data[1]["holding"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[1]["value"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[1]["price"]}</td>
              <td className="pl-3">
                <img
                  src={receiveIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#8484F1] text-md">RECEIVE</span>
              </td>
              {/* <div className="divider-vertical m-0"></div> */}
              <td className="pl-3">
                <img
                  src={sendIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#CAA276] text-md">SEND</span>
              </td>
            </tr>
            <tr className="bg-[#161C23] h-16 my-4">
              <td>
                <img src={binance} alt="binance" className="inline pl-4" />
                <span className="text-[#ADABAA] pl-1">Binance</span>
              </td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["holding"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["value"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["price"]}</td>
              <td className="pl-3">
                <img
                  src={receiveIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#8484F1] text-md">RECEIVE</span>
              </td>
              {/* <div className="divider-vertical m-0"></div> */}
              <td className="pl-3">
                <img
                  src={sendIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#CAA276] text-md">SEND</span>
              </td>
            </tr>
            <tr className="bg-[#161C23] h-16 my-4">
              <td>
                <img src={binance} alt="binance" className="inline pl-4" />
                <span className="text-[#ADABAA] pl-1">Binance</span>
              </td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["holding"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["value"]}</td>
              <td className="pl-6 text-[#ADABAA]">{data[2]["price"]}</td>
              <td className="pl-3">
                <img
                  src={receiveIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#8484F1] text-md">RECEIVE</span>
              </td>
              {/* <div className="divider-vertical m-0"></div> */}
              <td className="pl-3">
                <img
                  src={sendIcon}
                  className="inline w-6 h-6 pr-2"
                  alt="receive icon"
                />
                <span className="text-[#CAA276] text-md">SEND</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
