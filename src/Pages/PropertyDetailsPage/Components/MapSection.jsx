import { useState } from "react";
import { MapPin, Plane, ChevronRight } from "lucide-react";
import ExploreAreaModal from "./ExploreAreaModal";
import { amenityIcons } from "../../../constants/amenityIcons.js";

export default function ExploreAreaSection({ property }) {
  const [open, setOpen] = useState(false);

  const area = property?.area;
  const places = area?.relatedactivity || [];

  if (!area) return null;

  // const places = [
  //   {
  //     name: "Zambezi National Park",
  //     time: "15 min walk",
  //     icon: "location",
  //   },
  //   {
  //     name: "Victoria Falls National Park",
  //     time: "4 min drive",
  //     icon: "location",
  //   },
  //   {
  //     name: "Victoria Falls Bridge",
  //     time: "6 min drive",
  //     icon: "location",
  //   },
  //   {
  //     name: "Victoria Falls (VFA)",
  //     time: "23 min drive",
  //     icon: "plane",
  //   },
  // ];

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <h2 className="hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide uppercase mb-6">
        Explore the area
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* MAP CARD */}
        <div className="border border-gray-300 rounded-sm overflow-hidden">
          <div
            className="w-full h-[150px]"
            dangerouslySetInnerHTML={{ __html: area.maplink }}
          />
          <div className="p-4 space-y-2">
            <p className=" hd font-medium text-[#2e2c2d] ">
              {/* Victoria Falls, Matabeleland North Province */}
              {area.locationname}
            </p>

            <a
              href={`https://www.google.com/maps/search/${area.locationname}`}
              target="_blank"
              rel="noreferrer"
              className="flex text-sm items-center gap-2 font-medium hover:underline"
            >
              View in a map
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* NEARBY LIST */}
        <div className="space-y-6">
          {/* {places.map((place) => (
            
            <div
              key={place._id}
              className="hd flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img src={place.icon} className="w-6 h-6 object-contain " />

                <span className="hd font-[500] text-[#2e2c2d]">
                  {place.title}
                </span>
              </div>

              <span className="text-gray-600">{place.shortDescription}</span>
            </div>
          ))} */}

          {places.map((place) => {
            const iconData = amenityIcons.find((i) => i.name === place.icon);
            const Icon = iconData?.icon;

            return (
              <div
                key={place._id}
                className="hd flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  {Icon && <Icon size={22} color="#a57830" />}

                  <span className="hd font-[500] text-[#2e2c2d]">
                    {place.title}
                  </span>
                </div>

                <span className="text-gray-600">{place.shortDescription}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {/* <ExploreAreaModal open={open} onClose={() => setOpen(false)} /> */}
    </div>
  );
}

// import { ChevronRight } from "lucide-react";

// export default function ExploreAreaSection({ property }) {
//   const area = property?.area;
//   const places = area?.relatedactivity || [];

//   if (!area) return null;

//   return (
//     <div className="space-y-6">
//       {/* TITLE */}
//       <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase mb-6">
//         Explore the area
//       </h2>

//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         {/* MAP CARD */}
//         <div className="border border-gray-300 rounded-sm overflow-hidden">
//           {/* Map iframe from DB */}
//           <div
//             className="w-full h-[150px]"
//             dangerouslySetInnerHTML={{ __html: area.maplink }}
//           />

//           <div className="p-4 space-y-2">
//             <p className="hd font-medium text-[#2e2c2d]">{area.locationname}</p>

//             <a
//               href={`https://www.google.com/maps/search/${area.locationname}`}
//               target="_blank"
//               rel="noreferrer"
//               className="flex text-sm items-center gap-2 font-medium hover:underline"
//             >
//               View in a map
//               <ChevronRight size={18} />
//             </a>
//           </div>
//         </div>

//         {/* NEARBY LIST */}

//         <div className="space-y-6">
//           {places.map((place) => (
//             <div
//               key={place._id}
//               className="hd flex items-center justify-between"
//             >
//               <div className="flex items-center gap-4">
//                 <img src={place.icon} className="w-6 h-6 object-contain" />

//                 <span className="hd font-[500] text-[#2e2c2d]">
//                   {place.title}
//                 </span>
//               </div>

//               <span className="text-gray-600">{place.shortDescription}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
