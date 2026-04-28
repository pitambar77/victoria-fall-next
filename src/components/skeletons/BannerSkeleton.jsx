// src/components/skeletons/BannerSkeleton.jsx
import React from "react";

const BannerSkeleton = () => {
  return (
    <div className="relative md:h-[90vh] h-[550px] bg-gray-300 animate-pulse">
      <div className="absolute inset-0 flex flex-col justify-center max-w-[1140px] mx-auto px-4">
        <div className="h-12 w-3/4 bg-gray-400 mb-6"></div>
        <div className="h-6 w-2/3 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default BannerSkeleton;