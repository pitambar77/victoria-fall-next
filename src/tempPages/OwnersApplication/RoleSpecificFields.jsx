// src/components/RoleSpecificFields.jsx
import React from "react";

const RoleSpecificFields = ({ roleType, formData, handleChange }) => {
  if (roleType === "Property Owner") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block font-medium">Property Type</label>
          <input
            type="text"
            name="propertyType"
            value={formData.propertyType || ""}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block font-medium">Number of Rooms</label>
          <input
            type="number"
            name="numRooms"
            value={formData.numRooms || ""}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
      </div>
    );
  }

  if (roleType === "Restaurant Owner") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block font-medium">Cuisine Type</label>
          <input
            type="text"
            name="cuisineType"
            value={formData.cuisineType || ""}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block font-medium">Seating Capacity</label>
          <input
            type="number"
            name="seatingCapacity"
            value={formData.seatingCapacity || ""}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
      </div>
    );
  }

  if (roleType === "Activity Provider") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <div>
          <label className="block font-medium">Activity Type</label>
          <input
            type="text"
            name="activityType"
            value={formData.activityType || ""}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block font-medium">Duration (in hrs)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration || ""}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
        <div>
          <label className="block font-medium">Price per Person</label>
          <input
            type="number"
            name="pricePerPerson"
            value={formData.pricePerPerson || ""}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
      </div>
    );
  }

  return null; // Default (no extra fields)
};

export default RoleSpecificFields;
