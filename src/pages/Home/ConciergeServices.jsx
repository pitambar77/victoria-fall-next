"use client";

import React from "react";
import { FaSun, FaSpa, FaCocktail } from "react-icons/fa";
import { RxHome } from "react-icons/rx";
import { TbCliffJumping } from "react-icons/tb";
import { LuUtensils } from "react-icons/lu";

import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ConciergeServices = () => {
  const router = useRouter();

  const services = [
    {
      title: "Make Yourself at Home",
      image:
        "https://m.ahstatic.com/is/image/accorhotels/met_p_a007-82:8by10?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=418&qlt=80",
      icon: <RxHome />,
      url: "/properties",
    },
    {
      title: "Restaurants & Fine Dining",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/54/46/dd/restaurant-dining-space.jpg?w=600&h=600&s=1",
      icon: <LuUtensils />,
      url: "/restaurants",
    },
    {
      title: "Activities & Experiences",
      image: "/victoria-activities.webp",
      icon: <TbCliffJumping />,
      url: "/victoria-falls-experiences",
    },
    {
      title: "Culture & Entertainment",
      image: "/victoria-cultural.webp",
      icon: <FaCocktail />,
      url: "/luxury-concierge-services",
    },
    {
      title: "Beauty & Wellness",
      image:
        "https://www.go2africa.com/wp-content/uploads/2019/05/botswana-safari-spa-chobe-chilwero.jpg",
      icon: <FaSpa />,
      url: "/luxury-concierge-services",
    },
    {
      title: "Private Events",
      image:
        "https://natureresponsiblesafari-kenya.com/wp-content/uploads/2021/04/honeymoon-safari-1.jpg",
      icon: <FaSun />,
      url: "/luxury-concierge-services",
    },
  ];

  return (
    <section className="bg-[#f9f4e8] md:py-20 py-10">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="hd text-center md:text-[30px] text-[20px] mb-6 font-semibold text-[#2e2c2d] tracking-[3px] max-w-2xl mx-auto uppercase">
          Creating a Luxury Guest Experience in Victoria Falls
        </h2>

        <p className="hd max-w-xl mx-auto md:text-center text-justify text-[#5c5e62] md:mb-16 mb-0">
          Step into a world of comfort, adventure, and effortless luxury. From
          curated local experiences and fine dining reservations to wellness
          treatments and private events, every detail is thoughtfully arranged
          so you can fully enjoy the magic of Victoria Falls.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-md overflow-hidden shadow-lg group h-[460px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              <Link href={service.url}>
                <div className="absolute bottom-6 cursor-pointer right-6 left-6 bg-white bg-opacity-80 backdrop-blur-md rounded-md p-4 flex justify-between items-center shadow-md">
                  <h3 className="hd text-[16px] text-[#2e2c2d] text-left">
                    {service.title}
                  </h3>
                  <span className="text-[#2e2c2d] text-md">{service.icon}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button
          onClick={() => {
            router.push("/contact-us");
            window.scrollTo(0, 0);
          }}
        >
          Book Your Tailor-Made Services
        </Button>
      </div>
    </section>
  );
};

export default ConciergeServices;
