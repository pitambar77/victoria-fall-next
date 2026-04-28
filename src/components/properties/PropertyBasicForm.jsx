import React from "react";
import MapPicker from "../../pages/Property/PrpertiesLanding/MapPicker";

export default function PropertyBasicForm({
  property,
  setProperty,
  errors,
  clearError,
}) {
  /* Ensure one feature exists */
  const features = property.features?.length > 0 ? property.features : [""];

  /* =========================
     BASIC FIELD CHANGE
  ========================= */

  const handleChange = (field, value) => {
    setProperty({
      ...property,
      [field]: value,
    });
    clearError(field);
  };

  /* =========================
     LOCATION CHANGE
  ========================= */

  const handleLocation = (field, value) => {
    setProperty({
      ...property,
      location: {
        ...property.location,
        [field]: value,
      },
    });
    clearError(field);
  };

  /* =========================
     FEATURES
  ========================= */

  const addFeature = () => {
    setProperty({
      ...property,
      features: [...features, ""],
    });
  };

  const changeFeature = (index, value) => {
    const updated = [...features];
    updated[index] = value;

    setProperty({
      ...property,
      features: updated,
    });
  };

  const removeFeature = (index) => {
    const updated = features.filter((_, i) => i !== index);

    setProperty({
      ...property,
      features: updated,
    });
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">Property Details</h2>

      {/* PRICE */}
      <input
        name="price"
        type="number"
        className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.price
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
        placeholder="Price"
        value={property.price}
        onChange={(e) => handleChange("price", e.target.value)}
      />

      {errors?.price && <p className="text-red-500 text-sm">{errors.price}</p>}

      {/* CATEGORY */}
      <select
        name="category"
        className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.category
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
        value={property.category}
        onChange={(e) => handleChange("category", e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Villa">Villa / Entire House</option>
        <option value="Apartment">Apartment</option>
        <option value="Lodge">Lodge / Boutique B&B</option>
        <option value="Cottage">Cottage</option>
        <option value="Townhouse">Town house</option>
      </select>

      {errors?.category && (
        <p className="text-red-500 text-sm">{errors.category}</p>
      )}

      {/* RATING */}
      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        placeholder="Property Rating (e.g., 4.5)"
        value={property.rating}
        onChange={(e) => handleChange("rating", e.target.value)}
      />

      {/* REVIEWS */}
      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        placeholder="Total Reviews (e.g., 120 reviews)"
        value={property.reviews}
        onChange={(e) => handleChange("reviews", e.target.value)}
      />

      {/* SLEEPS */}
      <input
      name="sleeps"
        className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.sleeps
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
        placeholder="Sleeps / Sleeping Capacity"
        value={property.sleeps}
        onChange={(e) => handleChange("sleeps", e.target.value)}
      />

      {errors?.sleeps && (
        <p className="text-red-500 text-sm">{errors.sleeps}</p>
      )}

      {/* GUEST */}
      <input
        name="guest"
               className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.guest
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
        placeholder="Maximum Guests Allowed"
        value={property.guest}
        onChange={(e) => handleChange("guest", e.target.value)}
      />
      {errors?.guest && <p className="text-red-500 text-sm">{errors.guest}</p>}
      {/* DISTANCE */}
      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        placeholder="Distance from City Center (e.g., 5 km)"
        value={property.distance}
        onChange={(e) => handleChange("distance", e.target.value)}
      />

      {/* FEATURES */}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Features</h3>

        {features.map((feature, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-3"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Feature"
              value={feature}
              onChange={(e) => changeFeature(i, e.target.value)}
            />

            {features.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeFeature(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Feature
                </button>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addFeature}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add Feature
        </button>
      </div>

      {/* LOCATION */}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Location Coordinates</h3>
        <p className="text-sm text-gray-500">
          **( Select the property location from the map. Latitude and longitude
          will be filled automatically.)
        </p>
        <input
          className="w-full border border-gray-300 rounded-md p-3 outline-none
          focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
          placeholder="Latitude"
          value={property.location?.lat || ""}
          onChange={(e) => handleLocation("lat", Number(e.target.value))}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3 outline-none
          focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
          placeholder="Longitude"
          value={property.location?.lng || ""}
          onChange={(e) => handleLocation("lng", Number(e.target.value))}
        />
      </div>

      {/* ADDRESS */}

      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        placeholder="Enter Property Address"
        value={property.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />

      {/* CITY */}

      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        placeholder="Enter City or Town"
        value={property.city}
        onChange={(e) => handleChange("city", e.target.value)}
      />

      {/* COUNTRY */}

      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        placeholder="Select Country"
        value={property.country}
        onChange={(e) => handleChange("country", e.target.value)}
      />

      {/* MAP PICKER */}

      <MapPicker property={property} setProperty={setProperty} />
    </div>
  );
}
