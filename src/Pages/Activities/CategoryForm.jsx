"use client"
import React, { useState, useEffect } from "react";
import { createCategory, updateCategory } from "../../api/categoryApi";
import { getDestinations } from "../../api/destinationApi";

const CategoryForm = ({ selectedCategory, onSave }) => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    name: selectedCategory?.name || "",
    destinationId: selectedCategory?.destinationId || "",
    bannerImage: null,
  });

  useEffect(() => {
    const fetchDestinations = async () => {
      const res = await getDestinations();
      setDestinations(res.data);
    };
    fetchDestinations();
  }, []);

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
  submitData.append("destination", formData.destinationId); // ✅ must match backend
  if (formData.bannerImage) {
    submitData.append("bannerImage", formData.bannerImage);
  }

  try {
    if (selectedCategory) {
      await updateCategory(selectedCategory._id, submitData);
      alert("Category updated successfully!");
    } else {
      await createCategory(submitData);
      alert("Category created successfully!");
    }
    if (onSave) onSave();
  } catch (error) {
    console.error("Error saving category:", error.response?.data || error.message);
    alert("Failed to save category.");
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="hd p-6 text-[#5c5e62]  max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">
        {selectedCategory ? "Edit Category" : "Create Category"}
      </h2>

      {/* Category Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter category name"
          className="w-full border p-2 rounded"
          required
        />
      </div>

      {/* Destination Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Select Destination
        </label>
        <select
          name="destinationId"
          value={formData.destinationId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Destination</option>
          {destinations.map((d) => (
            <option key={d._id} value={d._id}>
              {d.name}
            </option>
          ))}
        </select>
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
        {selectedCategory?.bannerImage && (
          <img
            src={selectedCategory.bannerImage}
            alt="Preview"
            className="w-32 h-20 mt-2 rounded object-cover"
          />
        )}
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {selectedCategory ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default CategoryForm;
