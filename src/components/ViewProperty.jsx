

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewProperty = () => {
  const { id } = useParams(); // route: /properties/:id
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`https://victoria-fall-backend-production.up.railway.app/api/properties/${id}`);
        setProperty(res.data);
      } catch (err) {
        console.error(err);
        alert("Error fetching property");
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!property) return <p className="text-center mt-10">Property not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6  space-y-6 mt-30">

      {/* Property Name */}
      <div>
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <p className="text-gray-600">{property.subDescription}</p>
      </div>

      {/* Banner Image */}
      {property.bannerImage && (
        <img
          src={`https://victoria-fall-backend-production.up.railway.app${property.bannerImage}`}
          alt="Banner"
          className="w-full h-64 object-cover rounded"
        />
      )}

      {/* Overview */}
      {property.overviewContent && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>{property.overviewContent}</p>
        </div>
      )}

      {/* Description */}
      {property.description && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p>{property.description}</p>
        </div>
      )}

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <strong>Property Type:</strong> {property.propertyType}
        </div>
        <div>
          <strong>Check In:</strong> {property.checkIn} | <strong>Check Out:</strong> {property.checkOut}
        </div>
        <div>
          <strong>Address 1:</strong> {property.address.address1}
        </div>
        <div>
          <strong>Address 2:</strong> {property.address.address2}
        </div>
      </div>

      {/* Services & Facilities */}
      {property.services && property.services.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Services & Facilities</h2>
          <ul className="flex flex-wrap gap-2">
            {property.services.map((service, idx) => (
              <li key={idx} className="px-3 py-1 bg-gray-200 rounded">
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gallery */}
      {property.gallery && property.gallery.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {property.gallery.map((img, idx) => (
              <img
                key={idx}
                src={`https://victoria-fall-backend-production.up.railway.app${img}`}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-32 object-cover rounded"
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ViewProperty;
