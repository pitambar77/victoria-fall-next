import React from "react";
import Banner from "../../components/Banner";
import Overview from "./Overview";
import Services from "./Services";
import OwnerApplicationForm from "./OwnerApplicationForm";

const OwnersApplication = () => {
  return (
    <>
      <Banner
        title="Owners Application"
        subtitle="victoria falls bed & breakfast"
        imageUrl="/images/owner-banner.webp"
      />
      <Overview />
      <Services />
      <OwnerApplicationForm />
    </>
  );
};

export default OwnersApplication;
