

"use client";

import React, { useRef } from "react";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";
import { getActivities } from "@/api/activityApi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const ExperiencesSection = ({ destinationId, currentActivityId }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { data: experiences = [], isLoading } = useQuery({
    queryKey: ["related-experiences", destinationId],
    queryFn: async () => {
      const res = await getActivities();

      const filtered = res.data.filter(
        (act) =>
          act.destination?._id === destinationId &&
          act._id !== currentActivityId,
      );

      return filtered.slice(0, 6);
    },
    enabled: !!destinationId,
  });

  if (isLoading || experiences.length === 0) return null;

  return (
    <div className="bg-white md:py-20 py-10">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="hd md:text-[30px] text-[20px] mb-10 font-semibold tracking-[3px] uppercase text-center">
          Related Experiences
        </h2>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {experiences.map((exp) => (
              <SwiperSlide key={exp._id} className="py-4">
                <Link
                  href={`/victoria-falls-experiences/${exp.slug}`}
                  className="bg-white rounded-md shadow-sm hover:shadow-md border border-gray-200 transition-shadow duration-300 block"
                >
                  <div className="relative h-60 overflow-hidden rounded-t-md">
                    <img
                      src={exp.banner?.[0]?.bannerImage || exp.overviewImage}
                      alt={exp.activityName}
                      className="w-full h-full object-cover"
                    />

                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                      <CiHeart />
                    </button>
                  </div>

                  <div className="text-left">
                    <div className="p-6">
                      <span className="inline-block bg-[#f9f4e8] text-xs px-3 py-2 rounded-full">
                        {exp.category?.name || "Experience"}
                      </span>
                    </div>

                    <h3 className="hd px-6 font-[500] text-lg text-[#2e2c2d] mb-4 capitalize">
                      {exp.activityName}
                    </h3>

                    <div className="flex text-sm border-t border-[#2e2c2d]">
                      <span className="p-6 border-r">
                        ${exp.pricePerPerson} P.P
                      </span>
                      <span className="p-6">By Where To Africa</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            ref={prevRef}
            className="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            ref={nextRef}
            className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100 z-10"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto text-center mt-10">
        <Link
          href="/victoria-falls-experiences"
          className="text-white border-0 bg-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[10px] px-[20px] hover:bg-[#c40] transition-colors duration-300 cursor-pointer ease-out"
        >
          View all experiences
        </Link>
      </div>
    </div>
  );
};

export default ExperiencesSection;
