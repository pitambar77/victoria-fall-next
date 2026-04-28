

"use client"

import React, { useEffect, useState } from "react";
import { getDestinations } from "../../../api/destinationApi";
import Link from "next/link";

const ExperienceDestination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDestinations();
        setDestinations(res.data || []);
      } catch (err) {
        console.error("Error fetching destinations:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#faf8f1] py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Link
              key={dest.slug}
              href={`/experience-sub-landing/${dest.slug}`}
              className={`bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Image */}
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={dest.bannerImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="hd transition-all duration-500 group-hover:-translate-y-4">
                <div className="p-4 bg-white group-hover:rounded-t-md text-center">
                  <h3 className="text-lg font-[500] text-[#2e2c2d] mt-1 uppercase">
                    {dest.name}
                  </h3>

                  <div className="my-2 text-[#2e2c2d] border border-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[8px] px-[20px] transition-colors duration-300">
                    View More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDestination;

