import { useState } from "react";
// import { useFilters } from "../../../FilterContext";
import PropertyCard from "./PropertyCard";

// const properties = [
//   {
//     id: "1",
//     title: "Spacious Home Pool Victoria Falls",
//     price: 500,
//     rating: 10,
//     reviews: 4,
//     distance: "0.6 mi (1 km)",
//     bedrooms: 2,
//     bathrooms: 4,
//     sleeps: 10,
//     features: ["House", "Pool", "Parking"],
//     lat: -17.9243,
//     lng: 25.856,
//     images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
//   },
//   {
//     id: "2",
//     title: "Luxury Pool Villa",
//     price: 600,
//     rating: 9,
//     reviews: 2,
//     distance: "10 mi (1 km)",
//     bedrooms: 1,
//     bathrooms: 3,
//     sleeps: 8,
//     features: ["House", "Hot tub", "King bed"],
//     lat: -17.92,
//     lng: 25.85,
//     images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
//   },
//   {
//     id: "3",
//     title: "Budget Pool House",
//     price: 200,
//     rating: 10,
//     reviews: 4,
//     distance: "10 mi (5 km)",
//     bedrooms: 8,
//     bathrooms: 4,
//     sleeps: 10,
//     features: ["House", "Pool"],
//     lat: -17.9243,
//     lng: 25.856,
//     images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
//   },
//   {
//     id: "4",
//     title: "Luxury Villa",
//     price: 600,
//     rating: 9,
//     reviews: 2,
//     distance: "0.6 mi (1 km) to Victora Falls",
//     bedrooms: 3,
//     bathrooms: 3,
//     sleeps: 8,
//     features: ["House", "Parking"],
//     lat: -17.92,
//     lng: 25.85,
//     images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
//   },
//   {
//     id: "5",
//     title: "Pool Retreat",
//     price: 300,
//     rating: 10,
//     reviews: 4,
//     bedrooms: 2,
//     bathrooms: 4,
//     sleeps: 10,
//     features: ["Pool", "Parking"],
//     lat: -17.9243,
//     lng: 25.856,
//     images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
//   },
//   {
//     id: "6",
//     title: "Luxury King Suite Villa",
//     price: 620,
//     rating: 9,
//     reviews: 2,
//     distance: "0.6 mi (1 km) to Victora Falls",
//     bedrooms: 4,
//     bathrooms: 3,
//     sleeps: 8,
//     features: ["House", "King bed"],
//     lat: -17.92,
//     lng: 25.85,
//     images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
//   },
//   {
//     id: "7",
//     title: "Spacious Victoria Falls",
//     price: 500,
//     rating: 10,
//     reviews: 4,
//     bedrooms: 2,
//     bathrooms: 4,
//     sleeps: 10,
//     features: ["House", "Pool", "Parking"],
//     lat: -17.9243,
//     lng: 25.856,
//     images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
//   },
//   {
//     id: "8",
//     title: "Pool Villa",
//     price: 600,
//     rating: 9,
//     reviews: 2,
//     distance: "0.6 mi (1 km) to Victora Falls",
//     bedrooms: 1,
//     bathrooms: 3,
//     sleeps: 8,
//     features: ["House", "Hot tub", "King bed"],
//     lat: -17.92,
//     lng: 25.85,
//     images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
//   },
//   {
//     id: "9",
//     title: "Budget Pool ",
//     price: 200,
//     rating: 10,
//     reviews: 4,
//     bedrooms: 8,
//     bathrooms: 4,
//     sleeps: 10,
//     features: ["House", "Pool"],
//     lat: -17.9243,
//     lng: 25.856,
//     images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
//   },
//   {
//     id: "10",
//     title: "Luxury bhhg Villa",
//     price: 800,
//     rating: 9,
//     distance: "0.6 mi (1 km) to Victora Falls",
//     reviews: 2,
//     bedrooms: 3,
//     bathrooms: 3,
//     sleeps: 8,
//     features: ["House", "Parking"],
//     lat: -17.92,
//     lng: 25.85,
//     images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
//   },
//   {
//     id: "11",
//     title: "Pool Retreat",
//     price: 300,
//     rating: 10,
//     reviews: 4,
//     bedrooms: 2,
//     bathrooms: 4,
//     sleeps: 10,
//     features: ["Pool", "Parking"],
//     lat: -17.9243,
//     lng: 25.856,
//     images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6"],
//   },
//   {
//     id: "12",
//     title: "Luxury  Suite Villa",
//     price: 628,
//     rating: 9,
//     reviews: 2,
//     bedrooms: 9,
//     bathrooms: 13,
//     sleeps: 8,
//     features: ["House", "King bed"],
//     lat: -17.92,
//     lng: 25.85,
//     images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511"],
//   },
// ];

// export default function PropertyList({ properties }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 10;

//   // 3️⃣ PAGINATION
//   const totalPages = Math.ceil(filtered.length / cardsPerPage);

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;

//   const currentCards = filtered.slice(indexOfFirstCard, indexOfLastCard);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       {/* Property Cards */}
//       <div className="space-y-4">
//         {currentCards.map((p) => (
//           <PropertyCard key={p.id} property={p} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center mt-10 space-x-2 ">
//         {/* Prev */}
//         <button
//           onClick={() => goToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188] cursor-pointer"
//         >
//           Prev
//         </button>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, idx) => (
//           <button
//             key={idx}
//             onClick={() => goToPage(idx + 1)}
//             className={`px-3 py-1 rounded-md border border-[#aca188] text-sm cursor-pointer ${
//               currentPage === idx + 1
//                 ? "bg-[#aca188] text-white"
//                 : "bg-white text-[#2e2c2d]  hover:bg-gray-100"
//             }`}
//           >
//             {idx + 1}
//           </button>
//         ))}

//         {/* Next */}
//         <button
//           onClick={() => goToPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188] cursor-pointer"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

export default function PropertyList({
  properties,
  hoveredId,
  setHoveredId,
  selectedId,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const totalPages = Math.ceil(properties.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const currentCards = properties.slice(indexOfFirstCard, indexOfLastCard);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="space-y-4">
        {currentCards.map((p) => (
          <div 
          key={p.id}
            id={`property-${p.id}`}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`transition ${
              hoveredId === p.id ? " cursor-pointer " : ""
            }`}>
            <PropertyCard  property={p} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx + 1)}
            className={`px-3 py-1 rounded-md border border-[#aca188] text-sm ${
              currentPage === idx + 1
                ? "bg-[#aca188] text-white"
                : "bg-white text-[#2e2c2d]"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
