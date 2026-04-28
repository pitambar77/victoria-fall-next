// src/components/MainContent.jsx
import React from 'react';
import StatCard from './StatCard';
import BookingDetailsTable from './BookingDetailsTable';
// import HotelSurveyChart from './HotelSurveyChart'; // Skipped for now
// import RoomBookingChart from './RoomBookingChart'; // Skipped for now

const MainContent = () => {
  return (
    <div className="space-y-6">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-1 gap-6">
        <StatCard
          icon={<div className="bg-purple-600 p-2 rounded-lg text-white text-xl"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></div>}
          title="Total Booking"
          value="1,245"
          color="text-purple-400"
          trend="+12%" // Example trend
        />
        <StatCard
          icon={<div className="bg-orange-500 p-2 rounded-lg text-white text-xl"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg></div>}
          title="Rooms Available"
          value="287"
          color="text-orange-400"
          trend="-5%" // Example trend
        />
        <StatCard
          icon={<div className="bg-green-600 p-2 rounded-lg text-white text-xl"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.072 0 00-.736-2.736L15 13l-1-1-1 1 1 1-1 1-1 1 1 1 1 1z"></path></svg></div>}
          title="New Customers"
          value="1,532"
          color="text-green-400"
          trend="+20%" // Example trend
        />
        <StatCard
          icon={<div className="bg-blue-600 p-2 rounded-lg text-white text-xl"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2H4zM4 12a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H4zM12 4a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V4zM12 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></div>}
          title="Total Revenue"
          value="$22,567"
          color="text-blue-400"
          trend="+8%" // Example trend
        />
      </div>

      {/* Graphs/Charts Section (Skipped for detailed implementation) */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> */}
        {/* Hotel Survey Card (Placeholder) */}
        {/* <div className="bg-gray-800 rounded-lg shadow-lg p-6 min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-100">Hotel Survey</h3>
            <span className="text-gray-500 cursor-pointer text-xl">⋮</span>
          </div>
          <div className="text-gray-400 text-sm">Graph content would go here.</div>
          <div className="text-gray-500 text-xs mt-4">New Customers vs Old Customers</div>
        </div> */}

        {/* Room Booking Chart (Placeholder) */}
        {/* <div className="bg-gray-800 rounded-lg shadow-lg p-6 min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-100">Room Booking Chart</h3>
            <span className="text-gray-500 cursor-pointer text-xl">⋮</span>
          </div>
          <div className="text-gray-400 text-sm">Pie chart content would go here.</div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span> Single <span className="ml-auto">734</span></div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> Double <span className="ml-auto">567</span></div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span> King <span className="ml-auto">464</span></div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Booking Details Table */}
      <BookingDetailsTable />
    </div>
  );
};

export default MainContent;