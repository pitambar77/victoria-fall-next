// src/components/ProgressBar.jsx
import React from "react";

const ProgressBar = ({ step }) => {
  const steps = ["Basic Info", "Business Info", "Legal", "Profile"];
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const active = step >= stepNumber;
        return (
          <div key={label} className="flex-1 flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${
                active ? "bg-[#aca188] text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {stepNumber}
            </div>
            <p
              className={`text-xs mt-2 ${
                active ? "text-[#aca188] font-medium" : "text-gray-500"
              }`}
            >
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
