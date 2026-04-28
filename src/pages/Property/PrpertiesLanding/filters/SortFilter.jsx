import { useFilters } from "@/context/FilterContext";

const options = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: low to high", value: "priceLow" },
  { label: "Price: high to low", value: "priceHigh" },
  { label: "Guest rating", value: "rating" },
  { label: "Number of reviews", value: "reviews" },
];

export default function SortFilter({ close }) {
  const { filters, setFilters } = useFilters();

  const changeSort = (val) => {
    setFilters({
      ...filters,
      sort: val,
    });
  };

  const clearSort = () => {
    const newFilters = { ...filters };
    delete newFilters.sort;

    setFilters(newFilters);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Sort by</h2>

        <button onClick={clearSort} className="text-[#b18642] rounded-2xl hover:bg-[#dad9d4]  py-1 px-2 cursor-pointer">
          Clear
        </button>
      </div>

      {options.map((item) => (
        <label
          key={item.value}
          className="flex items-center gap-3 mb-4 cursor-pointer"
        >
          <input
            type="radio"
            name="sort"
            checked={filters.sort === item.value}
            onChange={() => changeSort(item.value)}
          />

          {item.label}
        </label>
      ))}
    </div>
  );
}
