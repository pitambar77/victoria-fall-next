"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import Banner from "../../components/Banner";
import Overview from "./Overview";
import Services from "./Services";
import OwnerApplicationForm from "./OwnerApplicationForm";
import { getOwnersApplication } from "../../api/ownersApplicationApi.js";

const OwnersApplication = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owners-application"],
    queryFn: () =>
      getOwnersApplication().then((res) => res.data?.[0]),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Banner
        title={data?.title}
        subtitle={data?.subtitle}
        imageUrl={data?.image}
      />

      <Overview overviewinfo={data?.overviewinfo} />

      <Services
        title={data?.whybooksection?.title}
        items={data?.whybook}
      />

      <OwnerApplicationForm />
    </>
  );
};

export default OwnersApplication;