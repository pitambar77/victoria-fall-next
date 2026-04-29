// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Gallery from "@/components/Gallery";
// import { getRestaurantBySlug } from "@/api/restaurantApi";

// export default function RestaurantGallery() {
//   const params = useParams();
//   const slug = params?.slug;

//   const [restaurant, setRestaurant] = useState(null);

//   useEffect(() => {
//     if (!slug) return;

//     const fetchRestaurant = async () => {
//       try {
//         const res = await getRestaurantBySlug(slug);
//         setRestaurant(res.data);
//       } catch (err) {
//         console.error("Failed to fetch restaurant gallery", err);
//       }
//     };

//     fetchRestaurant();
//   }, [slug]);

//   if (!restaurant) return <p className="p-6">Loading...</p>;

//   if (!restaurant.galleryImages?.length)
//     return <p className="p-6">No images available.</p>;

//   return (
//     <div>
//       <Gallery
//         title={restaurant.name}
//         images={restaurant.galleryImages}
//         buttonText="VIEW ALL RESTAURANTS →"
//         showButton={true}
//       />
//     </div>
//   );
// }
