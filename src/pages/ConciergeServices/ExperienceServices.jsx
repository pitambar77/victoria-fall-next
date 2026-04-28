"use client"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getActivities } from "../../api/activityApi.js";
import Link from "next/link.js";

const ExperienceServices = ({ destinationId }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!destinationId) return;

    const fetchActivities = async () => {
      try {
        const res = await getActivities();

        // ✅ FILTER BY DESTINATION
        const filtered = res.data.filter(
          (act) => act.destination?._id === destinationId,
        );

        setActivities(filtered);
      } catch (err) {
        console.error("ExperienceServices error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [destinationId]);

  if (loading || activities.length === 0) return null;

  return (
    <section id="victoria-falls-experiences" className="py-10 md:py-20 bg-[#f9f9f7]">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="hd text-xl md:text-[30px] font-semibold tracking-[3px] mb-10 text-center uppercase">
          Experiences
        </h2>

        {/* --- Mobile / Tablet Swiper --- */}
        <div className="block lg:hidden relative group">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="pb-10"
          >
            {activities.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="bg-white rounded-md shadow-md overflow-hidden">
                  <img
                    src={item.banner?.[0]?.bannerImage || item.overviewImage}
                    alt={item.activityName}
                    className="w-full h-[240px] object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-[500] text-center mb-3">
                      {item.activityName}
                    </h3>
                    <p className="text-sm text-[#5c5e62]">{item.overview}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2">
            <ChevronLeft />
          </button>
          <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2">
            <ChevronRight />
          </button>
        </div>

        {/* --- Desktop Grid --- */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {activities.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-md shadow-sm overflow-hidden"
            >
              <img
                src={item.banner?.[0]?.bannerImage || item.overviewImage}
                alt={item.activityName}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="hd text-lg font-[500] text-[#7a6b57] mb-4 text-center">
                  {item.activityName}
                </h3>
                <p className="hd text-[#5c5e62] text-sm">{item.overview}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" max-w-[1140px] mx-auto pt-10 md:pt-20 px-4 text-center">
          <Link
            href="/victoria-falls-experiences"
            className=" text-white border-0 bg-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[10px] px-[20px] hover:bg-[#c40] transition-colors duration-300 cursor-pointer ease-out"
          >
            View all experiences
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperienceServices;
