"use client";

const MapSkeleton = () => {
  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden bg-gray-200 animate-pulse">
      <div className="absolute inset-0 bg-gray-300" />

      {/* Fake markers */}
      <div className="absolute top-20 left-20 w-12 h-7 rounded-full bg-gray-400" />
      <div className="absolute top-40 right-24 w-12 h-7 rounded-full bg-gray-400" />
      <div className="absolute bottom-40 left-40 w-12 h-7 rounded-full bg-gray-400" />
      <div className="absolute bottom-24 right-32 w-12 h-7 rounded-full bg-gray-400" />
    </div>
  );
};

export default MapSkeleton;