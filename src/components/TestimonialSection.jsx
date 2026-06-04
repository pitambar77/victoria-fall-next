"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiDoubleQuotesL } from "react-icons/ri";



export default function TestimonialSection({testimonials=[]}) {
  return (
    <div className=" max-w-[1140px] mx-auto py-8 md:py-20 px-4  relative bg-white">
      {/* Heading */}
      <div className="flex items-center  mb-14">
        <span className="md:w-30 w-10 h-[1px] bg-[#2e2c2d] mr-6"></span>
        <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase">
          What Our Clients Say
        </h2>
      
      </div>

      {/* Swiper */}
      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="text-center px-6">
                <div className="text-4xl text-left text-[#aca188] leading-none  mb-4"><RiDoubleQuotesL/></div>
                <p className="italic hd text-md text-[#2e2c2d] mb-6">
                  {item.review}
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="w-10  h-[1px] bg-[#2e2c2d]"></span>
                </div>
                <p className=" hd text-left uppercase  text-[12px] tracking-wide text-[#2e2c2d]">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button className=" hidden testimonial-prev absolute top-1/2 -left-16 transform -translate-y-1/2 w-12 h-12 lg:flex items-center justify-center rounded-full bg-[#aca188] text-white shadow hover:bg-[#2e2c2d] cursor-pointer duration-300 transition">
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        <button className="hidden testimonial-next absolute top-1/2 -right-16 transform -translate-y-1/2 w-12 h-12 lg:flex items-center justify-center rounded-full bg-[#aca188] text-white shadow hover:bg-[#2e2c2d] cursor-pointer duration-300 transition">
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
