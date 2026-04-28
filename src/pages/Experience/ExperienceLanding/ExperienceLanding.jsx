import React from "react";
import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import ExperienceDestination from "./ExperienceDestination";
import PopularExperiences from "./PopularExperiences";
import WhyBookWithUs from "./WhyBookWithUs";
import Testimonial from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import experiencel from "../../../assets/experience.webp";

const ExperienceLanding = () => {
  return (
    <>
      <Banner
        title="Experience"
        subtitle="Explore Africa’s Iconic Experiences"
        imageUrl={experiencel}
      />
      <Overview
        title="Timeless journeys through Southern Africa’s wonders"
        // subtitle="on the zimbezi river"
        description="Journey through Southern Africa’s legendary destinations—Victoria Falls, Cape Town, Chobe, and Livingstone. Witness powerful natural wonders, encounter diverse wildlife, and immerse yourself in local culture while enjoying expertly designed experiences that balance adventure, comfort, and discovery."
      />
      <ExperienceDestination />
      <WhyBookWithUs />
      <PopularExperiences />
      <Testimonial />
      <Awards />
    </>
  );
};

export default ExperienceLanding;
