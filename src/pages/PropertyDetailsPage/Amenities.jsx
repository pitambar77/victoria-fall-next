import { useState } from "react";
import {
  ChevronRight,
} from "lucide-react";
import AmenitiesModal from "./AmenitiesModal";



import { amenityIcons } from "@/constants/amenityIcons";
export default function Amenities({ property }) {
  const [open, setOpen] = useState(false);

  const allAmenities = property?.aminities?.basic || [];

  // show only first 6
  const popular = allAmenities.slice(0,6 );

  if (!allAmenities.length) return null;

  return (
    <div className="space-y-6">
      <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase mb-6">
        Popular amenities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20">
        {/* {popular.map((item) => (
          <div
            key={item._id}
            className="hd flex items-center gap-4 font-[500] text-[#2e2c2d]"
          >
            <img
              src={item.icon}
              alt={item.aminityName}
              className="w-7 h-7 object-contain"
            />

            {item.aminityName}
          </div>
        ))} */}
        {popular.map((item) => {
          const iconData = amenityIcons.find((i) => i.name === item.icon);
          const Icon = iconData?.icon;

          return (
            <div
              key={item._id}
              className="hd flex items-center gap-4 font-[500] text-[#2e2c2d]"
            >
              {Icon && <Icon size={22} color="#a57830" />}

              {item.aminityName}
            </div>
          );
        })}
      </div>

      {/* Show button only if more than 6 */}
      {allAmenities.length > 6 && (
        <button
          onClick={() => setOpen(true)}
          className="hd flex items-center gap-2 cursor-pointer text-[#b18642] font-medium hover:underline"
        >
          See all
          <ChevronRight size={18} />
        </button>
      )}

      {open && (
        <AmenitiesModal property={property} close={() => setOpen(false)} />
      )}
    </div>
  );
}


