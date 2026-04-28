


// import React, { useState, useEffect } from "react";
// import { getActivity } from "../../api/activityApi";
// import { useParams, Link } from "react-router-dom";

// const ActivityDetails = () => {
//   const { id } = useParams();
//   const [activity, setActivity] = useState(null);

//   useEffect(() => {
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

//   if (!activity) return <p className="text-center mt-10">Loading activity...</p>;

//   return (
//     <div className="p-6 max-w-5xl mx-auto mt-10">
//       {/* Back Link */}
//       <Link
//         to={`/la/destination/${activity.destination?._id}`}
//         className="text-blue-600 hover:underline mb-4 block"
//       >
//         &larr; Back to Destination
//       </Link>

//       {/* Title */}
//       <h2 className="text-3xl font-bold mb-4">{activity.activityName}</h2>

//       {/* Banner Image */}
//       {activity.bannerImage && (
//         <img
//           src={activity.bannerImage}
//           alt={activity.activityName}
//           className="w-full h-72 object-cover rounded mb-4"
//         />
//       )}

//       {/* Overview */}
//       <p className="text-gray-700 mb-2">{activity.overview}</p>

//       {/* Basic Info */}
//       <div className="mt-4 bg-gray-50 p-4 rounded-lg">
//         <p><strong>Destination:</strong> {activity.destination?.name}</p>
//         <p><strong>Category:</strong> {activity.category?.name || activity.category}</p>
//         <p><strong>Price Per Person:</strong> ₹{activity.pricePerPerson}</p>
//         <p><strong>Minimum Person:</strong> {activity.minPerson}</p>
//       </div>

//       {/* Gallery */}
//       {activity.galleryImages?.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold mt-6 mb-2">Gallery</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//             {activity.galleryImages.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`gallery-${i}`}
//                 className="h-40 w-full object-cover rounded shadow-sm"
//               />
//             ))}
//           </div>
//         </>
//       )}

//       {/* Facilities */}
//       {activity.facilities?.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold mt-6 mb-2">Facilities</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {activity.facilities.map((f, i) => (
//               <div key={i} className="p-3 border rounded-lg bg-white shadow-sm">
//                 <p className="font-semibold text-gray-800">{f.title}</p>
//                 <p className="text-sm text-gray-600">{f.description}</p>
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {/* Highlights */}
//       {activity.highlights?.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold mt-6 mb-2">Highlights</h3>
//           <ul className="list-disc pl-6 space-y-1 text-gray-700">
//             {activity.highlights.map((h, i) => (
//               <li key={i}>{h}</li>
//             ))}
//           </ul>
//         </>
//       )}

//       {/* Full Description */}
//       {activity.fullDescription?.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold mt-6 mb-2">Full Description</h3>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             {activity.fullDescription.map((desc, i) => (
//               <li key={i}>{desc}</li>
//             ))}
//           </ul>
//         </>
//       )}

//       {/* Included Items */}
//       {activity.include?.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold mt-6 mb-2">Included</h3>
//           <ul className="list-disc pl-6 space-y-1 text-gray-700">
//             {activity.include.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </>
//       )}

//       {/* Excluded Items */}
//       {activity.exclude?.length > 0 && (
//         <>
//           <h3 className="text-xl font-semibold mt-6 mb-2">Excluded</h3>
//           <ul className="list-disc pl-6 space-y-1 text-gray-700">
//             {activity.exclude.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </>
//       )}

//       {/* Important Info */}
//       {activity.importantInfo && (
//         <>
//           <h3 className="text-xl font-semibold mt-6 mb-2">Important Information</h3>
//           <p className="text-gray-700">{activity.importantInfo}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ActivityDetails;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getActivity } from "../../api/activityApi";
import { Check, X } from "lucide-react";

const ActivityDetails = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await getActivity(id);
        setActivity(res.data);
      } catch (err) {
        console.error("Error fetching activity:", err);
      }
    };
    fetchActivity();
  }, [id]);

  if (!activity) return <p className="text-center mt-10">Loading activity...</p>;

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 py-20 space-y-10">
      {/* 🔙 Back Link */}
      <Link
        to={`/la/destination/${activity.destination?._id}`}
        className="text-blue-600 hover:underline mb-4 block"
      >
        &larr; Back to Destination
      </Link>

      {/* 🏞️ Banner + Title */}
      {activity.bannerImage && (
        <img
          src={activity.bannerImage}
          alt={activity.activityName}
          className="w-full h-72 object-cover rounded mb-6"
        />
      )}
      <h2 className="text-3xl font-bold text-[#2e2c2d] mb-2">
        {activity.activityName}
      </h2>
      <p className="text-[#5c5e62]">{activity.overview}</p>

      {/* Divider */}
      <div className="h-[1px] bg-[#ebebeb] w-3/4"></div>

      {/* 🌟 Highlights */}
      {activity.highlights?.length > 0 && (
        <div className="flex">
          <div className="w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Highlights
            </h3>
          </div>
          <div className="w-2/4">
            <ul className="list-disc list-inside text-[#5c5e62] space-y-1">
              {activity.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

      {/* 📝 Full Description */}
      {activity.fullDescription?.length > 0 && (
        <div className="flex">
          <div className="w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Full description
            </h3>
          </div>
          <div className="w-2/4 space-y-2 text-[#5c5e62] leading-relaxed">
            {activity.fullDescription.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
        </div>
      )}

      <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

      {/* ✅ Includes / ❌ Excludes */}
      {(activity.include?.length > 0 || activity.exclude?.length > 0) && (
        <div className="flex">
          <div className="w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Includes / Excludes
            </h3>
          </div>
          <div className="w-2/4 space-y-2">
            {activity.include?.map((item, i) => (
              <div key={i} className="flex items-center text-[#2e2c2d]">
                <Check className="text-green-600 w-5 h-5 mr-2" />
                {item}
              </div>
            ))}
            {activity.exclude?.map((item, i) => (
              <div key={i} className="flex items-center text-[#2e2c2d]">
                <X className="text-red-600 w-5 h-5 mr-2" />
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

      {/* ⚠️ Important Information */}
      {activity.importantInfo && (
        <div className="flex">
          <div className="w-1/4">
            <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
              Important <br /> information
            </h3>
          </div>
          <div className="w-2/4">
            <p className="font-[500] text-[#2e2c2d] mb-2">Know before you go</p>
            <p className="text-[#5c5e62]">{activity.importantInfo}</p>
          </div>
        </div>
      )}

      {/* 📸 Gallery */}
      {activity.galleryImages?.length > 0 && (
        <>
          <div className="h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
          <div className="flex">
            <div className="w-1/4">
              <h3 className="font-[500] text-lg text-[#2e2c2d] mb-2">
                Gallery
              </h3>
            </div>
            <div className="w-2/4 grid grid-cols-2 md:grid-cols-3 gap-3">
              {activity.galleryImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`gallery-${i}`}
                  className="h-40 w-full object-cover rounded shadow-sm"
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityDetails;

