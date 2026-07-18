"use client";

const FiltersBarSkeleton = () => {
  return (
    <div className="flex gap-3 mb-4 animate-pulse">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-10 w-28 rounded-lg bg-gray-300"
        />
      ))}
    </div>
  );
};

export default FiltersBarSkeleton;