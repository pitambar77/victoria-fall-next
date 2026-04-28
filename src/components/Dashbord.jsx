import React from "react";
import { FaArrowUp, FaFileAlt, FaEdit, FaTrash } from "react-icons/fa";

const Dashbord = () => {
  const bookings = [
    {
      id: 1,
      name: "John Deo",
      checkIn: "12-08-2019",
      checkOut: "15-08-2019",
      status: "Booked",
      phone: "(123)123456",
      roomType: "Single",
    },
    {
      id: 2,
      name: "Jens Brincker",
      checkIn: "13-08-2019",
      checkOut: "16-08-2019",
      status: "Pending",
      phone: "(123)123456",
      roomType: "Double",
    },
    {
      id: 3,
      name: "Mark Hay",
      checkIn: "15-08-2019",
      checkOut: "18-08-2019",
      status: "Booked",
      phone: "(123)123456",
      roomType: "Single",
    },
    {
      id: 4,
      name: "Anthony Davie",
      checkIn: "16-08-2019",
      checkOut: "19-08-2019",
      status: "Pending",
      phone: "(123)123456",
      roomType: "King",
    },
    {
      id: 5,
      name: "Alan Gilchrist",
      checkIn: "21-08-2019",
      checkOut: "23-08-2019",
      status: "Booked",
      phone: "(123)123456",
      roomType: "Apartment",
    },
     
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#5c5e62] hd ">Hi, Welcome back!</h1>
        <p className=" hd text-[#5c5e62]">Property Dashboard</p>
      </div>

      {/* Total Revenue Card */}
      <div className="bg-[#334155] p-6 rounded-lg flex items-center justify-between mb-8">
        <div>
          <p className="text-gray-400">Total Revenue</p>
          <h2 className="text-3xl font-bold text-white">$22,567</h2>
        </div>
        <div className="flex items-center text-green-400 font-medium">
          <FaArrowUp className="mr-1" /> 8%
        </div>
      </div>

      {/* Booking Details Table */}
      <div className="bg-[#334155] p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-white">Booking Details</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="uppercase text-gray-400 border-b border-gray-600">
              <tr>
                <th className="py-3 px-2">#</th>
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Check In</th>
                <th className="py-3 px-2">Check Out</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Phone</th>
                <th className="py-3 px-2">Room Type</th>
                <th className="py-3 px-2 text-center">Documents</th>
                <th className="py-3 px-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-gray-700 hover:bg-[#475569] transition"
                >
                  <td className="py-3 px-2">{b.id}</td>
                  <td className="py-3 px-2 flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/40?img=${b.id + 10}`}
                      alt={b.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{b.name}</span>
                  </td>
                  <td className="py-3 px-2">{b.checkIn}</td>
                  <td className="py-3 px-2">{b.checkOut}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        b.status === "Booked"
                          ? "bg-green-700 text-green-100"
                          : "bg-red-700 text-red-100"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="py-3 px-2">{b.phone}</td>
                  <td className="py-3 px-2">{b.roomType}</td>
                  <td className="py-3 px-2 text-center">
                    <FaFileAlt className="text-blue-400 mx-auto" />
                  </td>
                  <td className="py-3 px-2 text-center flex items-center justify-center gap-3">
                    <FaEdit className="text-yellow-400 cursor-pointer hover:scale-110 transition" />
                    <FaTrash className="text-red-400 cursor-pointer hover:scale-110 transition" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;

