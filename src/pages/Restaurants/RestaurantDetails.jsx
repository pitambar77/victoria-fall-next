

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const RestaurantDetails = () => {
  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://victoria-fall-backend.manoramaseoservice.com/api/restaurants/slug/${slug}`)
      .then((res) => setRestaurant(res.data))
      .catch(console.error);
  }, [slug]);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">
      {/* Banner */}
      <div className="relative">
        <img
          src={restaurant.bannerImage}
          alt={restaurant.name}
          className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md"
        />
        <h1 className="absolute bottom-6 left-6 bg-black/50 text-white text-3xl md:text-4xl px-4 py-2 rounded-lg font-semibold">
          {restaurant.name}
        </h1>
      </div>

      {/* Overview Section */}
      <div className="mt-6 text-white/80">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className=" leading-relaxed">{restaurant.overview}</p>
        <p className="mt-2">{restaurant.subDescription}</p>
      </div>

      {/* Address & Info */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
        <p><strong>Address 1:</strong> {restaurant.address1}</p>
        <p><strong>Address 2:</strong> {restaurant.address2}</p>
        <p><strong>Contact:</strong> {restaurant.contactNumber}</p>
        <p><strong>Opening Time:</strong> {restaurant.openingTime} AM</p>
        <p><strong>Closing Time:</strong> {restaurant.closingTime} PM</p>
        <p><strong>Price per Person:</strong> ₹{restaurant.priceperPerson}</p>
      </div>

      {/* Gallery Section */}
      {restaurant.galleryImages?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {restaurant.galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-[1.02] transition-transform"
              />
            ))}
          </div>
        </div>
      )}

      {/* Menu Section */}
      {restaurant.menu?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>

          {restaurant.menu.map((menuCategory) => (
            <div key={menuCategory._id} className="mb-8">
              {/* Category Heading */}
              <h3 className="text-xl font-semibold mb-3 border-b-2 border-gray-200 pb-1">
                {menuCategory.category}
              </h3>

              {/* Menu Items */}
              <div className="grid md:grid-cols-2 gap-6">
                {menuCategory.items.map((item) => (
                  <div
                    key={item._id}
                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-lg font-semibold text-white/80">
                        {item.name}
                      </h4>
                      <span className="text-white/80 font-medium">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm">
                      {item.ingredients}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Back Link */}
      <Link
        to="/dashbord/restaurants/all"
        className="text-blue-600 mt-10 inline-block hover:underline"
      >
        ← Back to Restaurants
      </Link>
    </div>
  );
};

export default RestaurantDetails;
