import React from "react";

const RestaurantList = ({ restaurants, onEdit, onDelete }) => (
    
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {restaurants.map(r => (
      <div key={r._id} className="border p-3 rounded">
        <h3 className="font-bold">{r.name}</h3>
        <p>{r.overview}</p>
        <p>{r.subDescription}</p>
        <p>{r.contactNumber}</p>
        <img src={`https://victoria-fall-backend-production.up.railway.app/${r.bannerImage}`} alt="" />
        <div className="flex gap-2 mt-2">
          <button onClick={() => onEdit(r)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
          <button onClick={() => onDelete(r._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
      </div>
    ))}
  </div>
);

export default RestaurantList;

