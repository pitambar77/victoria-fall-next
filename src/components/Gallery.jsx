"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

export default function Gallery({
  title,
  images = [],
  buttonText = "VIEW ACCOMMODATION →",
  showButton = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(images) || images.length === 0) {
    return <p className="p-6">No images available.</p>;
  }

  /* ---------------- OPEN GALLERY ---------------- */

  const openGallery = useCallback((index) => {
    setCurrent(index);
    setIsOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
  }, []);

  /* ---------------- SLIDE NAVIGATION ---------------- */

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  /* ---------------- PREVENT SCROLL ---------------- */

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  /* ---------------- KEYBOARD NAVIGATION ---------------- */

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, prevSlide, nextSlide, closeGallery]);

  /* ---------------- IMAGE GRID ---------------- */

  return (
    <section className="max-w-[1140px] mx-auto py-10 md:py-20 px-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8">
        {title && (
          <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
            {title}
          </h2>
        )}

        {showButton && (
          <Link
            href="/restaurants"
            className="hidden md:block hd text-sm font-medium text-[#4d4a2f] hover:underline"
          >
            {buttonText}
          </Link>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Large Image */}
        {images[0] && (
          <div
            className="relative w-full h-[300px] md:h-[556px] cursor-pointer"
            onClick={() => openGallery(0)}
          >
            <Image
              src={images[0]}
              alt="gallery-main"
              fill
              className="object-cover rounded-md shadow-lg"
            />
          </div>
        )}

        {/* Small Images */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          {images[1] && (
            <div
              className="relative w-full h-[150px] md:h-[258px] cursor-pointer"
              onClick={() => openGallery(1)}
            >
              <Image
                src={images[1]}
                alt="gallery-1"
                fill
                className="object-cover rounded-md shadow-lg"
              />
            </div>
          )}

          {images[2] && (
            <div
              className="relative w-full h-[150px] md:h-[258px] cursor-pointer"
              onClick={() => openGallery(2)}
            >
              <Image
                src={images[2]}
                alt="gallery-2"
                fill
                className="object-cover rounded-md shadow-lg"
              />
            </div>
          )}

          {images[3] && (
            <div
              className="relative col-span-2 w-full h-[150px] md:h-[258px] cursor-pointer"
              onClick={() => openGallery(3)}
            >
              <Image
                src={images[3]}
                alt="gallery-3"
                fill
                className="object-cover rounded-md shadow-lg"
              />

              <div className="absolute inset-0 bg-black/60 rounded-md flex items-center justify-center">
                <span className="text-white font-medium text-lg">
                  VIEW GALLERY →
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Button */}
      {showButton && (
        <div className="md:hidden mt-10 text-center">
          <Button href="/restaurants">{buttonText}</Button>
        </div>
      )}

      {/* ---------------- MODAL GALLERY ---------------- */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] px-4"
          onClick={closeGallery}
        >
          {/* Close Button */}
          <button
            onClick={closeGallery}
            aria-label="Close gallery"
            className="absolute top-10 right-10 text-white"
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-5xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-4 text-white p-3 bg-black/40 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[current]}
                alt={`slide-${current}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-4 text-white p-3 bg-black/40 rounded-full"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
