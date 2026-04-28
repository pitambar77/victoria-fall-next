// import React, { useState } from "react";

// const FacilityManager = ({ facilities, setFacilities }) => {
//   const [facility, setFacility] = useState({ facilityName: "", icon: "" });

//   const addFacility = () => {
//     if (!facility.facilityName.trim()) return;
//     setFacilities([...facilities, facility]);
//     setFacility({ facilityName: "", icon: "" });
//   };

//   const removeFacility = (index) => {
//     setFacilities(facilities.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="border p-4 rounded mt-4">
//       <h3 className="text-lg font-semibold mb-2">Facilities</h3>

//       <div className="flex gap-2 mb-2">
//         <input
//           type="text"
//           placeholder="Facility Name"
//           value={facility.facilityName}
//           onChange={(e) =>
//             setFacility({ ...facility, facilityName: e.target.value })
//           }
//           className="border p-2 flex-1 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Icon (optional)"
//           value={facility.icon}
//           onChange={(e) => setFacility({ ...facility, icon: e.target.value })}
//           className="border p-2 flex-1 rounded"
//         />
//         <button
//           type="button"
//           onClick={addFacility}
//           className="bg-blue-600 text-white px-3 rounded"
//         >
//           Add
//         </button>
//       </div>

//       <ul className="space-y-1">
//         {facilities.map((f, i) => (
//           <li
//             key={i}
//             className="flex justify-between bg-gray-100 p-2 rounded items-center"
//           >
//             <span>
//               {f.icon && <i className={`mr-2 ${f.icon}`}></i>}
//               {f.facilityName}
//             </span>
//             <button
//               type="button"
//               onClick={() => removeFacility(i)}
//               className="text-red-600 text-sm"
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FacilityManager;


// import React, { useState } from "react";
// import API from "../api/axiosInstance"; // adjust path if needed

// const FacilityManager = ({ facilities, setFacilities, propertyId }) => {
//   const [facilityName, setFacilityName] = useState("");
//   const [icon, setIcon] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);

//   /* ================= ADD FACILITY ================= */
//   const addFacility = async () => {
//     if (!propertyId) {
//       alert("Save property first before adding facilities");
//       return;
//     }

//     if (!facilityName || !icon) {
//       alert("Facility name and icon are required");
//       return;
//     }

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("facilityName", facilityName);
//       formData.append("icon", icon);

//       const res = await API.post(
//         `/properties/${propertyId}/facility`,
//         formData
//       );

//       setFacilities(res.data.facilities);

//       // reset
//       setFacilityName("");
//       setIcon(null);
//       setPreview(null);
//     } catch (error) {
//       console.error("Add facility error:", error);
//       alert("Failed to add facility");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= DELETE FACILITY ================= */
//   const removeFacility = async (facilityId) => {
//     if (!window.confirm("Remove this facility?")) return;

//     try {
//       const res = await API.delete(
//         `/properties/${propertyId}/facility/${facilityId}`
//       );
//       setFacilities(res.data.facilities);
//     } catch (error) {
//       console.error("Delete facility error:", error);
//       alert("Failed to delete facility");
//     }
//   };

//   return (
//     <div className="border p-4 rounded mt-4">
//       <h3 className="text-lg font-semibold mb-3">Facilities</h3>

//       {/* ADD FACILITY */}
//       <div className="flex gap-2 mb-4 flex-wrap">
//         <input
//           type="text"
//           placeholder="Facility Name"
//           value={facilityName}
//           onChange={(e) => setFacilityName(e.target.value)}
//           className="border p-2 rounded flex-1"
//         />

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             setIcon(e.target.files[0]);
//             setPreview(URL.createObjectURL(e.target.files[0]));
//           }}
//           className="border p-2 rounded flex-1"
//         />

//         <button
//           type="button"
//           onClick={addFacility}
//           disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           {loading ? "Adding..." : "Add"}
//         </button>
//       </div>

//       {preview && (
//         <img
//           src={preview}
//           alt="Preview"
//           className="w-12 h-12 object-contain mb-3"
//         />
//       )}

//       {/* FACILITY LIST */}
//       <ul className="space-y-2">
//         {facilities.map((f) => (
//           <li
//             key={f._id}
//             className="flex items-center justify-between bg-gray-100 p-2 rounded"
//           >
//             <div className="flex items-center gap-3">
//               {f.icon && (
//                 <img
//                   src={f.icon}
//                   alt={f.facilityName}
//                   className="w-8 h-8 object-contain"
//                 />
//               )}
//               <span>{f.facilityName}</span>
//             </div>

//             <button
//               type="button"
//               onClick={() => removeFacility(f._id)}
//               className="text-red-600 text-sm"
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FacilityManager;

import React, { useState } from "react";
import API from "../api/axiosInstance";

const FacilityManager = ({ propertyId, facilities, refreshProperty }) => {
  const [facilityName, setFacilityName] = useState("");
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ================= ADD FACILITY ================= */
  const handleAddFacility = async () => {
    if (!facilityName || !icon) {
      alert("Facility name and icon are required");
      return;
    }

    const fd = new FormData();
    fd.append("facilityName", facilityName);
    fd.append("icon", icon);

    try {
      setLoading(true);
      await API.post(`/properties/${propertyId}/facility`, fd);
      setFacilityName("");
      setIcon(null);
      refreshProperty();
    } catch (error) {
      console.error("Add facility error:", error);
      alert("Failed to add facility");
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE FACILITY ================= */
  const handleDeleteFacility = async (facilityId) => {
    if (!window.confirm("Delete this facility?")) return;

    try {
      await API.delete(
        `/properties/${propertyId}/facility/${facilityId}`
      );
      refreshProperty();
    } catch (error) {
      console.error("Delete facility error:", error);
      alert("Failed to delete facility");
    }
  };

  return (
    <div className="border p-4 rounded-md space-y-4">
      <h3 className="text-lg font-semibold">Facilities</h3>

      {/* ADD FACILITY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          type="text"
          placeholder="Facility name (e.g. Swimming Pool)"
          value={facilityName}
          onChange={(e) => setFacilityName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setIcon(e.target.files[0])}
          className="border p-2 rounded"
        />

        <button
          type="button"
          onClick={handleAddFacility}
          disabled={loading}
          className="bg-blue-600 text-white rounded px-3 py-2"
        >
          {loading ? "Adding..." : "+ Add Facility"}
        </button>
      </div>

      {/* FACILITY LIST */}
      {facilities?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {facilities.map((facility) => (
            <div
              key={facility._id}
              className="border rounded p-3 text-center relative"
            >
              {facility.icon && (
                <img
                  src={facility.icon}
                  alt={facility.facilityName}
                  className="w-12 h-12 mx-auto object-contain mb-2"
                />
              )}
              <p className="text-sm font-medium">
                {facility.facilityName}
              </p>

              <button
                type="button"
                onClick={() => handleDeleteFacility(facility._id)}
                className="absolute top-1 right-1 text-xs bg-red-600 text-white px-1 rounded"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {facilities?.length === 0 && (
        <p className="text-sm text-gray-500">
          No facilities added yet.
        </p>
      )}
    </div>
  );
};

export default FacilityManager;


