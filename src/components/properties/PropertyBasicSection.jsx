

import { useState } from "react";

import {
  updatePropertyBasic,
  updateLocation,
  updateAddress,
  addFeature,
  updateFeature,
  deleteFeature,
} from "../../api/propertiesApi";

import MapPicker from "../../pages/Property/PrpertiesLanding/MapPicker";

export default function PropertyBasicSection({ property, setProperty }) {
  const [form, setForm] = useState({
    price: property.price || "",
    category: property.category || "",
    rating: property.rating || "",
    reviews: property.reviews || "",
    sleeps: property.sleeps || "",
    guest: property.guest || "",
    distance: property.distance || "",
  });

  const [newFeature, setNewFeature] = useState("");

  /* ======================
     BASIC FIELD CHANGE
  ====================== */

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  /* ======================
     SAVE BASIC INFO
  ====================== */

  const saveBasic = async () => {
    const res = await updatePropertyBasic(property._id, form);

    setProperty(res.data);

    alert("Property basic info updated");
  };

  /* ======================
     LOCATION
  ====================== */

  const saveLocation = async () => {
    const res = await updateLocation(property._id, property.location);

    setProperty(res.data);
  };

  /* ======================
     ADDRESS
  ====================== */

  const saveAddress = async () => {
    const res = await updateAddress(property._id, {
      address: property.address,
      city: property.city,
      country: property.country,
    });

    setProperty(res.data);
  };

  /* ======================
     FEATURES
  ====================== */

  const addNewFeature = async () => {
    if (!newFeature) return;

    const res = await addFeature(property._id, { feature: newFeature });

    setProperty(res.data);

    setNewFeature("");
  };

  const updateFeatureItem = async (oldFeature, newFeature) => {
    const res = await updateFeature(property._id, {
      oldFeature,
      newFeature,
    });

    setProperty(res.data);
  };

  const removeFeature = async (feature) => {
    const res = await deleteFeature(property._id, { feature });

    setProperty(res.data);
  };

  return (
    <div className="space-y-10">
      {/* BASIC DETAILS */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Property Details</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Price"
          value={form.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />

        <select
          className="w-full border border-gray-300 rounded-md p-3"
          value={form.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Villa">Villa / Entire House</option>
          <option value="Apartment">Apartment</option>
          <option value="Lodge">Lodge / Boutique B&B</option>
          <option value="Cottage">Cottage</option>
          <option value="Townhouse">Town house</option>
        </select>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) => handleChange("rating", e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Reviews"
          value={form.reviews}
          onChange={(e) => handleChange("reviews", e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Sleeps"
          value={form.sleeps}
          onChange={(e) => handleChange("sleeps", e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Guest"
          value={form.guest}
          onChange={(e) => handleChange("guest", e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Distance from City"
          value={form.distance}
          onChange={(e) => handleChange("distance", e.target.value)}
        />

        <button
          onClick={saveBasic}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Save Basic Info
        </button>
      </div>

      {/* FEATURES */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Features</h2>

        {property.features?.map((feature, i) => (
          <div key={i} className="flex gap-3">
            <input
              className="flex-1 border border-gray-300 rounded-md p-3"
              value={feature}
              onChange={(e) => updateFeatureItem(feature, e.target.value)}
            />

            <button
              onClick={() => removeFeature(feature)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}

        <div className="flex gap-3">
          <input
            className="flex-1 border border-gray-300 rounded-md p-3"
            placeholder="New Feature"
            value={newFeature}
            onChange={(e) => setNewFeature(e.target.value)}
          />

          <button
            onClick={addNewFeature}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Add Feature
          </button>
        </div>
      </div>

      {/* LOCATION */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Location</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Latitude"
          value={property.location?.lat || ""}
          onChange={(e) =>
            setProperty({
              ...property,
              location: {
                ...property.location,
                lat: Number(e.target.value),
              },
            })
          }
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Longitude"
          value={property.location?.lng || ""}
          onChange={(e) =>
            setProperty({
              ...property,
              location: {
                ...property.location,
                lng: Number(e.target.value),
              },
            })
          }
        />

        <button
          onClick={saveLocation}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Save Location
        </button>

        <MapPicker property={property} setProperty={setProperty} />
      </div>

      {/* ADDRESS */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Address</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Address"
          value={property.address}
          onChange={(e) =>
            setProperty({
              ...property,
              address: e.target.value,
            })
          }
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="City"
          value={property.city}
          onChange={(e) =>
            setProperty({
              ...property,
              city: e.target.value,
            })
          }
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Country"
          value={property.country}
          onChange={(e) =>
            setProperty({
              ...property,
              country: e.target.value,
            })
          }
        />

        <button
          onClick={saveAddress}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
