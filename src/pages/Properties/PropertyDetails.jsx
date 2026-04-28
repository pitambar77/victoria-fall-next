import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`http://victoria-fall-backend.manoramaseoservice.com/api/properties/${id}`)
      .then(res => setRestaurant(res.data))
      .catch(console.error);
  }, [id]);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <img src={restaurant.bannerImage} alt={restaurant.name} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{restaurant.name}</h2>
      <p className="text-gray-600 mt-2">{restaurant.overview}</p>
      <h3 className="text-lg mt-4 font-semibold">Gallery</h3>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {restaurant.galleryImages.map((img, i) => (
          <img key={i} src={img} className="rounded-lg h-32 object-cover" />
        ))}
      </div>
      <Link to="/dashbord/rooms/all" className="text-blue-600 mt-4 block">← Back to List</Link>
    </div>
  );
};

export default PropertyDetails;


