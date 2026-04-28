import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Banner from "../../components/Banner";
import Overview from "../../components/Overview";
import FacilitiesSection from "./FacilitiesSection";
import ModalGallery from "./ModalGallery";

import MemoriesSection from "../Home/MemoriesSection";
import TestimonialSection from "../../components/TestimonialSection";
import Awards from "../../components/Awards";
import Customize from "../../components/Customize";
import JoinClubSection from "../../components/JoinClubSection";
import PropertyLocation from "./PropertyLocation";
import FaqSection from "../../components/FaqItem";
import DetailsSection from "./DetailsSection";

const PropertiesDetails = () => {
  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://victoria-fall-backend.manoramaseoservice.com/api/properties/slug/${slug}`,
      )
      .then((res) => setRestaurant(res.data))
      .catch(console.error);
  }, [slug]);

  console.log(restaurant);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Banner
        title={restaurant.name}
        subtitle={restaurant.shortTitle}
        imageUrl={restaurant.bannerImage}
      />
      <Overview
        title={restaurant.overviewTittle}
        subtitle=""
        description={restaurant.overview}
      />

      <FacilitiesSection />
      {/* <DetailsSection/> */}
      <ModalGallery />
      <PropertyLocation />
      <FaqSection />
      <MemoriesSection />
      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />
    </>
  );
};

export default PropertiesDetails;
