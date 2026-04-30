import React from "react";

const RoomsFilter = ({ filters, setFilters, close }) => {

  const change = (field, value) => {
    setFilters({
      ...filters,
      [field]: Math.max(0, filters[field] + value)
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white p-6 rounded-xl w-[450px]">

        <h2 className="text-xl font-semibold mb-6">
          Rooms & spaces
        </h2>

        {/* Bedrooms */}
        <div className="flex justify-between items-center mb-4">
          <p>Minimum bedrooms</p>

          <div className="flex gap-3 items-center">

            <button
              onClick={() => change("bedrooms", -1)}
              className="border rounded-full w-8 h-8"
            >
              -
            </button>

            {filters.bedrooms}

            <button
              onClick={() => change("bedrooms", 1)}
              className="border rounded-full w-8 h-8"
            >
              +
            </button>

          </div>
        </div>

        {/* Beds */}
        <div className="flex justify-between items-center mb-4">
          <p>Minimum beds</p>

          <div className="flex gap-3 items-center">

            <button
              onClick={() => change("beds", -1)}
              className="border rounded-full w-8 h-8"
            >
              -
            </button>

            {filters.beds}

            <button
              onClick={() => change("beds", 1)}
              className="border rounded-full w-8 h-8"
            >
              +
            </button>

          </div>
        </div>

        {/* Bathrooms */}
        <div className="flex justify-between items-center mb-4">
          <p>Minimum bathrooms</p>

          <div className="flex gap-3 items-center">

            <button
              onClick={() => change("bathrooms", -1)}
              className="border rounded-full w-8 h-8"
            >
              -
            </button>

            {filters.bathrooms}

            <button
              onClick={() => change("bathrooms", 1)}
              className="border rounded-full w-8 h-8"
            >
              +
            </button>

          </div>
        </div>

        <button
          onClick={close}
          className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Done
        </button>

      </div>
    </div>
  );
};

export default RoomsFilter;