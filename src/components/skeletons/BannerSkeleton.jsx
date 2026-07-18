// src/components/skeletons/BannerSkeleton.jsx
import React from "react";

const BannerSkeleton = () => {
  return (
    <div className="relative md:h-[90vh] h-[550px] overflow-hidden bg-gray-300 animate-pulse">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 max-w-[1140px] mx-auto flex flex-col justify-center px-4">
        {/* Title */}
        <div className="h-12 w-[70%] max-w-[700px] bg-white/30 rounded-md mb-5" />

        {/* Subtitle */}
        <div className="h-6 w-[40%] max-w-[350px] bg-white/20 rounded-md" />
      </div>
    </div>
  );
};

export default BannerSkeleton;
