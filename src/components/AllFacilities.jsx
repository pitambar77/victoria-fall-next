// src/components/AllFacilities.jsx
import React from 'react';
import { BiPencil, BiTrash, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AllFacilities = () => {
  // Mock data for the table, matching the screenshot
  const facilities = [
    { id: '1101', type: 'Aroma', name: 'Cairo Tate', imageIcon: <i className="fa-solid fa-camera"></i> },
    { id: '1102', type: 'Cleanliness', name: 'Ryan Rodgers', imageIcon: <i className="fa-solid fa-yin-yang"></i> },
    { id: '1103', type: 'Internet', name: 'Wifi', imageIcon: <i className="fa-solid fa-wifi"></i> },
    { id: '1104', type: 'Lighting', name: 'Auto Mation', imageIcon: <i className="fa-solid fa-lightbulb"></i> },
  ];

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 min-h-[calc(100vh-120px)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Facilities Details List</h2>
        <Link to="/facilities/add" className="px-4 py-2 bg-[#f25922] text-white font-medium rounded-md hover:bg-[#aca188] duration-300 ">
          Add Facilities
        </Link>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Show</span>
          <select className="bg-gray-700 rounded-md text-gray-100 p-1 text-sm">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span className="text-sm text-gray-400">entries</span>
        </div>
        <div className="flex items-center space-x-2">
          <BiSearch className="text-gray-400 text-lg" />
          <input type="text" placeholder="Search:" className="bg-gray-700 rounded-md p-1 text-sm text-gray-100 placeholder-gray-500" />
        </div>
      </div>

      {/* Facilities Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Facilities ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Facilities Type
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Facilities Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Facilities Image
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-700 text-center text-xs font-semibold text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                <td className="px-5 py-3 text-sm text-gray-300">{facility.id}</td>
                <td className="px-5 py-3 text-sm text-gray-300">{facility.type}</td>
                <td className="px-5 py-3 text-sm text-gray-300">{facility.name}</td>
                <td className="px-5 py-3  text-gray-300 text-center text-3xl">{facility.imageIcon}</td>
                <td className="px-5 py-3 text-sm text-center">
                  <div className="flex justify-center space-x-3 text-lg">
                    <BiPencil className="text-gray-400 hover:text-blue-400 cursor-pointer" />
                    <BiTrash className="text-gray-400 hover:text-red-400 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-400">Showing 1 to {facilities.length} of {facilities.length} entries</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm hover:bg-gray-600">Previous</button>
          <button className="px-3 py-1 bg-[#f25922] text-white rounded-md text-sm">1</button>
          <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm hover:bg-gray-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AllFacilities;