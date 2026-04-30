import React from "react";
import Banner from '../../../components/Banner'
import Overview from '../../../components/Overview'
import ResturantsCard from './ResturantsCard'
import PropertyLocation from '../../Property/PropertyLocation'
import TestimonialSection from '../../../components/TestimonialSection'
import Awards from '../../../components/Awards'
import JoinClubSection from '../../../components/JoinClubSection'


const ResturantsLanding = () => {
   
  
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
   <TestimonialSection/>
   <Awards/>
   <JoinClubSection/>
   
   </>
  )
}

export default ResturantsLanding