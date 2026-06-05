import React from "react";

const Overview = ({ overviewinfo }) => {
  return (
    <div className="bg-white py-10 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="hd max-w-[400px] mx-auto text-xl md:text-[30px] mb-6 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          {overviewinfo?.title}
        </h2>

        {/* Description */}
        <p
          className="hd max-w-2xl mx-auto md:text-center text-justify text-[#5c5e62] tracking-[1px]"
          dangerouslySetInnerHTML={{
            __html: overviewinfo?.description || "",
          }}
        />
      </div>
    </div>
  );
};

export default Overview;
