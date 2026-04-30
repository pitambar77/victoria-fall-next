import { useFilters } from "@/context/FilterContext";

export default function RoomsFilter() {
  const { filters, setFilters } = useFilters();

  const change = (key, val) => {
    setFilters({
      ...filters,
      [key]: Math.max(0, filters[key] + val),
    });
  };

  const clearRooms = () => {
  setFilters({
    ...filters,
    bedrooms: 0,
    // beds: 0,
    bathrooms: 0,
    guest:0,
  });
};

  return (
    <div>
      <div className=" flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-6">Rooms & spaces</h2>
        <button
          onClick={clearRooms}
          className="text-[#b18642] rounded-2xl hover:bg-[#dad9d4]  py-1 px-2 cursor-pointer"
        >
          Clear
        </button>
      </div>

      {["bedrooms", "bathrooms","guest"].map((item) => (
        <div key={item} className="flex justify-between items-center mb-4">
          <p>Minimum {item}</p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => change(item, -1)}
              className="border rounded-full cursor-pointer hover:bg-[#eeece5] w-8 h-8"
            >
              -
            </button>

            {filters[item]}

            <button
              onClick={() => change(item, 1)}
              className="border rounded-full cursor-pointer hover:bg-[#eeece5] w-8 h-8"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
