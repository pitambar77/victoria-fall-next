import { useState } from "react";
import { useFilters } from "@/context/FilterContext";
import FiltersPanel from "./filters/FiltersPanel";
import { RiArrowDropDownLine } from "react-icons/ri";



export default function FiltersBar({properties}) {
  const [activePanel, setActivePanel] = useState(null);
  const { filters } = useFilters();
  const {appliedCount} = useFilters();

  const count = filters.bedrooms + filters.bathrooms;

  const btnStyle =
    "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition";

  const activeBtn = "bg-[#e5edf7] border-[#7b9acc] text-[#b18642]";

  return (
    <div className="hd flex gap-3 p-4 border-b border-gray-200 sticky top-0 bg-white z-20">
      {/* Filters */}
      <div className="relative">
        <button
          onClick={() =>
            setActivePanel(activePanel === "filters" ? null : "filters")
          }
          className={`${btnStyle} cursor-pointer ${
            activePanel === "filters" ? activeBtn : ""
          }`}
        >
          {/* Filters {count > 0 && `(${count})`} */}
          Filters {appliedCount > 0 && `(${appliedCount})`}
          <RiArrowDropDownLine size={22} />
        </button>

        {activePanel === "filters" && (
          <FiltersPanel type="filters" close={() => setActivePanel(null)} />
        )}
      </div>

      {/* Popular */}
      <div className="relative">
        <button
          onClick={() =>
            setActivePanel(activePanel === "popular" ? null : "popular")
          }
          className={`${btnStyle} cursor-pointer ${
            activePanel === "popular" ? activeBtn : ""
          }`}
        >
          Popular
          <RiArrowDropDownLine size={22} />
        </button>

        {activePanel === "popular" && (
          <FiltersPanel type="popular" close={() => setActivePanel(null)} />
        )}
      </div>

      {/* Price */}
      <div className="relative">
        <button
          onClick={() =>
            setActivePanel(activePanel === "price" ? null : "price")
          }
          className={`${btnStyle} cursor-pointer ${
            activePanel === "price" ? activeBtn : ""
          }`}
        >
          Price
          <RiArrowDropDownLine size={22} />
        </button>

        {activePanel === "price" && (
          <FiltersPanel type="price" close={() => setActivePanel(null)} />
        )}
      </div>

      {/* Rooms */}
      <div className="relative">
        <button
          onClick={() =>
            setActivePanel(activePanel === "rooms" ? null : "rooms")
          }
          className={`${btnStyle} cursor-pointer ${
            activePanel === "rooms" ? activeBtn : ""
          }`}
        >
          Rooms & spaces {count > 0 && `(${count})`}
          <RiArrowDropDownLine size={22} />
        </button>

        {activePanel === "rooms" && (
          <FiltersPanel type="rooms" close={() => setActivePanel(null)} />
        )}
      </div>

      {/* Sort */}
      <div className="relative">
        <button
          onClick={() => setActivePanel(activePanel === "sort" ? null : "sort")}
          className={`${btnStyle} cursor-pointer ${
            activePanel === "sort" ? activeBtn : ""
          }`}
        >
          Sort by recommended
          <RiArrowDropDownLine size={22} />
        </button>

        {activePanel === "sort" && (
          <FiltersPanel type="sort" close={() => setActivePanel(null)} />
        )}
      </div>
    </div>
  );
}
