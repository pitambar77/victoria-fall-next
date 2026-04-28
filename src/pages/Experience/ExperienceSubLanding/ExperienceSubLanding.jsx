"use client";
import React, { useEffect, useState } from "react";
import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import TabSection from "./TabSection";
import WhyBookWithUs from "../ExperienceLanding/WhyBookWithUs";
// import PopularExperiences from "../ExperienceLanding/PopularExperiences";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";

import { getDestinationBySlug } from "../../../api/destinationApi";
import { useQuery } from "@tanstack/react-query";

const ExperienceSubLanding = ({ fixedSlug, destinationSlug }) => {
  // ✅ priority: fixedSlug (for victoria-falls-experiences) → URL slug
  const slug = fixedSlug || destinationSlug;

  // const [destination, setDestination] = useState(null);

  // useEffect(() => {
  //   if (!slug) return;

  //   const fetchDestination = async () => {
  //     try {
  //       const res = await getDestinationBySlug(slug);
  //       setDestination(res.data);
  //     } catch (error) {
  //       console.error("Error fetching destination", error);
  //     }
  //   };

  //   fetchDestination();
  // }, [slug]);

  const { data: destination, isLoading } = useQuery({
    queryKey: ["destination", slug],
    queryFn: () => getDestinationBySlug(slug).then((res) => res.data),
    staleTime: 1000 * 60 * 10,
  });

  if (!destination) return;

  return (
    <>
      <Banner
        title={destination.overview}
        subtitle={`Victoria Falls Adventures`}
        imageUrl={destination.bannerImage}
      />

      <Overview
        title={`Victoria Falls Activities & Experiences`}
        description={
          "Discover the thrill and beauty of Victoria Falls through carefully curated activities and experiences. Whether you seek adventure, nature, or relaxation, each moment promises excitement, stunning views, and a deep connection to this legendary African wonder."
        }
      />

      <TabSection destinationId={destination._id} />

      <WhyBookWithUs />
      {/* <PopularExperiences /> */}
      <TestimonialSection />
      <Awards />
    </>
  );
};

export default ExperienceSubLanding;
