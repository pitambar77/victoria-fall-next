import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("https://victoria-fall-backend-production.up.railway.app/api/properties");
        setProperties(res.data.items);
      } catch (err) {
        console.error(err);
        alert("Error fetching properties");
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading properties...</p>;
  if (properties.length === 0) return <p className="text-center mt-10">No properties found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div
          key={property._id}
          className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer transition"
          onClick={() => navigate(`/properties/${property._id}`)}
        >
          {property.bannerImage && (
            <img
              src={`https://victoria-fall-backend-production.up.railway.app${property.bannerImage}`}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-1">{property.name}</h3>
            <p className="text-gray-600 mb-2">{property.subDescription}</p>
            <p className="text-sm text-gray-500">
              Type: {property.propertyType} | Check In: {property.checkIn} | Check Out: {property.checkOut}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesList;
