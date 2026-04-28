"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Amenities from "./Amenities";
import BookingSidebar from "./Components/BookingSidebar";
import Highlights from "./Components/Highlights";
import MapSection from "./Components/MapSection";
import HouseRules from "./HouseRules";
import Gallery from "./Components/Gallery";
import RoomsBeds from "./RoomsBeds";
import SpacesSection from "./SpacesSection";
import PropertyHeader from "./PropertyHeader";
import PropertyStats from "./Components/PropertyStats";
import PropertyTabs from "./Components/PropertyTabs";

import MemoriesSection from "../Home/MemoriesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Awards from "@/components/Awards";
import Customize from "@/components/Customize";
import JoinClubSection from "@/components/JoinClubSection";

import { getProperty } from "@/api/propertiesApi";
import PropertiesBookingForm from "@/components/PropertiesBookingForm";

export default function PropertyDetailsPage({ slug }) {
  const [property, setProperty] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  /* ================= FETCH ================= */
  useEffect(() => {
    if (!slug) return;

    const loadProperty = async () => {
      try {
        const res = await getProperty(slug);
        setProperty(res.data);
      } catch (err) {
        console.error("Error fetching property:", err);
      }
    };

    loadProperty();
  }, [slug]);

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading property...
      </div>
    );
  }

  return (
    // <div>
    //   {/* Back Button */}
    //   <div className="max-w-[1200px] mx-auto px-4 py-6">
    //     <Link
    //       href="/properties"
    //       className="flex items-center gap-2 hover:underline text-[#ab8c51]"
    //     >
    //       <GoArrowLeft />
    //       <span>See all Properties</span>
    //     </Link>
    //   </div>

    //   {/* Gallery */}
    //   <div className="max-w-[1200px] mx-auto px-4">
    //     <Gallery property={property} />
    //   </div>

    //   {/* Sticky Tabs */}
    //   <PropertyTabs />

    //   {/* Content */}
    //   <div className="max-w-[1200px] mx-auto px-4 py-6">
    //     <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

    //       {/* LEFT CONTENT */}
    //       <div className="space-y-10">
    //         <section id="overview">
    //           <PropertyHeader property={property} />
    //         </section>

    //         <Highlights property={property} />
    //         <PropertyStats property={property} />

    //         <section id="amenities">
    //           <Amenities property={property} />
    //         </section>

    //         <section id="location">
    //           <MapSection property={property} />
    //         </section>

    //         <RoomsBeds property={property} />
    //         <SpacesSection property={property} />

    //         <section id="policies">
    //           <HouseRules property={property} />
    //         </section>
    //       </div>

    //       {/* RIGHT SIDEBAR */}
    //       <BookingSidebar
    //         property={property}
    //         openBooking={() => setShowBookingForm(true)}
    //       />
    //     </div>
    //   </div>

    //   {/* Explore Section */}
    //   <div className="bg-[#f9f4e8] mt-16">
    //     <MemoriesSection title="Explore More Exceptional Homes Nearby" />
    //   </div>

    //   <TestimonialSection />
    //   <Awards />
    //   <Customize />
    //   <JoinClubSection />

    //   {/* ================= MODAL ================= */}
    //   {showBookingForm && (
    //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    //       <div className="bg-white rounded-lg max-w-[800px] w-full relative p-6 max-h-[90vh] overflow-y-auto">

    //         {/* Close */}
    //         <button
    //           onClick={() => setShowBookingForm(false)}
    //           className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
    //         >
    //           ✕
    //         </button>

    //         <PropertiesBookingForm
    //           propertyName={property.overview?.title}
    //         />
    //       </div>
    //     </div>
    //   )}
    // </div>
    <>
      <div className=" hd max-w-[1200px] mx-auto px-4 py-6">
        <div className=" flex">
          <Link
            href="/properties"
            className="flex items-center gap-2 hover:underline text-[#ab8c51]"
          >
            <GoArrowLeft />
            <span>See all Properties</span>
          </Link>
          <div></div>
        </div>
      </div>
      {/* Gallery */}
      <div className="max-w-[1200px] mx-auto px-4 ">
        <Gallery property={property} />
      </div>

      {/* Sticky Tabs */}
      <PropertyTabs />

      {/* Page Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div className="space-y-10">
            <section id="overview">
              <PropertyHeader property={property} />
            </section>

            <Highlights property={property} />
            <PropertyStats property={property} />

            <section id="amenities">
              <Amenities property={property} />
            </section>

            <section id="location">
              <MapSection property={property} />
            </section>

            <RoomsBeds property={property} />
            <SpacesSection property={property} />

            <section id="policies">
              <HouseRules property={property} />
            </section>
          </div>

          <BookingSidebar
            property={property}
            openBooking={() => setShowBookingForm(true)}
          />
        </div>
      </div>
      <div className="bg-[#f9f4e8] mt-16">
        <MemoriesSection title={"Explore More Exceptional Homes Nearby"} />
      </div>

      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-[800px] w-full relative p-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowBookingForm(false)}
              className=" cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <PropertiesBookingForm propertyName={property.overview?.title} />
          </div>
        </div>
      )}
    </>
  );
}
