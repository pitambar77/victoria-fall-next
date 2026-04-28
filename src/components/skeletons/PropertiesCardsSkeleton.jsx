// src/components/skeletons/PropertiesCardsSkeleton.jsx
import React from "react";

const PropertiesCardsSkeleton = () => {
  return (
    <div className="bg-[#faf8f1] py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-md overflow-hidden animate-pulse"
            >
              {/* Image */}
              <div className="h-[200px] w-full bg-gray-300"></div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 w-1/3"></div>
                <div className="h-5 bg-gray-300 w-3/4"></div>
                <div className="h-3 bg-gray-300 w-1/4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination skeleton */}
        <div className="flex justify-center mt-10 space-x-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 w-8 bg-gray-300 rounded animate-pulse"></div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PropertiesCardsSkeleton;