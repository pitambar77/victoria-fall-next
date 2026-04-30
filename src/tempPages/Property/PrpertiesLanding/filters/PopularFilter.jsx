import { useFilters } from "@/context/FilterContext";

// const options = [
//   "Villa / Entire House",
//   "Town house",
//   "Apartment",
//   "Cottage",
//   "Lodge / Boutique B&B"
// ];

const options = [
  { label: "Villa / Entire House", value: "Villa" },
  { label: "Town house", value: "Townhouse" },
  { label: "Apartment", value: "Apartment" },
  { label: "Cottage", value: "Cottage" },
  { label: "Lodge / Boutique B&B", value: "Lodge" },
];

export default function PopularFilter() {
  const { filters, setFilters } = useFilters();

  const toggle = (val) => {
    const exists = filters.popular.includes(val);

    setFilters({
      ...filters,
      popular: exists
        ? filters.popular.filter((v) => v !== val)
        : [...filters.popular, val],
    });
  };

  return (
    <div>
      <h2 className=" hd text-xl font-semibold mb-6">Popular filters</h2>

      {/* {options.map((item) => (
        <label key={item} className="flex gap-3 mb-3">
          <input
            type="checkbox"
            checked={filters.popular.includes(item)}
            onChange={() => toggle(item)}
          />

          {item}
        </label>
      ))} */}
      {options.map((item)=>(
  <label key={item.value} className="flex gap-3 mb-3">

    <input
      type="checkbox"
      checked={filters.popular.includes(item.value)}
      onChange={()=>toggle(item.value)}
    />

    {item.label}

  </label>
))}
    </div>
  );
}
