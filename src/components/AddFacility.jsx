// src/components/AddFacility.jsx
import React from 'react';

const AddFacility = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-100 mb-6">Add Facility</h2>
      <div className="text-gray-400">
        This is the form to add a new facility. You can add fields for facility name, type, and image here.
      </div>
    </div>
  );
};

export default AddFacility;