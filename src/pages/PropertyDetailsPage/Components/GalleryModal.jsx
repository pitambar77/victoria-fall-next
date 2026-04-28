// import { useState } from "react";

// import { BsArrowLeftCircle } from "react-icons/bs";

// export default function GalleryModal({ gallery, close }) {
//   const categories = ["All photos", ...Object.keys(gallery)];
//   const [active, setActive] = useState("All photos");

//   const allImages = Object.values(gallery).flat();
//   const images = active === "All photos" ? allImages : gallery[active];

//   return (
//     <div className=" hd fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">

//       {/* MODAL */}
//       <div className="bg-white w-full max-w-[1200px] h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">

//         {/* HEADER */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-300 bg-white">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={close}
//               className="flex items-center gap-2 text-gray-700 hover:text-black"
//             >
//               <BsArrowLeftCircle size={24} className=" hover:text-[#ab8c51] cursor-pointer" />
//               <span className="font-medium">Photo gallery</span>
//             </button>
//           </div>

//           <button className="bg-[#ab8c51] text-white px-5 py-2 rounded-full text-sm font-medium">
//             Return to property
//           </button>
//         </div>

//         {/* CATEGORY TABS */}
//         <div className=" hd flex gap-4 p-6 border-b border-gray-300 overflow-x-auto bg-white">
//           {categories.map((cat, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(cat)}
//               className={`relative min-w-[160px] h-[100px] rounded-xl overflow-hidden border-2 ${
//                 active === cat ? "border-[#ab8c51]" : "border-transparent"
//               }`}
//             >
//               <img
//                 src={cat === "All photos" ? allImages[0] : gallery[cat][0]}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               <div className="hd absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-semibold">
//                 {cat}
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* SCROLLABLE CONTENT */}
//         <div className=" hd flex-1 overflow-y-auto px-6 py-6">

//           <h3 className="text-2xl font-semibold mb-6">
//             {active} ({images.length})
//           </h3>

//           <div className="grid grid-cols-2 gap-6 pb-10">
//             {images.map((img, i) => (
//               <div key={i} className="rounded-xl overflow-hidden">
//                 <img
//                   src={img}
//                   className="w-full h-[360px] object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useMemo } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function GalleryModal({ images, close }) {
  /* =========================
     GROUP BY CATEGORY
  ========================= */

  const gallery = useMemo(() => {
    const grouped = {};

    images.forEach((item) => {
      const category = item.imageCategory || "Other";

      if (!grouped[category]) {
        grouped[category] = [];
      }

      grouped[category].push(item.image);
    });

    return grouped;
  }, [images]);

  const categories = ["All photos", ...Object.keys(gallery)];

  const [active, setActive] = useState("All photos");

  const allImages = Object.values(gallery).flat();

  const displayImages = active === "All photos" ? allImages : gallery[active];

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      {/* MODAL */}
      <div className="bg-white w-full max-w-[1200px] h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-gray-300">
          <button
            onClick={close}
            className="flex items-center gap-2 text-gray-700"
          >
            <BsArrowLeftCircle size={24} className="hover:text-[#ab8c51]" />
            <span className="font-medium">Photo gallery</span>
          </button>

          <button
            onClick={close}
            className="bg-[#ab8c51] text-white px-5 py-2 rounded-full text-sm"
          >
            Return to property
          </button>
        </div>

        {/* CATEGORY TABS */}

        <div className="flex gap-4 p-6 border-b border-gray-300 overflow-x-auto">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(cat)}
              className={`relative min-w-[160px] h-[100px] rounded-xl overflow-hidden border-2 ${
                active === cat ? "border-[#ab8c51]" : "border-transparent"
              }`}
            >
              <img
                src={cat === "All photos" ? allImages[0] : gallery[cat][0]}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-semibold">
                {cat}
              </div>
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <h3 className="text-2xl font-semibold mb-6">
            {active} ({displayImages.length})
          </h3>

          <div className="grid grid-cols-2 gap-6 pb-10">
            {displayImages.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <img src={img} className="w-full h-[360px] object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
