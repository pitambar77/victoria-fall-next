// import { MapPin, Gem } from "lucide-react";

// export default function Highlights({ property }) {
//   const highlights = property?.highlights || [];

//   if (!highlights.length) return null;

//   // const highlights = [
//   //   {
//   //     icon: <Gem size={28} />,
//   //     title: "Outdoor pool",
//   //     description:
//   //       "The outdoor pool is a refreshing retreat under the open sky – a rare gem in this area.",
//   //   },
//   //   {
//   //     icon: <MapPin size={28} />,
//   //     title: "Discover nearby landmarks",
//   //     description: "Walk to Zambezi National Park",
//   //   },
//   // ];

//   return (
//     <div className="hd space-y-6">
//       <h2 className=" hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide uppercase mb-6">
//         Highlights
//       </h2>

//       <div className="space-y-8">
//         {highlights.map((item, index) => (
//           <div key={index} className="flex items-start gap-5">
//             {/* Icon Circle */}
//             <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f9f4e8] text-[#b08a4e] shrink-0">
//               {/* {item.icon} */}
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="w-8 h-8 object-contain"
//               />
//             </div>

//             {/* Text */}
//             <div>
//               <h3 className="hd font-[500] text-lg text-[#2e2c2d]">
//                 {item.title}
//               </h3>
//               <p className="text-[#2e2c2d] mt-1">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { amenityIcons } from "../../../constants/amenityIcons.js";

export default function Highlights({ property }) {
  const highlights = property?.highlights || [];

  if (!highlights.length) return null;

  return (
    <div className="hd space-y-6">
      <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase mb-6">
        Highlights
      </h2>

      <div className="space-y-8">
        {highlights.map((item, index) => {

          const iconData = amenityIcons.find((i) => i.name === item.icon);
          const Icon = iconData?.icon;

          return (
            <div key={index} className="flex items-start gap-5">
              {/* Icon Circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f9f4e8] text-[#b08a4e] shrink-0">
                {Icon && <Icon size={28} color="#b08a4e" />}
              </div>

              {/* Text */}
              <div>
                <h3 className="hd font-[500] text-lg text-[#2e2c2d]">
                  {item.title}
                </h3>

                <p className="text-[#2e2c2d] mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}