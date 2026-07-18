"use client";

import React from "react";

const TabSectionSkeleton = () => {
  return (
    <div className="bg-amber-50/60 py-10 md:py-20 animate-pulse">
      <div className="max-w-[1140px] mx-auto px-4 md:px-0">
        {/* Heading */}
        <div className="h-10 w-64 bg-gray-300 rounded mx-auto mb-8" />

        {/* Description */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
          <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto" />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 rounded-full bg-gray-300"
            />
          ))}
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="h-[200px] bg-gray-300" />

              {/* Content */}
              <div className="p-4 text-center">
                <div className="h-6 w-3/4 mx-auto bg-gray-300 rounded mb-3" />

                <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded mb-5" />

                <div className="h-10 w-36 mx-auto bg-gray-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSectionSkeleton;