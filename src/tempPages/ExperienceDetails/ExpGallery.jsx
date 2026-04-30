"use client"

import React, { useEffect, useState } from "react";

import axios from "axios";
import Gallery from "../../components/Gallery";

const BASE_URL = "http://victoria-fall-backend.manoramaseoservice.com";

export default function ModalGallery({slug}) {

  const [activity, setActivity] = useState(null);

  console.log("Route ID:", slug);

  useEffect(() => {
    if (!slug) return;

    axios
      .get(`http://victoria-fall-backend.manoramaseoservice.com/api/activities/slug/${slug}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setActivity(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, [slug]);

  if (!activity) return <p className="p-6">Loading...</p>;

  if (!activity.galleryImages?.length)
    return <p className="p-6">No images available.</p>;

  const images = activity.galleryImages.map((img) =>
    img.startsWith("http") ? img : `${BASE_URL}/${img}`
  );

  return (
    <Gallery
      title={activity.activityName}
      images={images}
      buttonText="VIEW ACCOMMODATION →"
      showButton
    />
  );
}
