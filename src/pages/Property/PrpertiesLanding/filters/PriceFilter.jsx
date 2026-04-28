import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useFilters } from "@/context/FilterContext";

export default function PriceFilter() {
  const { filters, setFilters } = useFilters();

  const clearPrice = () => {
    setFilters({
      ...filters,
      minPrice: 0,
      maxPrice: 1000,
    });
  };

  return (
    <div>
      <div className=" hd flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Price range</h2>

        <button onClick={clearPrice} className="text-[#b18642] rounded-2xl hover:bg-[#dad9d4]  py-1 px-2 cursor-pointer">
          Clear
        </button>
      </div>

      <Slider
        range
        min={0}
        max={1000}
        value={[filters.minPrice, filters.maxPrice]}
        onChange={(val) =>
          setFilters({
            ...filters,
            minPrice: val[0],
            maxPrice: val[1],
          })
        }
      />

      <div className="flex justify-between mt-4">
        <div className="border p-2 rounded">${filters.minPrice}</div>

        <div className="border p-2 rounded">${filters.maxPrice}</div>
      </div>
    </div>
  );
}
