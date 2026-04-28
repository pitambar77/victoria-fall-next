// src/components/AllRooms.jsx
import React, { useState } from 'react';
import { FaSearch, FaPlus, FaChevronDown, FaUpload, FaDownload, FaEdit, FaTrashAlt, FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const mockRooms = [
  { roomNumber: '103', roomType: 'Delux', ac: 'AC', meal: 'Free Lunch', capacity: 2, rent: 30 },
  { roomNumber: '101', roomType: 'Super Delux', ac: 'Non AC', meal: 'Free Dinner', capacity: 1, rent: 28 },
  { roomNumber: '105', roomType: 'Double', ac: 'AC', meal: 'Free Dinner', capacity: 2, rent: 32 },
  { roomNumber: '109', roomType: 'Double', ac: 'Non AC', meal: 'Free Lunch', capacity: 3, rent: 26 },
  { roomNumber: '104', roomType: 'Delux', ac: 'AC', meal: 'None', capacity: 2, rent: 27 },
  { roomNumber: '107', roomType: 'Single', ac: 'Non AC', meal: 'None', capacity: 2, rent: 30 },
  { roomNumber: '108', roomType: 'Super Delux', ac: 'Non AC', meal: 'None', capacity: 4, rent: 26 },
  { roomNumber: '110', roomType: 'Double', ac: 'AC', meal: 'None', capacity: 3, rent: 27 },
  { roomNumber: '111', roomType: 'Single', ac: 'AC', meal: 'None', capacity: 4, rent: 32 },
  { roomNumber: '112', roomType: 'Single', ac: 'AC', meal: 'None', capacity: 4, rent: 32 },
];

const AllRooms = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 min-h-[calc(100vh-120px)]">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-100">All Rooms</h2>
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <span>Home</span>
          <span className="text-gray-600">/</span>
          <span>All Rooms</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between mb-4 space-x-4">
        <div className="flex items-center space-x-2 bg-gray-700 rounded-md p-2 w-full max-w-sm">
          <FaSearch className="text-gray-400" />
          <input type="text" placeholder="Search" className="bg-transparent text-gray-100 outline-none w-full" />
        </div>
        <div className="flex items-center space-x-3">
          <Link to={'/dashbord/rooms/add'} className="bg-gray-700 p-2 rounded-md text-gray-400 hover:text-white transition-colors">
            <FaPlus />
          </Link>
          <button className="bg-gray-700 p-2 rounded-md text-gray-400 hover:text-white transition-colors">
            <FaUpload />
          </button>
          <button className="bg-gray-700 p-2 rounded-md text-gray-400 hover:text-white transition-colors">
            <FaDownload />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700 text-gray-400 uppercase text-xs leading-normal">
              <th className="py-3 px-4 text-center w-10"><input type="checkbox" className="form-checkbox bg-gray-600 border-none rounded" /></th>
              <th className="py-3 px-4 text-left">Room Number</th>
              <th className="py-3 px-4 text-left">Room Type</th>
              <th className="py-3 px-4 text-left">AC/Non-AC</th>
              <th className="py-3 px-4 text-left">Meal Included</th>
              <th className="py-3 px-4 text-left">Capacity</th>
              <th className="py-3 px-4 text-left">Rent</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm font-light">
            {mockRooms.map((room, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                <td className="py-3 px-4 text-center"><input type="checkbox" className="form-checkbox bg-gray-600 border-none rounded" /></td>
                <td className="py-3 px-4 whitespace-nowrap">{room.roomNumber}</td>
                <td className="py-3 px-4 whitespace-nowrap">{room.roomType}</td>
                <td className="py-3 px-4 whitespace-nowrap">{room.ac}</td>
                <td className="py-3 px-4 whitespace-nowrap">{room.meal}</td>
                <td className="py-3 px-4 whitespace-nowrap">{room.capacity}</td>
                <td className="py-3 px-4 whitespace-nowrap">${room.rent}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center space-x-3 text-lg">
                   <td className="py-3 px-4 text-center">
  <div className="flex items-center justify-center space-x-3 text-lg">
    {/* Link to the dynamic edit page using the room's ID */}
    <Link to={`/rooms/edit/${room.roomNumber}`}>
      <FaEdit className="text-gray-400 hover:text-blue-400 cursor-pointer" />
    </Link>
    <FaTrashAlt className="text-gray-400 hover:text-red-400 cursor-pointer" />
  </div>
</td>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
        <span>1 - 10 of 16</span>
        <div className="flex items-center space-x-2">
          <FaEllipsisV />
          <span>Items per page: 10</span>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default AllRooms;