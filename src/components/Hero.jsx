"use client";
import React from "react";
import Banner from "../components/Banner";
import Awards from "./Awards";
import Customize from "./Customize";
import JoinClubSection from "./JoinClubSection";
import Map from "./Map";
import ConciergeServices from "@/Pages/Home/ConciergeServices";
import MemoriesSection from "@/Pages/Home/MemoriesSection";
import ExperiencesSection from "@/Pages/Home/ExperiencesSection";
import TestimonialSection from "./TestimonialSection";
import Overview from "@/Pages/Home/Overview";
import { getHomePage } from "@/api/homeApi";
import { useQuery } from "@tanstack/react-query";

const Hero = () => {
  const { data: homeData, isLoading } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => getHomePage().then((res) => res.data?.[0]),
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <>
      <Banner
        imageUrl={homeData?.image}
        title={homeData?.title}
        subtitle={homeData?.subtitle}
      />
      {/* <PositiveImpact/> */}
      <Overview
        title={homeData?.overviewinfo?.title}
        description={homeData?.overviewinfo?.description}
      />

      <ConciergeServices
        title={homeData?.servicesoverview?.title}
        description={homeData?.servicesoverview?.description}
      />
      <MemoriesSection
        title={homeData?.propertyoverview?.title}
        description={homeData?.propertyoverview?.description}
      />
      <ExperiencesSection />
      <TestimonialSection testimonials={homeData?.reviews} />
      <Awards />
      <Customize />
      <JoinClubSection />

      <Map />
    </>
  );
};

export default Hero;
