"use client"
import React, { useEffect, useState } from "react";
import {
  getCategoriesByDestination,
  deleteCategory,
} from "../../api/categoryApi";
import { getDestinations } from "../../api/destinationApi";
import CategoryForm from "./CategoryForm";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchDestinations = async () => {
    const res = await getDestinations();
    setDestinations(res.data);
  };

  const fetchCategories = async (destinationId) => {
    if (!destinationId) return;
    try {
      const res = await getCategoriesByDestination(destinationId);
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await deleteCategory(id);
        fetchCategories(selectedDestination);
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowForm(true);
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setShowForm(true);
  };

  const handleSave = () => {
    setShowForm(false);
    fetchCategories(selectedDestination);
  };

  return (
    <div className="hd p-6  min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Category
        </button>
      </div>

      {/* Destination Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Filter by Destination
        </label>
        <select
          value={selectedDestination}
          onChange={(e) => {
            setSelectedDestination(e.target.value);
            fetchCategories(e.target.value);
          }}
          className="border p-2 rounded w-full max-w-md"
        >
          <option value="">Select Destination</option>
          {destinations.map((d) => (
            <option key={d._id} value={d._id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      {showForm ? (
        <CategoryForm
          selectedCategory={selectedCategory}
          onSave={handleSave}
        />
      ) : (
        <div className=" shadow-xl rounded-lg p-4">
          {categories.length === 0 ? (
            <p>No categories found.</p>
          ) : (
            <table className="min-w-full border">
              <thead>
                <tr className=" border-b">
                  <th className="py-2 px-3 text-left">Name</th>
                  <th className="py-2 px-3 text-left">Banner</th>
                  <th className="py-2 px-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c._id} className="border-b ">
                    <td className="py-2 px-3">{c.name}</td>
                    <td className="py-2 px-3">
                      {c.bannerImage ? (
                        <img
                          src={c.bannerImage}
                          alt={c.name}
                          className="w-20 h-14 object-cover rounded"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="py-2 px-3 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(c)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
