"use client"
import React, { useState } from "react";
import {
  createDestination,
  updateDestination,
} from "../../api/destinationApi";

const DestinationForm = ({ selectedDestination, onSave }) => {
  const [formData, setFormData] = useState({
    name: selectedDestination?.name || "",
    overview: selectedDestination?.overview || "",
    bannerImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("overview", formData.overview);
    if (formData.bannerImage) {
      submitData.append("bannerImage", formData.bannerImage);
    }

    try {
      if (selectedDestination) {
        await updateDestination(selectedDestination._id, submitData);
        alert("Destination updated successfully!");
      } else {
        await createDestination(submitData);
        alert("Destination created successfully!");
      }
      if (onSave) onSave();
    } catch (error) {
      console.error("Error saving destination:", error);
      alert("Failed to save destination.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6  rounded-xl shadow-md max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">
        {selectedDestination ? "Edit Destination" : "Create Destination"}
      </h2>

      {/* Destination Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Destination Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter destination name"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Overview */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Overview</label>
        <textarea
          name="overview"
          value={formData.overview}
          onChange={handleChange}
          placeholder="Write a short description about this destination..."
          className="w-full border p-2 rounded h-24 resize-none"
          required
        />
      </div>

      {/* Banner Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Banner Image</label>
        <input
          type="file"
          name="bannerImage"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />
        {selectedDestination?.bannerImage && (
          <img
            src={selectedDestination.bannerImage}
            alt="Preview"
            className="w-32 h-20 mt-2 rounded object-cover"
          />
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {selectedDestination ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default DestinationForm;
