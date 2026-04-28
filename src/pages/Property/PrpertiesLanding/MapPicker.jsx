import Map, { Marker } from "react-map-gl/mapbox";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";

export default function MapPicker({ property, setProperty }) {
  const mapRef = useRef();
  const geocoderRef = useRef();

  useEffect(() => {
    if (!geocoderRef.current) return;

    const geocoder = new MapboxGeocoder({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      marker: false,
      placeholder: "Search location",
      mapboxgl: mapboxgl,
    });

    geocoder.on("result", (e) => {
      const [lng, lat] = e.result.center;

      const context = e.result.context || [];

      const city = context.find((c) => c.id.includes("place"))?.text || "";
      const country = context.find((c) => c.id.includes("country"))?.text || "";

      setProperty((prev) => ({
        ...prev,
        address: e.result.place_name,
        city: city,
        country: country,
        location: { lat, lng },
      }));
    });

    if (geocoderRef.current.childNodes.length === 0) {
      geocoderRef.current.appendChild(geocoder.onAdd(mapRef.current));
    }
  }, []);
  const handleClick = (e) => {
    const { lng, lat } = e.lngLat;

    setProperty((prev) => ({
      ...prev,
      location: { lat, lng },
    }));
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div ref={geocoderRef}></div>

      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          latitude: property.location?.lat || -17.9243,
          longitude: property.location?.lng || 25.856,
          zoom: 12,
        }}
        onClick={handleClick}
        style={{ width: "100%", height: "400px" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {property.location?.lat && (
          <Marker
            latitude={property.location.lat}
            longitude={property.location.lng}
          >
            <div className="bg-red-500 w-4 h-4 rounded-full border-2 border-white"></div>
          </Marker>
        )}
      </Map>
    </div>
  );
}
