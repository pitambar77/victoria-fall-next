


import React, { useEffect, useState } from "react";
import { getProperties, deleteProperty } from "../../api/propertyApi";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  const loadProperties = async () => {
    const res = await getProperties();
    setProperties(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      await deleteProperty(id);
      loadProperties();
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Properties</h2>
        <Link
          to="/dashbord/rooms/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add New
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((r) => (
          <div
            key={r._id}
            className="bg-white shadow rounded-lg overflow-hidden border"
          >
            <img
              src={r.bannerImage}
              alt={r.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{r.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {r.overview}
              </p>
             
               <p className="text-gray-600 text-sm line-clamp-2">
                {r.subDescription}
              </p>
               <p className="text-gray-600 text-sm line-clamp-2">
                {r.checkIn}
              </p>
               <p className="text-gray-600 text-sm line-clamp-2">
                {r.checkOut}
              </p>
               <p className="text-gray-600 text-sm line-clamp-2">
                {r.contactNumber}
              </p>
                 <p className="text-gray-600 text-sm line-clamp-2">
                {r.priceperPerson}
              </p>

             
              <div className="flex justify-between mt-3">
                <Link
                  to={`/dashbord/properties/edit/${r._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(r._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
                            <Link
                to={`/dashbord/properties/${r._id}`}
                className="text-blue-600 mt-2 inline-block"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

