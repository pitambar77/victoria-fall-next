
"use client"

import React, { useEffect, useState } from "react";
import { getActivities } from "../../../api/activityApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PopularExperiences() {
  const [activities, setActivities] = useState([]);
  const router = useRouter();

  const fetchActivities = async () => {
    try {
      const res = await getActivities();
      setActivities(res.data);
    } catch (err) {
      console.error("Error fetching activities:", err);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto py-10 md:py-16 px-4 relative">
      {/* Heading */}
      <h2 className="hd text-center text-xl md:text-[30px] mb-6 md:mb-13 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
        Our Popular <br className="hidden md:inline" /> Experiences
      </h2>

      {/* Carousel */}
      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true,dynamicBullets: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // ⏸️ stops autoplay when mouse hovers
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity._id}>
              <div className="bg-white rounded-md shadow-md overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
                <img
                  src={activity.banner[0].bannerImage}
                  alt={activity.activityName}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-4 hd text-[#2e2c2d]">
                  <h3 className="text-lg font-[500] mb-2 text-[#7a6b57] text-center">
                    {activity.activityName}
                  </h3>
                  <p className="text-[#5c5e62] text-sm mb-3 text-center line-clamp-3">
                    {activity.overview}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() =>
                        router.push(`/experience-details/${activity.slug}`)
                      }
                      className="my-2 text-[#2e2c2d] border border-[#aca188] hover:border-[#c40] hover:text-[#c40] rounded-[50px] text-[14px] leading-[1.6] capitalize tracking-[3px] font-normal py-[8px] px-[16px] transition-colors duration-300 cursor-pointer ease-out"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button className="custom-prev hidden md:flex absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
          <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>

        <button className="custom-next hidden md:flex absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
          <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}
