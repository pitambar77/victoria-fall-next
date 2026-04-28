// src/components/skeletons/OverviewSkeleton.jsx
import React from "react";

const OverviewSkeleton = () => {
  return (
    <div className="bg-white md:py-20 py-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="h-8 w-1/2 mx-auto bg-gray-300 mb-6 animate-pulse"></div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="h-4 bg-gray-300 animate-pulse"></div>
          <div className="h-4 bg-gray-300 animate-pulse"></div>
          <div className="h-4 bg-gray-300 animate-pulse"></div>
          <div className="h-4 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSkeleton;