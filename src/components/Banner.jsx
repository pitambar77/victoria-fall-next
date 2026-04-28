"use client";

import React from "react";
import Image from "next/image";

const Banner = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative md:h-[90vh] h-[550px]">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title || "Banner Image"}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className=" max-w-[1140px] mx-auto absolute inset-0 flex flex-col justify-center  text-white/80 px-4  ">
        <h1 className="hd leading-[1.2] text-center sm:text-left text-[24px] sm:text-4xl md:text-[50px] tracking-[5px] font-[600] mb-4 uppercase max-w-[700px]">
          {title}
        </h1>
        {subtitle && (
          <p className="hd font-[500px] text-md text-center sm:text-left tracking-[2px] max-w-lg ">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Banner;
