// import { useEffect, useState } from "react";
// import { getProperties, deleteProperty } from "../../api/propertiesApi";
// import { Link } from "react-router-dom";

// export default function PropertiesList() {
//   const [properties, setProperties] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 5;

//   useEffect(() => {
//     loadProperties();
//   }, []);

//   const loadProperties = async () => {
//     const res = await getProperties();
//     setProperties(res.data);
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Delete this property?");

//     if (!confirmDelete) return;

//     await deleteProperty(id);

//     setProperties(properties.filter((p) => p._id !== id));
//   };

//   /* ======================
//      SEARCH FILTER
//   ====================== */

//   const filtered = properties.filter((p) =>
//     p.overview?.title?.toLowerCase().includes(search.toLowerCase()),
//   );

//   /* ======================
//      PAGINATION
//   ====================== */

//   const totalPages = Math.ceil(filtered.length / itemsPerPage);

//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;

//   const currentData = filtered.slice(indexOfFirst, indexOfLast);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* HEADER */}

//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Properties</h1>

//         {/* SEARCH */}

//         <input
//           type="text"
//           placeholder="Search Properties"
//           className="border border-gray-300 p-2 rounded w-[250px]"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//         />
//       </div>

//       {/* TABLE */}

//       <div className="bg-white rounded-lg shadow overflow-x-auto">
//         <table className="w-full">
//           <thead className="border-b border-gray-400 bg-gray-50 text-left text-sm text-gray-600">
//             <tr>
//               <th className="p-4">Photo</th>
//               <th className="p-4">Property Info</th>
//               <th className="p-4">Location</th>
//               <th className="p-4">Price</th>
//               <th className="p-4">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {currentData.map((p) => (
//               <tr
//                 key={p._id}
//                 className="border-b border-gray-300 hover:bg-gray-50"
//               >
//                 {/* PHOTO */}

//                 <td className="p-4">
//                   <img
//                     src={p.gallery?.[0]?.image}
//                     className="w-28 h-20 object-cover rounded"
//                   />
//                 </td>

//                 {/* PROPERTY INFO */}

//                 <td className="p-4">
//                   <h2 className="font-semibold text-lg">
//                     {p.overview?.title || "Untitled Property"}
//                   </h2>

//                   <p className="text-sm text-gray-500 mt-1">
//                     Sleeps {p.sleeps} · {p.rooms?.length || 0} Bedrooms ·{" "}
//                     {p.bathrooms?.length || 0} Bathrooms
//                   </p>
//                 </td>

//                 {/* LOCATION */}

//                 <td className="p-4 text-gray-600">
//                   {p.city || "Unknown"}, {p.country}
//                 </td>

//                 {/* PRICE */}

//                 <td className="p-4 text-green-600 font-semibold">
//                   $
//                   {Number(
//                     String(p.price).replace(/[^0-9]/g, ""),
//                   ).toLocaleString()}
//                 </td>

//                 {/* ACTIONS */}

//                 <td className="p-4">
//                   <div className="flex gap-4 text-sm">
//                     <Link
//                       to={`${p.slug}`}
//                       className="text-blue-600 cursor-pointer hover:underline"
//                     >
//                       Edit
//                     </Link>

//                     <button
//                       onClick={() => handleDelete(p._id)}
//                       className="text-red-600 hover:underline cursor-pointer"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* PAGINATION */}

//       <div className="flex justify-between items-center mt-6">
//         <p className="text-sm text-gray-600">
//           Showing {indexOfFirst + 1} - {Math.min(indexOfLast, filtered.length)}{" "}
//           of {filtered.length}
//         </p>

//         <div className="flex gap-2">
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-3 py-1 border rounded disabled:opacity-40 cursor-pointer"
//           >
//             Prev
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => goToPage(i + 1)}
//               className={`px-3 py-1 border rounded ${
//                 currentPage === i + 1 ? "bg-[#ab8c51] text-white" : ""
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}

//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 border rounded disabled:opacity-40 cursor-pointer"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProperties, deleteProperty } from "@/api/propertiesApi";

export default function PropertiesList() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  /* ================= FETCH ================= */
  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const res = await getProperties();
      setProperties(res.data || []);
    } catch (err) {
      console.error("Error loading properties:", err);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this property?");
    if (!confirmDelete) return;

    try {
      await deleteProperty(id);
      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  /* ================= SEARCH ================= */
  const filtered = properties.filter((p) =>
    p.overview?.title?.toLowerCase().includes(search.toLowerCase()),
  );

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentData = filtered.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Properties</h1>

        <input
          type="text"
          placeholder="Search Properties"
          className="border border-gray-300 p-2 rounded w-[250px]"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-400 bg-gray-50 text-left text-sm text-gray-600">
            <tr>
              <th className="p-4">Photo</th>
              <th className="p-4">Property Info</th>
              <th className="p-4">Location</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((p) => (
              <tr
                key={p._id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                {/* PHOTO */}
                <td className="p-4">
                  <img
                    src={p.gallery?.[0]?.image}
                    alt="property"
                    className="w-28 h-20 object-cover rounded"
                  />
                </td>

                {/* INFO */}
                <td className="p-4">
                  <h2 className="font-semibold text-lg">
                    {p.overview?.title || "Untitled Property"}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Sleeps {p.sleeps} · {p.rooms?.length || 0} Bedrooms ·{" "}
                    {p.bathrooms?.length || 0} Bathrooms
                  </p>
                </td>

                {/* LOCATION */}
                <td className="p-4 text-gray-600">
                  {p.city || "Unknown"}, {p.country}
                </td>

                {/* PRICE */}
                <td className="p-4 text-green-600 font-semibold">
                  $
                  {Number(
                    String(p.price).replace(/[^0-9]/g, ""),
                  ).toLocaleString()}
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex gap-4 text-sm">
                    <Link
                      href={`/dashboard/properties/${p.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(p._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">
          Showing {indexOfFirst + 1} - {Math.min(indexOfLast, filtered.length)}{" "}
          of {filtered.length}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-[#ab8c51] text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
