// src/components/BookingDetailsTable.jsx
import React from 'react';
import { FaEdit, FaTrashAlt, FaFileAlt } from 'react-icons/fa';

const mockBookingDetails = [
  { id: 1, name: 'John Deo', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', checkIn: '12-08-2019', checkOut: '15-08-2019', status: 'Booked', phone: '(123)123456', roomType: 'Single' },
  { id: 2, name: 'Jens Brincker', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', checkIn: '13-08-2019', checkOut: '16-08-2019', status: 'Pending', phone: '(123)123456', roomType: 'Double' },
  { id: 3, name: 'Mark Hay', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', checkIn: '15-08-2019', checkOut: '18-08-2019', status: 'Booked', phone: '(123)123456', roomType: 'Single' },
  { id: 4, name: 'Anthony Davie', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', checkIn: '16-08-2019', checkOut: '19-08-2019', status: 'Pending', phone: '(123)123456', roomType: 'King' },
  { id: 5, name: 'Alan Gilchrist', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', checkIn: '21-08-2019', checkOut: '23-08-2019', status: 'Booked', phone: '(123)123456', roomType: 'Appartment' },
  { id: 6, name: 'Sue Woodger', avatar: 'https://randomuser.me/api/portraits/women/6.jpg', checkIn: '25-08-2019', checkOut: '26-08-2019', status: 'Pending', phone: '(123)123456', roomType: 'Single' },
  { id: 7, name: 'David Perry', avatar: 'https://randomuser.me/api/portraits/men/7.jpg', checkIn: '26-08-2019', checkOut: '29-08-2019', status: 'Pending', phone: '(123)123456', roomType: 'Single' },
  { id: 8, name: 'Sneha Pandit', avatar: 'https://randomuser.me/api/portraits/women/8.jpg', checkIn: '27-08-2019', checkOut: '29-08-2019', status: 'Booked', phone: '(123)123456', roomType: 'Double' },
];

const BookingDetailsTable = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-100">Booking Details</h2>
        <span className="text-gray-500 cursor-pointer text-xl">⋮</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-700 text-gray-400 uppercase text-xs leading-normal">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Check In</th>
              <th className="py-3 px-4 text-left">Check Out</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Room Type</th>
              <th className="py-3 px-4 text-center">Documents</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm font-light">
            {mockBookingDetails.map((booking, index) => (
              <tr key={booking.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                <td className="py-3 px-4 whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-4 flex items-center whitespace-nowrap">
                  <img src={booking.avatar} alt={booking.name} className="w-8 h-8 rounded-full mr-3" />
                  <span>{booking.name}</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{booking.checkIn}</td>
                <td className="py-3 px-4 whitespace-nowrap">{booking.checkOut}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full
                    ${booking.status === 'Booked' ? 'bg-green-600/20 text-green-400' :
                       booking.status === 'Pending' ? 'bg-red-600/20 text-red-400' :
                       'bg-yellow-600/20 text-yellow-400'}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">{booking.phone}</td>
                <td className="py-3 px-4 whitespace-nowrap">{booking.roomType}</td>
                <td className="py-3 px-4 text-center">
                  <FaFileAlt className="text-blue-400 hover:text-blue-300 cursor-pointer mx-auto" />
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <FaEdit className="text-gray-400 hover:text-blue-400 cursor-pointer" />
                    <FaTrashAlt className="text-gray-400 hover:text-red-400 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetailsTable;