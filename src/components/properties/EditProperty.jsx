"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProperty } from "@/api/propertiesApi";

import OverviewSection from "@/components/properties/OverviewSection";
import AmenitiesSection from "@/components/properties/AmenitiesSection";
import RoomsSection from "@/components/properties/RoomsSection";
import GallerySection from "@/components/properties/GallerySection";
import HighlightsSection from "./HighlightsSection";
import AreaSection from "./AreaSection";
import BathroomsSection from "./BathroomsSection";
import SpaceSection from "./SpaceSection";
import HouseRulesSection from "./HouseRulesSection";
import IncidentalSection from "./IncidentalSection";
import InformationSection from "./InformationSection";
import PropertyBasicSection from "./PropertyBasicSection";

export default function EditProperty() {
  const params = useParams();
  const slug = params?.slug;

  const [property, setProperty] = useState(null);
  const [tab, setTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProperty = async () => {
      try {
        const res = await getProperty(slug);
        setProperty(res.data);
      } catch (err) {
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [slug]);

  if (loading) return <div className="p-10">Loading property...</div>;
  if (!property) return <div className="p-10">Property not found</div>;

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "highlights", label: "Highlights" },
    { key: "amenities", label: "Amenities" },
    { key: "areasec", label: "Explore Area" },
    { key: "rooms", label: "Rooms" },
    { key: "bathrooms", label: "Bathrooms" },
    { key: "space", label: "Space" },
    { key: "rule", label: "House Rules" },
    { key: "insidental", label: "Incidental" },
    { key: "information", label: "Information" },
    { key: "gallery", label: "Gallery" },
    { key: "basics", label: "Basic" },
  ];

  return (
    <div className="p-4 space-y-6 bg-[#f8f7f4]">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Edit Property</h1>
          <p className="text-gray-500">{property.overview?.title}</p>
        </div>

        <Link href="/dashboard/propt" className="text-sm text-blue-600">
          ← Back to Properties
        </Link>
      </div>

      {/* TABS */}
      <div className="flex gap-6 bg-white rounded-md p-4 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-2 whitespace-nowrap ${
              tab === t.key ? "border-b-2 border-[#ab8c52] font-semibold" : ""
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="pt-4">
        {tab === "overview" && (
          <OverviewSection property={property} setProperty={setProperty} />
        )}
        {tab === "highlights" && (
          <HighlightsSection property={property} setProperty={setProperty} />
        )}
        {tab === "amenities" && (
          <AmenitiesSection property={property} setProperty={setProperty} />
        )}
        {tab === "areasec" && (
          <AreaSection property={property} setProperty={setProperty} />
        )}
        {tab === "rooms" && (
          <RoomsSection property={property} setProperty={setProperty} />
        )}
        {tab === "bathrooms" && (
          <BathroomsSection property={property} setProperty={setProperty} />
        )}
        {tab === "space" && (
          <SpaceSection property={property} setProperty={setProperty} />
        )}
        {tab === "rule" && (
          <HouseRulesSection property={property} setProperty={setProperty} />
        )}
        {tab === "insidental" && (
          <IncidentalSection property={property} setProperty={setProperty} />
        )}
        {tab === "information" && (
          <InformationSection property={property} setProperty={setProperty} />
        )}
        {tab === "gallery" && (
          <GallerySection property={property} setProperty={setProperty} />
        )}
        {tab === "basics" && (
          <PropertyBasicSection property={property} setProperty={setProperty} />
        )}
      </div>
    </div>
  );
}
