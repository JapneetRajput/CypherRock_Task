import React, { useState } from "react";
import crossIcon from "../assets/svgs/crossIcon.svg";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-[#13161A] rounded-lg shadow-lg p-8 w-full h-5/6 mx-48 my-96">
        <button className="absolute top-4 right-8 p-10" onClick={handleClose}>
          <img src={crossIcon} alt="close" className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
