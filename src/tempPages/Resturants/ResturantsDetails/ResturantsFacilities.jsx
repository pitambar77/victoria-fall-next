// "use client";

// import React from "react";
// import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

// import Button from "../../../components/Button";

// const ResturantsFacilities = ({ restaurant }) => {
//   const handleClick = () => {
//     const formElement = document.getElementById("booking-form");
//     if (formElement) {
//       formElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   if (!restaurant) return <p className="p-6">Loading...</p>;

//   return (
//     <>
//       <div className="bg-[#f9f9f9] py-10 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-[1140px] mx-auto px-4">
//           {/* Left Content */}
//           <div className="text-[#5c5e62]">
//             <p className="tracking-[1px] text-[18px] mb-6">
//               {restaurant.subDescription}
//             </p>

//             {/* Opening / Closing */}
//             <div className="flex items-center gap-8 mb-6">
//               <div className="w-[50%]">
//                 <p className="text-sm uppercase font-[500] flex items-center gap-2">
//                   <FaClock className="text-[#aca188]" /> Opening Time
//                 </p>
//                 <p className="text-lg font-semibold">
//                   {restaurant.openingTime}
//                 </p>
//               </div>

//               <div className="w-[50%]">
//                 <p className="text-sm uppercase font-[500] flex items-center gap-2">
//                   <FaClock className="text-[#aca188]" /> Closing Time
//                 </p>
//                 <p className="text-lg font-semibold">
//                   {restaurant.closingTime}
//                 </p>
//               </div>
//             </div>

//             {/* Contact */}
//             <div className="mb-6">
//               <p className="text-sm uppercase font-[500] flex items-center gap-2">
//                 <FaClock className="text-[#aca188]" /> Contact
//               </p>
//               <p className="text-lg font-semibold">
//                 {restaurant.contactNumber}
//               </p>
//             </div>

//             {/* Address */}
//             <div className="mb-6">
//               <p className="text-sm uppercase font-[500] flex items-center gap-2 mb-2">
//                 <FaMapMarkerAlt className="text-[#aca188]" /> Address
//               </p>

//               <p className="tracking-[1px]">
//                 {restaurant.address1} <br />
//                 {restaurant.address2}
//               </p>
//             </div>

//             {/* CTA */}
//             <div className="flex items-center gap-6">
//               <Button
//                 onClick={handleClick}
//                 className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition"
//               >
//                 BOOK NOW
//               </Button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div>
//             <img
//               src={restaurant.overviewImage}
//               alt={restaurant.name}
//               className="w-full rounded-md shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ResturantsFacilities;

"use client";

import React, { useCallback } from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Button from "../../../components/Button";

const ResturantsFacilities = React.memo(({ restaurant }) => {
  const handleClick = useCallback(() => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  return (
    <section className="bg-[#f9f9f9] py-10 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-[1140px] mx-auto px-4">
        {/* Left Content */}
        <div className="text-[#5c5e62]">
          <p className="tracking-[1px] text-[18px] mb-6">
            {restaurant.subDescription}
          </p>

          {/* Opening / Closing */}
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[50%]">
              <p className="text-sm uppercase font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Opening Time
              </p>
              <p className="text-lg font-semibold">{restaurant.openingTime}</p>
            </div>

            <div className="w-[50%]">
              <p className="text-sm uppercase font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Closing Time
              </p>
              <p className="text-lg font-semibold">{restaurant.closingTime}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <p className="text-sm uppercase font-[500] flex items-center gap-2">
              <FaClock className="text-[#aca188]" /> Contact
            </p>
            <p className="text-lg font-semibold">{restaurant.contactNumber}</p>
          </div>

          {/* Address */}
          <div className="mb-6">
            <p className="text-sm uppercase font-[500] flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-[#aca188]" /> Address
            </p>

            <p className="tracking-[1px]">
              {restaurant.address1} <br />
              {restaurant.address2}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <Button
              onClick={handleClick}
              className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition"
            >
              BOOK NOW
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src={restaurant.overviewImage}
            alt={restaurant.name || "Restaurant image"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
});

export default ResturantsFacilities;
