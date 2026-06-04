"use client"
import React from "react";
import Banner from '../../../components/Banner'
import Overview from '../../../components/Overview'
import ResturantsCard from './ResturantsCard'
import PropertyLocation from '../../Property/PropertyLocation'
import TestimonialSection from '../../../components/TestimonialSection'
import Awards from '../../../components/Awards'
import JoinClubSection from '../../../components/JoinClubSection'
import { getHomePage } from "../../../api/homeApi.js";
import { useQuery } from "@tanstack/react-query";

const ResturantsLanding = () => {
   
  const { data: homeData } = useQuery({
  queryKey: ["homePage"],
  queryFn: () =>
    getHomePage().then((res) => res.data?.[0]),
  staleTime: 1000 * 60 * 10,
})
  
  return (
   <>
   <Banner
   title='Restaurants '
   subtitle='African Flavours Perfected'
   imageUrl="/restaurant-banner.webp"
   />
   <Overview
   title='Luxury African Dining '
   subtitle='Experience'
   description='At Where to Africa, our restaurant is more than dining—it’s where culture, community, and flavour meet. We serve authentic African cuisine with global influences, fresh ingredients, warm hospitality, and curated experiences, whether for casual lunches, special dinners, or memorable celebrations.'
   />
   <ResturantsCard/>
   <PropertyLocation/>
  <TestimonialSection
  testimonials={homeData?.reviews}
/>
   <Awards/>
   <JoinClubSection/>
   
   </>
  )
}

export default ResturantsLanding