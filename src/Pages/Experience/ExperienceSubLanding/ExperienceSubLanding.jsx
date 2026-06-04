"use client";
import React from "react";
import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import TabSection from "./TabSection";
import WhyBookWithUs from "../ExperienceLanding/WhyBookWithUs";
// import PopularExperiences from "../ExperienceLanding/PopularExperiences";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import { getHomePage } from "../../../api/homeApi.js";
import { getDestinationBySlug } from "../../../api/destinationApi";
import { useQuery } from "@tanstack/react-query";
import { getActivityLanding } from "../../../api/activityLandingApi";

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

  const { data: activityLanding } = useQuery({
    queryKey: ["activityLanding"],
    queryFn: () => getActivityLanding().then((res) => res.data?.[0]),
  });

  const { data: destination, isLoading } = useQuery({
    queryKey: ["destination", slug],
    queryFn: () => getDestinationBySlug(slug).then((res) => res.data),
    staleTime: 1000 * 60 * 10,
  });

  const { data: homeData } = useQuery({
  queryKey: ["homePage"],
  queryFn: () =>
    getHomePage().then((res) => res.data?.[0]),
  staleTime: 1000 * 60 * 10,
});

  if (!destination) return;

  return (
    <>
      {/* <Banner
        title={destination.overview}
        subtitle={`Victoria Falls Adventures`}
        imageUrl={destination.bannerImage}
      /> */}

      <Banner
        title={activityLanding?.title || destination?.overview}
        subtitle={activityLanding?.subtitle || "Victoria Falls Adventures"}
        imageUrl={activityLanding?.image || destination?.bannerImage}
      />

      {/* <Overview
        title={`Victoria Falls Activities & Experiences`}
        description={
          "Discover the thrill and beauty of Victoria Falls through carefully curated activities and experiences. Whether you seek adventure, nature, or relaxation, each moment promises excitement, stunning views, and a deep connection to this legendary African wonder."
        }
      /> */}

      <Overview
        title={
          activityLanding?.overviewinfo?.title ||
          "Victoria Falls Activities & Experiences"
        }
        description={activityLanding?.overviewinfo?.description || ""}
      />

      <TabSection
        destinationId={destination._id}
        servicesoverview={activityLanding?.servicesoverview}
      />

      <WhyBookWithUs
        whybooksection={activityLanding?.whybooksection}
        whybook={activityLanding?.whybook}
      />
      {/* <PopularExperiences /> */}
     <TestimonialSection
  testimonials={homeData?.reviews}
/>
      <Awards />
    </>
  );
};

export default ExperienceSubLanding;
