import React, { useState } from "react";

const SpaceDetails = () => {
  const [showAll, setShowAll] = useState(false);

  const facilities = ''

  // Limit to first 6 if not expanded
  const visibleFacilities = showAll ? facilities : facilities.slice(0, 6);

  return (
    <div>
      <div className="mt-12 mb-2 md:mb-8 max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex items-center  ">
            <span className=" hidden md:block w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
            <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase">
              Space
            </h2>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" hd text-sm uppercase tracking-wide text-[#2e2c2d]  hover:underline cursor-pointer"
            >
              {showAll ? "View Less ↑" : "View All →"}
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4  md:gap-6 hd text-[18px] text-[#2e2c2d] ">
          {visibleFacilities.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 ${
                item.disabled ? "opacity-50 line-through" : ""
              }`}
            >
              <div className="flex items-center gap-3 font-[500]">
                <div className=" flex items-center justify-center w-12 h-12 rounded-full  bg-[#f9f4e8]   transition-all duration-300 hover:bg-gray-100">
                  <img src={item.icon} alt="" className="h-8 w-8" />
                </div>
                <div>{item.facilityName}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Mobile button below gallery */}
        <div className="md:hidden mt-10 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            className=" hd text-sm uppercase tracking-wide text-[#2e2c2d]  hover:underline cursor-pointer"
          >
            {showAll ? "View Less ↑" : "View All →"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetails;
