"use client"
import React, { useEffect, useState } from "react";
import { getRestaurants } from "../../../api/restaurantApi";
import Link from "next/link";


const ResturantsCard = () => {


   const [restaurants, setRestaurants] = useState([]);
  
    const loadRestaurants = async () => {
      const res = await getRestaurants();
      setRestaurants(res.data);
    };
  
    useEffect(() => {
      loadRestaurants();
    }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // how many cards per page

  // Calculate total pages
  const totalPages = Math.ceil(restaurants.length / cardsPerPage);

  //   const sectionRef = useRef(null);

  // Get current page data
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = restaurants.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      //  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-[#faf8f1] py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 ">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((restaurant, index) => (
            <div
              key={`${restaurant._id}-${index}`}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group "
            >
              <Link href={`/restaurants/${restaurant.slug}`}>
                {/* Image */}
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={restaurant.bannerImage}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className=" hd text-center transition-all duration-500 group-hover:-translate-y-4">
                  <div className="p-4 bg-white group-hover:rounded-t-md">
                    <p className="text-[#aca188] capitalize text-sm">{restaurant.address1}</p>
                    <h3 className="text-[16px] font-[500] capitalize text-[#2e2c2d] mt-1">
                      {restaurant.name}
                    </h3>

                  
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="hd flex justify-center items-center mt-10 space-x-2">
          {/* Previous button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx + 1)}
              className={`px-3 py-1 rounded-md border border-[#aca188] text-sm ${
                currentPage === idx + 1
                  ? "bg-[#aca188] text-white"
                  : "bg-white text-[#2e2c2d]  hover:bg-gray-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResturantsCard