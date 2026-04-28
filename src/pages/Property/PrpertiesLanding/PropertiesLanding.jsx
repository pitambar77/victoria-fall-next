
import React, { useState } from "react";
import Banner from "../../../components/Banner";
import PropertiesCards from "./PropertiesCards";
import Overview from "../../../components/Overview";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import propertyl from '../../../assets/propertyl.webp'


const PropertiesLanding = () => {


  return (
    <>
      <Banner
        title="Properties "
        subtitle="Elite African Home Care "
        imageUrl={propertyl}
      />
      <Overview
        title="Private sunset cruise"
        subtitle="on the zimbezi river"
        description="BABOHI is a distinguished lodge exclusively for adults, topped with excellent dining and polished service. This highly modern and inviting retreat displays earthy tones, wooden finishes and warm fabrics that merge with modern coppers, marble finishes and sophisticated hues that allude to the African skies."
      />
      <PropertiesCards />
      <TestimonialSection/>
      <Awards/>
    </>
  );
};

export default PropertiesLanding;