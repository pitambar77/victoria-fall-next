import React from "react";
// import Button from "./Button";
import Overview from "../Pages/Home/Overview";
import MemoriesSection from "../Pages/Home/MemoriesSection";

import ExperiencesSection from "../Pages/Home/ExperiencesSection";
import TestimonialSection from "./TestimonialSection";
import Banner from "../components/Banner";
import Awards from "./Awards";
import Customize from "./Customize";
import JoinClubSection from "./JoinClubSection";
import Map from "./Map";
import ConciergeServices from "@/Pages/Home/ConciergeServices";
// import PositiveImpact from "../pages/Home/PositiveImpact";

const Hero = () => {
  return (
    <>
      <Banner
        imageUrl="/images/victoria-falls.webp"
        title={"Your Gateway to Victoria Falls"}
        subtitle={`Premium B&B Accommodation with Personalized Concierge Services`}
      />
      {/* <PositiveImpact/> */}
      <Overview />

      <ConciergeServices />
      <MemoriesSection
        title={"Discover Your Perfect Luxury Home Away from Home"}
        description={
          "Discover a carefully selected collection of unique accommodations in Victoria Falls, chosen for their comfort, character, and prime locations. Whether you are traveling as a couple, with family, or with friends, each property offers the perfect base to explore the wonders of Victoria Falls while enjoying personalized services and unforgettable experiences."
        }
      />
      <ExperiencesSection />
      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />

      <Map />
    </>
  );
};

export default Hero;
