import { useState } from "react";
import crossIcon from "../assets/svgs/crossIcon.svg";

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, toggle }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    toggle();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

            <div className="relative bg-white rounded-md max-w-md w-full p-6">
              <button
                onClick={handleCloseModal}
                className="absolute top-0 right-0 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                <img src={crossIcon} alt="icon 3" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
