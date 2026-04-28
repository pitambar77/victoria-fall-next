import React, { useEffect, useState } from "react";
import { getDestinations } from "../../api/destinationApi";
import { Link } from "react-router-dom";

const DestinationsLanding = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDestinations();
      setDestinations(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Destinations</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <Link
            key={dest._id}
            to={`/la/destination/${dest._id}`}
            className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={dest.bannerImage}
              alt={dest.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{dest.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestinationsLanding;
