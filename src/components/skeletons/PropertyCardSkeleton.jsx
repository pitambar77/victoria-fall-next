"use client";

import React from "react";

const PropertyCardSkeleton = () => {
  return (
    <div className="flex gap-4 border border-gray-200 rounded-xl mb-4 bg-white shadow-sm overflow-hidden animate-pulse">
      {/* Image */}
      <div className="w-[260px] h-[180px] bg-gray-300" />

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="h-3 w-24 bg-gray-300 rounded mb-3" />

          <div className="h-6 w-3/4 bg-gray-300 rounded mb-3" />

          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-7 bg-gray-300 rounded" />
            <div className="w-24 h-4 bg-gray-200 rounded" />
            <div className="w-16 h-4 bg-gray-200 rounded" />
          </div>

          <div className="space-y-2">
            <div className="w-20 h-5 bg-gray-300 rounded" />
            <div className="w-24 h-4 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;