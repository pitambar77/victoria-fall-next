"use client";

import React from "react";

import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import ResturantsFacilities from "./ResturantsFacilities";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import JoinClubSection from "../../../components/JoinClubSection";
import Gallery from "../../../components/Gallery";
import RestaurantsMenu from "./RestaurantsMenu";
import BookingSection from "./BookingSection";
import ExperiencesSection from "@/Pages/Home/ExperiencesSection";

const ResturantsDetails = ({ restaurant }) => {
  if (!restaurant) return <p className="p-6">Loading...</p>;

  const images =
    restaurant.galleryImages?.map((img) => img.image).filter(Boolean) || [];

  return (
    <>
      <Banner
        title={restaurant.name}
        subtitle={restaurant.shortTitle}
        imageUrl={restaurant.bannerImage}
      />

      <Overview
        title={restaurant.name}
        subtitle=""
        description={restaurant.overview}
      />

      <ResturantsFacilities restaurant={restaurant} />

      <Gallery
        title={restaurant.name}
        images={restaurant.galleryImages.map((img) =>
          typeof img === "string" ? img : img.image,
        )}
        buttonText="VIEW ALL RESTAURANTS →"
        showButton={true}
      />

      <RestaurantsMenu menu={restaurant.menu} />

      <BookingSection restaurantData={restaurant.name} />

      <ExperiencesSection />

      <TestimonialSection />

      <Awards />

      <JoinClubSection />
    </>
  );
};

export default ResturantsDetails;
