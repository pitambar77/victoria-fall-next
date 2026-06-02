

"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MapView({ properties, hoveredId, setSelectedId }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  /* ================= MAP MOVE ================= */
  const handleMove = (e) => {
    // ❌ removed setVisibleProperties → unnecessary
    // keep only if you really need viewport filtering
  };

  /* ================= SCROLL ================= */
  const scrollToCard = (id) => {
    const el = document.getElementById(`property-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  console.log("MAP TOKEN:", process.env.NEXT_PUBLIC_MAPBOX_TOKEN);

  return (
    <div className="relative w-full h-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} // ✅ FIX
        initialViewState={{
          latitude: -17.9243,
          longitude: 25.856,
          zoom: 11,
        }}
        onMoveEnd={handleMove}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {/* ================= MARKERS ================= */}
        {properties
          .filter((p) => p.lat && p.lng) // ✅ prevent crash
          .map((p) => (
            <Marker key={p.id} latitude={p.lat} longitude={p.lng}>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => {
                  setSelectedProperty(p);
                  setSelectedId?.(p.id);
                  scrollToCard(p.id);
                }}
              >
                {/* Price bubble */}
                <div
                  className={`px-3 py-1 rounded-full font-semibold shadow-md text-white transition
                  ${
                    selectedProperty?.id === p.id || hoveredId === p.id
                      ? "bg-[#aca188] scale-110"
                      : "bg-blue-600"
                  }`}
                >
                  ${p.price}
                </div>

                {/* Pointer */}
                <div
                  className={`w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px]
                  border-l-transparent border-r-transparent
                  ${
                    selectedProperty?.id === p.id || hoveredId === p.id
                      ? "border-t-[#aca188]"
                      : "border-t-blue-600"
                  }`}
                />
              </div>
            </Marker>
          ))}
      </Map>

      {/* ================= POPUP CARD ================= */}
      {selectedProperty && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[420px] bg-white rounded-md shadow-lg flex overflow-hidden z-20">
          {/* Image */}
          <div className="relative w-40 h-32">
            <Image
              src={selectedProperty.images?.[0] || "/placeholder.jpg"}
              alt={selectedProperty.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-3 flex flex-col justify-between flex-1">
            <div>
              <p className="text-sm text-gray-500">
                {selectedProperty.distance}
              </p>

              <h3 className="text-[16px] font-semibold capitalize">
                {selectedProperty.title}
              </h3>

              <p className="text-sm text-gray-600">
                Sleeps {selectedProperty.sleeps} · {selectedProperty.bedrooms}{" "}
                bedrooms · {selectedProperty.bathrooms} bathrooms
              </p>
            </div>

            <div className="flex justify-between items-end mt-2">
              <div className="text-sm">
                ⭐ {selectedProperty.rating} ({selectedProperty.reviews})
              </div>

              <div className="text-right">
                <div className="font-semibold">${selectedProperty.price}</div>
                <div className="text-xs text-gray-500">avg per night</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href={`/property/${selectedProperty.slug}`} // ✅ FIXED ROUTE
            className="absolute inset-0"
          />

          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // ✅ prevent navigation
              setSelectedProperty(null);
            }}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
