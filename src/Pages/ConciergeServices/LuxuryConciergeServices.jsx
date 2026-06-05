"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getHomePage } from "../../api/homeApi";
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
import { getConciergePage } from "../../api/conciergeApi";
import BannerSkeleton from "../../components/skeletons/BannerSkeleton";
import Link from "next/link";

const LuxuryConciergeServices = () => {
  const router = useRouter();
  const slug = "victorial-falls";

  const { data: destination, isLoading } = useQuery({
    queryKey: ["destination", slug],
    queryFn: () => getDestinationBySlug(slug).then((res) => res.data),
    staleTime: 1000 * 60 * 10,
  });

  const { data: homeData } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => getHomePage().then((res) => res.data?.[0]),
    staleTime: 1000 * 60 * 10,
  });

  const { data: conciergeData } = useQuery({
    queryKey: ["concierge"],
    queryFn: () => getConciergePage().then((res) => res.data?.[0]),
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <BannerSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Banner
        title={conciergeData?.title}
        subtitle={conciergeData?.subtitle}
        imageUrl={conciergeData?.image}
      />

      <Overview
        title={conciergeData?.overviewinfo?.title}
        description={conciergeData?.overviewinfo?.description}
      />

      <SectionNavigator />
      <MakeYourself
        title={conciergeData?.homeServiceSection?.title}
        services={conciergeData?.homeService || []}
      />

      <CultureEntertainment
        title={conciergeData?.culturalServiceSection?.title}
        services={conciergeData?.culturalService || []}
      />

      <BeautyWellbeing
        title={conciergeData?.beautywellnesServiceSection?.title}
        services={conciergeData?.beautywellnesService || []}
      />

      <PrivateEvents
        title={conciergeData?.privateeventServiceSection?.title}
        services={conciergeData?.privateeventService || []}
      />

      <FoodHall
        title={conciergeData?.foodServiceSection?.title}
        services={conciergeData?.foodService || []}
      />

      <div className="max-w-[1140px] mx-auto pb-10 md:pb-20 px-4 text-center">
        <Button href={"/contact-us"}>Book Your Tailor-Made Services</Button>
      </div>

      {destination && <ExperienceServices destinationId={destination._id} />}

      <TestimonialSection testimonials={homeData?.reviews} />
      <Awards />
      <Customize />
      <JoinClubSection />
    </div>
  );
};

export default LuxuryConciergeServices;
