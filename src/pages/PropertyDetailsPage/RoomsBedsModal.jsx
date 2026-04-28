// import { X, BedDouble, ShowerHead, Toilet, Bath } from "lucide-react";
// import { useEffect } from "react";
// import { RxCrossCircled } from "react-icons/rx";

// export default function RoomsBedsModal({ close }) {
//   const bedrooms = [
//     { name: "Bedroom 1", bed: "1 Twin Bed" },
//     { name: "Bedroom 2", bed: "1 Twin Bed" },
//     { name: "Bedroom 3", bed: "1 King Bed" },
//     { name: "Bedroom 4", bed: "1 King Bed" },
//     { name: "Bedroom 5", bed: "1 Queen Bed" },
//   ];

//   const bathrooms = [
//     {
//       title: "Room 1 en-suite",
//       icons: [Toilet, ShowerHead],
//       text: "Toilet · Shower only",
//     },
//     {
//       title: "Room 2 En-suite",
//       icons: [Toilet, ShowerHead],
//       text: "Toilet · Shower only",
//     },
//     {
//       title: "Room 3 En-suite",
//       icons: [Toilet, ShowerHead],
//       text: "Toilet · Shower only",
//     },
//     {
//       title: "Room 4 and 5 Shared bathroom",
//       icons: [Bath, Toilet, ShowerHead],
//       text: "Bathtub · Toilet · Shower only",
//     },
//   ];

//   const spacesLeft = [
//     "Deck/patio",
//     "Dining",
//     "Seating for 10 people",
//     "Kitchen",
//   ];

//   const spacesRight = [
//     "A fully equipped Kitchen is included",
//     "Lawn/garden",
//     "Porch/veranda",
//     "Entertainment area with BBQ facilities and bar fridge.",
//   ];

//   useEffect(() => {
//   document.body.style.overflow = "hidden";
//   document.documentElement.style.overflow = "hidden";

//   return () => {
//     document.body.style.overflow = "auto";
//     document.documentElement.style.overflow = "auto";
//   };
// }, []);

//   return (
//     <div className=" hd fixed inset-0 bg-black/40 flex justify-center items-start pt-10 z-50">
//       {/* <div className="bg-white w-[900px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-10"> */}
//       <div className="bg-white w-[900px] max-h-[90vh] rounded-xl shadow-lg flex flex-col">
//         {/* Header */}

//         <div className="flex items-center gap-4 shadow rounded-t-2xl p-6 sticky top-0 bg-white z-10">
//           <button
//             onClick={close}
//             className="flex items-center justify-center cursor-pointer text-[#ab8c51] hover:text-[#dfab4b]"
//           >
//             <RxCrossCircled size={32} />
//           </button>

//           <h2 className="hd font-[500] text-xl text-[#2e2c2d] capitalize">
//             Rooms & beds
//           </h2>
//         </div>

//         <div className="overflow-y-auto p-10">

//         {/* Bedrooms */}
//         <h3 className="hd font-[500] text-xl text-[#2e2c2d] capitalize mb-6">
//           5 bedrooms <span className="text-gray-500">(sleeps 10)</span>
//         </h3>

//         <div className="grid grid-cols-2 gap-y-8 gap-x-20">
//           {bedrooms.map((room, i) => (
//             <div key={i} className="space-y-2">
//               <p className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
//                 {room.name}
//               </p>

//               <BedDouble size={34} strokeWidth={1.5} className=" text-[#ab8c51]" />

//               <p className=" hd text-[#2e2c2d]">{room.bed}</p>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-gray-300 my-10"></div>

//         {/* Bathrooms */}
//         <h3 className="hd font-[500] text-xl text-[#2e2c2d] capitalize mb-6">
//           4 bathrooms
//         </h3>

//         <div className="grid grid-cols-2 gap-y-10 gap-x-20">
//           {bathrooms.map((bath, i) => (
//             <div key={i} className="space-y-3">
//               <p className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
//                 {bath.title}
//               </p>

//               <div className="flex gap-3">
//                 {bath.icons.map((Icon, idx) => (
//                   <Icon key={idx} size={30} className=" text-[#ab8c51] " />
//                 ))}
//               </div>

//               <p className="hd text-[#2e2c2d]">{bath.text}</p>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-gray-300 my-10"></div>

//         {/* Spaces */}
//         <h3 className="hd font-[500] text-xl text-[#2e2c2d] capitalize mb-8">
//           Spaces
//         </h3>

//         <div className="grid grid-cols-2 gap-y-4 gap-x-20 text-lg text-gray-700">
//           <div className="space-y-4">
//             {spacesLeft.map((s, i) => (
//               <p key={i}>{s}</p>
//             ))}
//           </div>

//           <div className="space-y-4">
//             {spacesRight.map((s, i) => (
//               <p className="hd text-[#2e2c2d]" key={i}>
//                 {s}
//               </p>
//             ))}
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { BedDouble } from "lucide-react";
import { useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function RoomsBedsModal({ property, close }) {
  const bedrooms = property?.rooms || [];
  const bathrooms = property?.bathrooms || [];
  const spaces = property?.space || [];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="hd fixed inset-0 bg-black/40 flex justify-center items-start pt-10 z-50">
      <div className="bg-white w-[900px] max-h-[90vh] rounded-xl shadow-lg flex flex-col">
        {/* Header */}

        <div className="flex items-center gap-4 shadow rounded-t-2xl p-6 sticky top-0 bg-white z-10">
          <button
            onClick={close}
            className="flex items-center justify-center cursor-pointer text-[#ab8c51] hover:text-[#dfab4b]"
          >
            <RxCrossCircled size={32} />
          </button>

          <h2 className="hd font-[500] text-xl text-[#2e2c2d] capitalize">
            Rooms & beds
          </h2>
        </div>

        <div className="overflow-y-auto p-10">
          {/* Bedrooms */}

          <h3 className="hd font-[500] text-xl text-[#2e2c2d] capitalize mb-6">
            {bedrooms.length} bedrooms
            <span className="text-gray-500">
              {" "}
              ({property?.sleeps || 0} sleeps)
            </span>
          </h3>

          <div className="grid grid-cols-2 gap-y-8 gap-x-20">
            {bedrooms.map((room) => (
              <div key={room._id} className="space-y-2">
                <p className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
                  {room.bedroomName}
                </p>

                <img src={room.icon} className="w-8 h-8" />

                <p className="hd text-[#2e2c2d]">{room.bed}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 my-10"></div>

          {/* Bathrooms */}

          <h3 className="hd font-[500] text-xl text-[#2e2c2d] capitalize mb-6">
            {bathrooms.length} bathrooms
          </h3>

          <div className="grid grid-cols-2 gap-y-10 gap-x-20">
            {bathrooms.map((bath) => (
              <div key={bath._id} className="space-y-3">
                <p className="hd font-[500] text-lg text-[#2e2c2d] capitalize">
                  {bath.bathName}
                </p>

                <div className="flex gap-3">
                  {bath.bathdetails.map((detail) => (
                    <img
                      key={detail._id}
                      src={detail.icon}
                      className="w-7 h-7"
                      title={detail.name}
                    />
                  ))}
                </div>

                <p className="hd text-[#2e2c2d]">
                  {bath.bathdetails.map((d) => d.name).join(" · ")}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 my-10"></div>

          {/* Spaces */}

          <h3 className="hd font-[500] text-xl text-[#2e2c2d] capitalize mb-8">
            Spaces
          </h3>

          <div className="grid grid-cols-2 gap-y-4 gap-x-20 text-lg text-gray-700">
            {spaces.map((space) => (
              <div key={space._id} className="flex items-center gap-3">
                <img src={space.icon} className="w-6 h-6" />

                {space.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
