"use client";

import FiltersBarSkeleton from "./FiltersBarSkeleton";
import PropertyCardSkeleton from "./PropertyCardSkeleton";
import MapSkeleton from "./MapSkeleton";

const ListingsPageSkeleton = () => {
  return (
    <div className="h-screen max-w-[1140px] mx-auto mt-2 pb-20 px-4 sm:px-6 lg:px-0 flex flex-col">
      <FiltersBarSkeleton />

      <div className="grid grid-cols-12 h-full py-4 gap-4">
        {/* Left */}
        <div className="col-span-7 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <PropertyCardSkeleton key={i} />
          ))}
        </div>

        {/* Right */}
        <div className="col-span-5">
          <MapSkeleton />
        </div>
      </div>
    </div>
  );
};

export default ListingsPageSkeleton;