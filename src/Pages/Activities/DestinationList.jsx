"use client"
import React, { useEffect, useState } from "react";
import {
  getDestinations,
  deleteDestination,
} from "../../api/destinationApi";
import DestinationForm from "./DestinationForm";
import Link from "next/link";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // ✅ Fetch all destinations
  const fetchDestinations = async () => {
    try {
      const res = await getDestinations();
      setDestinations(res.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  // ✅ Handle edit
  const handleEdit = (destination) => {
    setSelectedDestination(destination);
    setShowForm(true);
  };

  // ✅ Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this destination?"))
      return;

    try {
      await deleteDestination(id);
      alert("Destination deleted successfully!");
      fetchDestinations();
    } catch (error) {
      console.error("Error deleting destination:", error);
      alert("Failed to delete destination.");
    }
  };

  // ✅ Handle form close/save
  const handleSave = () => {
    setShowForm(false);
    setSelectedDestination(null);
    fetchDestinations();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Destinations</h1>

         <Link  
         href={`/dashboard/destinations/create`}
         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Destination
         </Link>

     
      </div>

      {/* Destination Form Modal */}
      {showForm && (
        <div className="fixed inset-0  flex justify-center items-center z-50">
          <div className=" rounded-xl shadow-lg w-full bg-black bg-opacity-40 text-white max-w-4xl relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <DestinationForm
              selectedDestination={selectedDestination}
              onSave={handleSave}
            />
          </div>
        </div>
      )}

      {/* Destination Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-100/80  overflow-hidden">
          <thead className="hd bg-gray-100/80 text-[#3a3a3b] ">
            <tr>
              <th className="p-3 text-left">Banner</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No destinations found.
                </td>
              </tr>
            ) : (
              destinations.map((dest) => (
                <tr key={dest._id} className="border-t">
                  <td className="p-3">
                    {dest.bannerImage ? (
                      <img
                        src={dest.bannerImage}
                        alt={dest.name}
                        className="w-20 h-14 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400 italic">No image</span>
                    )}
                  </td>
                  <td className="p-3 font-medium">{dest.name}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(dest)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(dest._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DestinationList;
