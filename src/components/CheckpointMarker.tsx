import React from "react";
import tick from "../assets/svgs/tick.svg";

type CheckpointMarkerProps = {
  steps: string[];
  currentStep: number;
};

const CheckpointMarker: React.FC<CheckpointMarkerProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center flex-grow">
          <div
            className={`rounded-full h-8 w-8 flex items-center justify-center font-bold ${
              index <= currentStep
                ? "bg-[#E0B36A] text-white"
                : "border-[#707070] border-2 text-[#A0A0A4]"
            }`}
          >
            {index < currentStep ? <img src={tick} alt="tick" /> : index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className="w-48 h-[0.5px] bg-[#707070]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckpointMarker;
