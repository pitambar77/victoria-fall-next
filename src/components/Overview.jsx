import React from "react";

const Overview = ({ title, subtitle, description }) => {
  return (
    <div className="bg-white md:py-20 py-10">
      <div className="max-w-6xl mx-auto text-center  px-4 md:px-0">
        {/* Title */}
        <h2 className="hd max-w-xl mx-auto md:text-[30px] sm:text-[20px] mb-6 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          {title} 
          {subtitle && (
            <>
              <br className="hidden md:inline" /> {subtitle}
            </>
          )}
        </h2>

        {/* Description */}
        <p className="hd max-w-2xl mx-auto md:text-center text-justify text-[#5c5e62] ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Overview;
