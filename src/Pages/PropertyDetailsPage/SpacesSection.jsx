
// import { useState } from "react";
// import RoomsBedsModal from "./RoomsBedsModal";

// export default function SpacesSection({ property }) {
//   const [open, setOpen] = useState(false);

//   const allSpaces = property?.space || [];

//   // show only first 6
//   const spaces = allSpaces.slice(0, 6);

//   if (!allSpaces.length) return null;

//   return (
//     <div className="hd space-y-6">
//       {/* Title */}
//       <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase mb-6">
//         Spaces
//       </h2>

//       {/* Spaces list */}
//       <div className="space-y-4">
//         {spaces.map((item) => (
//           <div
//             key={item._id}
//             className="hd flex items-center gap-4 font-[500] text-lg text-[#2e2c2d]"
//           >
//             <img
//               src={item.icon}
//               className="w-6 h-6 object-contain"
//               alt={item.title}
//             />

//             {item.title}
//           </div>
//         ))}
//       </div>

//       {/* show button only if more than 6 */}
//       {allSpaces.length > 6 && (
//         <button
//           onClick={() => setOpen(true)}
//           className="text-[#b18642] cursor-pointer font-medium hover:underline"
//         >
//           See all rooms and beds details
//         </button>
//       )}

//       {open && (
//         <RoomsBedsModal property={property} close={() => setOpen(false)} />
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import RoomsBedsModal from "./RoomsBedsModal";
import { amenityIcons } from "../../constants/amenityIcons";

export default function SpacesSection({ property }) {
  const [open, setOpen] = useState(false);

  const allSpaces = property?.space || [];

  // show only first 6
  const spaces = allSpaces.slice(0, 6);

  if (!allSpaces.length) return null;

  return (
    <div className="hd space-y-6">
      {/* Title */}
      <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase mb-6">
        Spaces
      </h2>

      {/* Spaces list */}
      <div className="space-y-4">
        {spaces.map((item) => {
          const iconData = amenityIcons.find((i) => i.name === item.icon);
          const Icon = iconData?.icon;

          return (
            <div
              key={item._id}
              className="hd flex items-center gap-4 font-[500] text-lg text-[#2e2c2d]"
            >
              {Icon && <Icon size={22} color="#a57830" />}

              {item.title}
            </div>
          );
        })}
      </div>

      {/* show button only if more than 6 */}
      {allSpaces.length > 6 && (
        <button
          onClick={() => setOpen(true)}
          className="text-[#b18642] cursor-pointer font-medium hover:underline"
        >
          See all rooms and beds details
        </button>
      )}

      {open && (
        <RoomsBedsModal property={property} close={() => setOpen(false)} />
      )}
    </div>
  );
}
