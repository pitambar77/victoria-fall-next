"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import CultureEntertainment from "./CultureEntertainment";
import BeautyWellbeing from "./BeautyWellbeing";
import PrivateEvents from "./PrivateEvents";
import Banner from "../../components/Banner";
import Overview from "../../components/Overview";
import SectionNavigator from "./SectionNavigator";
import Button from "../../components/Button";
import TestimonialSection from "../../components/TestimonialSection";
import Awards from "../../components/Awards";
import JoinClubSection from "../../components/JoinClubSection";
import Customize from "../../components/Customize";
import ExperienceServices from "./ExperienceServices";
import MakeYourself from "./MakeYourself";
import FoodHall from "./FoodHall";
import { getDestinationBySlug } from "../../api/destinationApi";
import BannerSkeleton from "../../components/skeletons/BannerSkeleton";

const LuxuryConciergeServices = () => {
  const router = useRouter();
  const slug = "victorial-falls";

  const { data: destination, isLoading } = useQuery({
    queryKey: ["destination", slug],
    queryFn: () => getDestinationBySlug(slug).then((res) => res.data),
    staleTime: 1000 * 60 * 10,
  });

  // show skeleton or loader
  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <BannerSkeleton/>
      </div>
    );
  }

  return (
    <div>
      <Banner
        title="Luxury Concierge Services"
        subtitle="Tailored Victoria Falls Services"
        imageUrl="/concierge.webp"
      />

      <Overview
        title="Exclusive African "
        subtitle="Concierge"
        description="At Where to Africa, our mission is to transform your holiday into a truly unforgettable experience. We take care of every detail so you don’t have to."
      />

    <SectionNavigator />
       <MakeYourself />
      <CultureEntertainment />
      <BeautyWellbeing />
      <PrivateEvents />
      <FoodHall/>

      <div className="max-w-[1140px] mx-auto pb-10 md:pb-20 px-4 text-center">
        <Button
          onClick={() => {
            router("/contact-us");
            window.scrollTo(0, 0);
          }}
        >
          Book Your Tailor-Made Services
        </Button>
      </div>

      {/* destination based services */}
      {destination && (
        <ExperienceServices destinationId={destination._id} />
      )}

      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />
    </div>
  );
};

export default LuxuryConciergeServices;