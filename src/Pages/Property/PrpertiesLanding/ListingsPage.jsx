// import React, { useState } from "react";
// import PropertyList from "./PropertyList";
// import MapView from "./MapView";
// import FiltersBar from "./FiltersBar";
// import TestimonialSection from "../../../components/TestimonialSection";
// import Awards from "../../../components/Awards";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import { useFilters } from "../../../FilterContext";

// import { getProperties } from "../../../api/propertiesApi";
// import { useEffect } from "react";

// const ListingsPage = () => {
//   const { filters } = useFilters();
//   const [properties, setProperties] = useState([]);
//   //map hover
//   const [hoveredId, setHoveredId] = useState(null);
//   const [selectedId, setSelectedId] = useState(null);
//   const [visibleProperties, setVisibleProperties] = useState(properties);

//   useEffect(() => {
//     const loadProperties = async () => {
//       try {
//         const res = await getProperties();

//         const formatted = res.data.map((p) => ({
//           id: p._id,
//           slug: p.slug, // ✅ ADD THIS
//           title: p.overview?.title,
//           price: p.price,
//           rating: p.rating,
//           reviews: p.reviews,
//           distance: p.distance,
//           bedrooms: p.rooms?.length || 0,
//           bathrooms: p.bathrooms?.length || 0,
//           sleeps: p.sleeps,
//           guest: Number(p.guest) || 0,
//           category: p.category,
//           features: p.features || [],
//           lat: p.location?.lat,
//           lng: p.location?.lng,
//           images: p.gallery?.length ? [p.gallery[0].image] : [],
//         }));

//         setProperties(formatted);
//         setVisibleProperties(formatted);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     loadProperties();
//   }, []);

//   // FILTER
//   let filtered = properties.filter((p) => {
//     if (p.price < filters.minPrice) return false;
//     if (p.price > filters.maxPrice) return false;

//     if (p.bedrooms < filters.bedrooms) return false;
//     if (p.bathrooms < filters.bathrooms) return false;
//     if (p.guest < filters.guest) return false;

//     // if (
//     //   filters.popular.length > 0 &&
//     //   !filters.popular.every((f) => p.features.includes(f))
//     // ) {
//     //   return false;
//     // }

//     if (filters.popular.length > 0 && !filters.popular.includes(p.category)) {
//       return false;
//     }

//     return true;
//   });

//   // SORT
//   if (filters.sort === "priceLow") {
//     filtered.sort((a, b) => a.price - b.price);
//   }

//   if (filters.sort === "priceHigh") {
//     filtered.sort((a, b) => b.price - a.price);
//   }

//   if (filters.sort === "rating") {
//     filtered.sort((a, b) => b.rating - a.rating);
//   }

//   if (filters.sort === "reviews") {
//     filtered.sort((a, b) => b.reviews - a.reviews);
//   }

//   return (
//     <>
//       <Header />

//       <div className="h-screen max-w-[1140px] mx-auto mt-2 pb-20 px-4 sm:px-6 lg:px-0 flex flex-col">
//         <FiltersBar />

//         <div className="grid grid-cols-12 h-full py-4">
//           {/* LEFT LIST */}
//           <div className="col-span-7 overflow-y-auto pr-4">
//             <PropertyList
//               properties={filtered}
//               hoveredId={hoveredId}
//               setHoveredId={setHoveredId}
//               selectedId={selectedId}
//             />
//           </div>

//           {/* RIGHT MAP */}
//           <div className="col-span-5">
//             <MapView
//               properties={filtered}
//               hoveredId={hoveredId}
//               setSelectedId={setSelectedId}
//               setVisibleProperties={setVisibleProperties}
//             />
//           </div>
//         </div>
//       </div>

//       <TestimonialSection />
//       <Awards />
//       <Footer />
//     </>
//   );
// };

// export default ListingsPage;


"use client";

import React, { useEffect, useState, useMemo } from "react";

import PropertyList from "./PropertyList";
import MapView from "./MapView";
import FiltersBar from "./FiltersBar";

import TestimonialSection from "@/components/TestimonialSection";
import Awards from "@/components/Awards";

import { useFilters } from "@/context/FilterContext";
import { getProperties } from "@/api/propertiesApi";


const ListingsPage = () => {
  const { filters } = useFilters();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [hoveredId, setHoveredId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  /* ================= FETCH ================= */
  useEffect(() => {
    const loadProperties = async () => {
      try {
        const res = await getProperties();

        const formatted = res.data.map((p) => ({
          id: p._id,
          slug: p.slug,
          title: p.overview?.title,
          price: p.price,
          rating: p.rating,
          reviews: p.reviews,
          distance: p.distance,
          bedrooms: p.rooms?.length || 0,
          bathrooms: p.bathrooms?.length || 0,
          sleeps: p.sleeps,
          guest: Number(p.guest) || 0,
          category: p.category,
          features: p.features || [],
          lat: p.location?.lat,
          lng: p.location?.lng,
          images: p.gallery?.length ? [p.gallery[0].image] : [],
        }));

        setProperties(formatted);
      } catch (err) {
        console.error("Error loading properties:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  /* ================= FILTER + SORT ================= */
  const filteredProperties = useMemo(() => {
    let result = properties.filter((p) => {
      if (p.price < filters.minPrice) return false;
      if (p.price > filters.maxPrice) return false;

      if (p.bedrooms < filters.bedrooms) return false;
      if (p.bathrooms < filters.bathrooms) return false;
      if (p.guest < filters.guest) return false;

      if (
        filters.popular.length > 0 &&
        !filters.popular.includes(p.category)
      ) {
        return false;
      }

      return true;
    });

    // ⚠️ IMPORTANT: clone before sort
    result = [...result];

    if (filters.sort === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    }

    if (filters.sort === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    }

    if (filters.sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (filters.sort === "reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [properties, filters]);

  /* ================= UI ================= */

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading properties...
      </div>
    );
  }

  return (
    <>
    <div className="h-screen max-w-[1140px] mx-auto mt-2 pb-20 px-4 sm:px-6 lg:px-0 flex flex-col">
      <FiltersBar />

      <div className="grid grid-cols-12 h-full py-4">
        {/* LEFT LIST */}
        <div className="col-span-7 overflow-y-auto pr-4">
          <PropertyList
            properties={filteredProperties}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            selectedId={selectedId}
          />
        </div>

        {/* RIGHT MAP */}
        <div className="col-span-5">
          <MapView
            properties={filteredProperties}
            hoveredId={hoveredId}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>

    
    </div>
      <TestimonialSection />
      <Awards />
      
      </>
  );
};

export default ListingsPage;