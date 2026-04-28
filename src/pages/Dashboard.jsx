// import React, { useState, useEffect } from "react";
// import RestaurantForm from "../components/RestaurantForm";
// import RestaurantList from "../components/RestaurantList";
// import { getRestaurants, deleteRestaurant } from "../api/restaurantApi";

// const Dashboard = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   const fetchRestaurants = async () => {
//     const res = await getRestaurants();
//     setRestaurants(res.data);
//   };

//   useEffect(() => { fetchRestaurants(); }, []);

//   const handleDelete = async (id) => {
//     await deleteRestaurant(id);
//     fetchRestaurants();
//   };

//   const handleSave = () => {
//     setSelectedRestaurant(null);
//     fetchRestaurants();
//   };

//   return (
//     <div className="p-4 mt-30">
//       <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
//       <RestaurantForm selectedRestaurant={selectedRestaurant} onSave={handleSave} />
//       <RestaurantList restaurants={restaurants} onEdit={setSelectedRestaurant} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default Dashboard;


// cloudinary implemented 

import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Hi, Welcome back!</h1>
      <div className="bg-[#334155] p-6 rounded-lg mb-6">
        <p className="text-gray-400">Total Revenue</p>
        <h2 className="text-3xl font-bold text-white">$22,567</h2>
        <p className="text-green-400">↑ 8%</p>
      </div>

      <div className="bg-[#334155] p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-600">
              <th>#</th>
              <th>Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Room Type</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "John Deo", status: "Booked" },
              { name: "Jens Brincker", status: "Pending" },
            ].map((b, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td>{i + 1}</td>
                <td>{b.name}</td>
                <td>12-08-2019</td>
                <td>15-08-2019</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      b.status === "Booked"
                        ? "bg-green-700 text-green-100"
                        : "bg-red-700 text-red-100"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td>(123)123456</td>
                <td>Single</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

