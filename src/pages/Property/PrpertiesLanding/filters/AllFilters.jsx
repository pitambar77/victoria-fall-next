import PriceFilter from "./PriceFilter";
import RoomsFilter from "./RoomsFilter";
import PopularFilter from "./PopularFilter";
import SortFilter from "./SortFilter";
import { useFilters } from "@/context/FilterContext";

export default function AllFilters({ close }) {
  const { clearAllFilters, appliedCount } = useFilters();

  return (
    <div className="w-full max-h-[55vh] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 pb-3">
        <h2 className=" hd text-xl font-semibold">Filters </h2>
      
        <button
          onClick={clearAllFilters}
          className="text-[#b18642] rounded-2xl hover:bg-[#dad9d4]  py-1 px-2 cursor-pointer"
        >
          Clear
        </button>
      </div>

      {/* Scroll Area */}
      <div className="hd overflow-y-auto pr-8">
        {/* Popular */}
        <div className="border-b border-gray-300 pb-6 mb-6 px-2">
          <PopularFilter />
        </div>

        {/* Price */}
        <div className="border-b border-gray-300 pb-6 mb-6 px-2">
          <PriceFilter />
        </div>

        {/* Rooms */}
        <div className="border-b border-gray-300 pb-6 mb-6">
          <RoomsFilter />
        </div>

        {/* Sort */}
        <div className="pb-6">
          <SortFilter />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}
