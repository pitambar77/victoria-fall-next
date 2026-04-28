import PriceFilter from "./PriceFilter";
import RoomsFilter from "./RoomsFilter";
import PopularFilter from "./PopularFilter";
import SortFilter from "./SortFilter";
import AllFilters from "./AllFilters";

export default function FiltersPanel({ type, close }) {
  return (
    <div className="absolute top-full mt-3 left-0 z-30">
      <div className="bg-white w-[420px] rounded-xl shadow-xl p-6 border border-gray-200">
        {type === "filters" && <AllFilters close={close} />}
        {type === "price" && <PriceFilter />}
        {type === "rooms" && <RoomsFilter />}
        {type === "popular" && <PopularFilter />}
        {type === "sort" && <SortFilter close={close} />}

        <button
          onClick={close}
          className="mt-6 bg-[#aca288] hover:bg-[#b18642] cursor-pointer text-white px-6 py-2 rounded-lg"
        >
          Done
        </button>
      </div>
    </div>
  );
}
