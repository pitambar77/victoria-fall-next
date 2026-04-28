import React, { useState, useEffect } from "react";
import RestaurantForm from "../components/RestaurantForm";
import RestaurantList from "../components/RestaurantList";
import { getRestaurants, deleteRestaurant } from "../api/restaurantApi";

const AdminPanel = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const fetchRestaurants = async () => {
    const res = await getRestaurants();
    setRestaurants(res.data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    await deleteRestaurant(id);
    fetchRestaurants();
  };

  const handleSave = () => {
    setSelectedRestaurant(null);
    fetchRestaurants();
  };

  return (
    <div className="p-6">
      <RestaurantForm selectedRestaurant={selectedRestaurant} onSave={handleSave} />
      <RestaurantList
        restaurants={restaurants}
        onEdit={setSelectedRestaurant}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminPanel;
