// src/components/skeletons/PropertyLandingSkeleton.jsx
import React from "react";
import BannerSkeleton from "./BannerSkeleton";
import OverviewSkeleton from "./OverviewSkeleton";
import PropertiesCardsSkeleton from "./PropertiesCardsSkeleton";

const PropertyLandingSkeleton = () => {
  return (
    <>
      <BannerSkeleton />
      <OverviewSkeleton />
      <PropertiesCardsSkeleton />
    </>
  );
};

export default PropertyLandingSkeleton;