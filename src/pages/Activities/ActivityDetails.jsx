

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { getActivity } from "@/api/activityApi";
// import { Check, X } from "lucide-react";

// const ActivityDetails = () => {
//   const params = useParams();
//   const id = params?.id;

//   const [activity, setActivity] = useState(null);

//   useEffect(() => {
//     if (!id) return;

//     const fetchActivity = async () => {
//       try {
//         const res = await getActivity(id);
//         setActivity(res.data);
//       } catch (err) {
//         console.error("Error fetching activity:", err);
//       }
//     };

//     fetchActivity();
//   }, [id]);

//   if (!activity)
//     return <p className="text-center mt-10">Loading activity...</p>;

//   return (
//     <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 py-20 space-y-10">
      
//       {/* 🔙 Back Link */}
//       <Link
//         href={`/la/destination/${activity?.destination?._id}`}
//         className="text-blue-600 hover:underline mb-4 block"
//       >
//         ← Back to Destination
//       </Link>

//       {/* 🏞️ Banner + Title */}
//       {activity.bannerImage && (
//         <img
//           src={activity.bannerImage}
//           alt={activity.activityName}
//           className="w-full h-72 object-cover rounded mb-6"
//         />
//       )}

//       <h2 className="text-3xl font-bold text-[#2e2c2d] mb-2">
//         {activity.activityName}
//       </h2>

//       <p className="text-[#5c5e62]">{activity.overview}</p>

//       {/* Divider */}
//       <div className="h-[1px] bg-[#ebebeb] w-3/4"></div>

//       {/* 🌟 Highlights */}
//       {activity.highlights?.length > 0 && (
//         <div className="flex">
//           <div className="w-1/4">
//             <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
//               Highlights
//             </h3>
//           </div>
//           <div className="w-2/4">
//             <ul className="list-disc list-inside text-[#5c5e62] space-y-1">
//               {activity.highlights.map((h, i) => (
//                 <li key={i}>{h}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

//       {/* 📝 Full Description */}
//       {activity.fullDescription?.length > 0 && (
//         <div className="flex">
//           <div className="w-1/4">
//             <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
//               Full description
//             </h3>
//           </div>
//           <div className="w-2/4 space-y-2 text-[#5c5e62] leading-relaxed">
//             {activity.fullDescription.map((desc, i) => (
//               <p key={i}>{desc}</p>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

//       {/* ✅ Includes / ❌ Excludes */}
//       {(activity.include?.length > 0 || activity.exclude?.length > 0) && (
//         <div className="flex">
//           <div className="w-1/4">
//             <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
//               Includes / Excludes
//             </h3>
//           </div>
//           <div className="w-2/4 space-y-2">
//             {activity.include?.map((item, i) => (
//               <div key={i} className="flex items-center text-[#2e2c2d]">
//                 <Check className="text-green-600 w-5 h-5 mr-2" />
//                 {item}
//               </div>
//             ))}
//             {activity.exclude?.map((item, i) => (
//               <div key={i} className="flex items-center text-[#2e2c2d]">
//                 <X className="text-red-600 w-5 h-5 mr-2" />
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

//       {/* ⚠️ Important Information */}
//       {activity.importantInfo && (
//         <div className="flex">
//           <div className="w-1/4">
//             <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
//               Important <br /> information
//             </h3>
//           </div>
//           <div className="w-2/4">
//             <p className="font-[500] text-[#2e2c2d] mb-2">
//               Know before you go
//             </p>
//             <p className="text-[#5c5e62]">{activity.importantInfo}</p>
//           </div>
//         </div>
//       )}

//       {/* 📸 Gallery */}
//       {activity.galleryImages?.length > 0 && (
//         <>
//           <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
//           <div className="flex">
//             <div className="w-1/4">
//               <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
//                 Gallery
//               </h3>
//             </div>
//             <div className="w-2/4 grid grid-cols-2 md:grid-cols-3 gap-3">
//               {activity.galleryImages.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   alt={`gallery-${i}`}
//                   className="h-40 w-full object-cover rounded shadow-sm"
//                 />
//               ))}
//             </div>
//             </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ActivityDetails;

import React from 'react'

const ActivityDetails = () => {
  return (
    <div>ActivityDetails</div>
  )
}

export default ActivityDetails