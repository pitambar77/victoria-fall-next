// import { useState } from "react";

// import {
//   addBathroom,
//   deleteBathroom,
//   addBathroomDetail,
//   updateBathroomDetail,
//   deleteBathroomDetail,
// } from "../../api/propertiesApi";

// export default function BathroomsSection({ property, setProperty }) {
//   const [bathName, setBathName] = useState("");

//   const [detailName, setDetailName] = useState("");
//   const [detailIcon, setDetailIcon] = useState(null);

//   const [selectedBathroom, setSelectedBathroom] = useState("");

//   /* ======================
//      ADD BATHROOM
//   ====================== */

//   const submitBathroom = async () => {
//     const res = await addBathroom(property._id, {
//       bathName,
//     });

//     setProperty(res.data);
//     setBathName("");
//   };

//   /* ======================
//      DELETE BATHROOM
//   ====================== */

//   const removeBathroomItem = async (bathroomId) => {
//     const res = await deleteBathroom(property._id, bathroomId);

//     setProperty(res.data);
//   };

//   /* ======================
//      CHANGE BATH NAME
//   ====================== */

//   const changeBathroom = (index, value) => {
//     const updated = [...property.bathrooms];

//     updated[index].bathName = value;

//     setProperty({
//       ...property,
//       bathrooms: updated,
//     });
//   };

//   /* ======================
//      ADD DETAIL
//   ====================== */

//   const submitDetail = async () => {
//     const formData = new FormData();

//     formData.append("name", detailName);

//     if (detailIcon) {
//       formData.append("icon", detailIcon);
//     }

//     const res = await addBathroomDetail(
//       property._id,
//       selectedBathroom,
//       formData,
//     );

//     setProperty(res.data);

//     setDetailName("");
//     setDetailIcon(null);
//   };

//   /* ======================
//      UPDATE DETAIL
//   ====================== */

//   const updateDetailItem = async (bathroomId, detail) => {
//     const formData = new FormData();

//     formData.append("name", detail.name);

//     if (detail.newIcon) {
//       formData.append("icon", detail.newIcon);
//     }

//     const res = await updateBathroomDetail(
//       property._id,
//       bathroomId,
//       detail._id,
//       formData,
//     );

//     setProperty(res.data);
//   };

//   /* ======================
//      DELETE DETAIL
//   ====================== */

//   const removeDetailItem = async (bathroomId, detailId) => {
//     const res = await deleteBathroomDetail(property._id, bathroomId, detailId);

//     setProperty(res.data);
//   };

//   /* ======================
//      CHANGE DETAIL FIELD
//   ====================== */

//   const changeDetail = (bathIndex, detailIndex, field, value) => {
//     const updated = [...property.bathrooms];

//     updated[bathIndex].bathdetails[detailIndex][field] = value;

//     setProperty({
//       ...property,
//       bathrooms: updated,
//     });
//   };

//   const changeDetailIcon = (bathIndex, detailIndex, file) => {
//     const updated = [...property.bathrooms];

//     updated[bathIndex].bathdetails[detailIndex].newIcon = file;

//     setProperty({
//       ...property,
//       bathrooms: updated,
//     });
//   };

//   return (
//     <div className="space-y-10">
//       {/* EXISTING BATHROOMS */}

//       <div className="bg-white p-6 rounded-lg space-y-6">
//         <h2 className="text-xl font-semibold">Bathrooms</h2>

//         {property.bathrooms?.map((bathroom, i) => (
//           <div
//             key={bathroom._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-5"
//           >
//             <input
//               className="w-full border border-gray-300 rounded-md p-3"
//               value={bathroom.bathName}
//               onChange={(e) => changeBathroom(i, e.target.value)}
//               placeholder="Bathroom Name"
//             />

//             <button
//               onClick={() => removeBathroomItem(bathroom._id)}
//               className="bg-red-500 text-white px-4 py-1 rounded"
//             >
//               Delete Bathroom
//             </button>

//             {/* DETAILS */}

//             <div className="space-y-4">
//               {bathroom.bathdetails?.map((detail, j) => (
//                 <div
//                   key={detail._id}
//                   className="border border-gray-100 p-4 rounded-lg space-y-3"
//                 >
//                   <input
//                     className="w-full border border-gray-300 rounded-md p-3"
//                     value={detail.name}
//                     onChange={(e) => changeDetail(i, j, "name", e.target.value)}
//                     placeholder="Detail Name (Shower / Sink / Bathtub)"
//                   />

//                   {/* ICON UPLOAD */}
//                   <div className=" w-[180px]">
//                     <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500">
//                       {detail.newIcon ? (
//                         <img
//                           src={URL.createObjectURL(detail.newIcon)}
//                           className="w-16 h-16 object-contain"
//                         />
//                       ) : detail.icon ? (
//                         <img
//                           src={detail.icon}
//                           className="w-16 h-16 object-contain"
//                         />
//                       ) : (
//                         <div className="flex flex-col items-center text-gray-500">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="w-10 h-10 mb-2 text-gray-400"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeWidth={2}
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                             />
//                           </svg>

//                           <span className="text-sm">Upload Icon</span>
//                         </div>
//                       )}

//                       <input
//                         type="file"
//                         hidden
//                         onChange={(e) =>
//                           changeDetailIcon(i, j, e.target.files[0])
//                         }
//                       />
//                     </label>
//                   </div>
//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => updateDetailItem(bathroom._id, detail)}
//                       className="bg-blue-600 text-white px-3 py-1 rounded"
//                     >
//                       Update
//                     </button>

//                     <button
//                       onClick={() => removeDetailItem(bathroom._id, detail._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => setSelectedBathroom(bathroom._id)}
//               className="text-blue-600 text-sm"
//             >
//               Add Detail Below
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ADD BATHROOM */}

//       <div className="bg-white p-6 rounded-lg space-y-4">
//         <h2 className="text-xl font-semibold">Add Bathroom</h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Bathroom Name"
//           value={bathName}
//           onChange={(e) => setBathName(e.target.value)}
//         />

//         <button
//           onClick={submitBathroom}
//           className="bg-green-600 text-white px-5 py-2 rounded"
//         >
//           Add Bathroom
//         </button>
//       </div>

//       {/* ADD DETAIL */}

//       {selectedBathroom && (
//         <div className="bg-white p-6 rounded-lg space-y-4">
//           <h2 className="text-xl font-semibold">Add Bathroom Detail</h2>

//           <input
//             className="w-full border border-gray-300 rounded-md p-3"
//             placeholder="Detail Name"
//             value={detailName}
//             onChange={(e) => setDetailName(e.target.value)}
//           />

//           {/* ICON UPLOAD */}
//           <div className=" w-[180px]">
//             <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500">
//               {detailIcon ? (
//                 <img
//                   src={URL.createObjectURL(detailIcon)}
//                   className="w-16 h-16 object-contain"
//                 />
//               ) : (
//                 <span className="text-sm text-gray-500">
//                   Upload Detail Icon
//                 </span>
//               )}

//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => setDetailIcon(e.target.files[0])}
//               />
//             </label>
//           </div>
//           <button
//             onClick={submitDetail}
//             className="bg-green-600 text-white px-5 py-2 rounded"
//           >
//             Add Detail
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import IconPicker from "../../components/IconPicker";

import {
  addBathroom,
  deleteBathroom,
  addBathroomDetail,
  updateBathroomDetail,
  deleteBathroomDetail,
} from "../../api/propertiesApi";

export default function BathroomsSection({ property, setProperty }) {
  const [bathName, setBathName] = useState("");

  const [detailName, setDetailName] = useState("");
  const [detailIcon, setDetailIcon] = useState("");

  const [selectedBathroom, setSelectedBathroom] = useState("");

  /* ======================
     ADD BATHROOM
  ====================== */

  const submitBathroom = async () => {
    const res = await addBathroom(property._id, {
      bathName,
    });

    setProperty(res.data);

    setBathName("");
  };

  /* ======================
     DELETE BATHROOM
  ====================== */

  const removeBathroomItem = async (bathroomId) => {
    const res = await deleteBathroom(property._id, bathroomId);

    setProperty(res.data);
  };

  /* ======================
     CHANGE BATH NAME
  ====================== */

  const changeBathroom = (index, value) => {
    const updated = [...property.bathrooms];

    updated[index].bathName = value;

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  /* ======================
     ADD DETAIL
  ====================== */

  const submitDetail = async () => {
    const payload = {
      name: detailName,
      icon: detailIcon,
    };

    const res = await addBathroomDetail(
      property._id,
      selectedBathroom,
      payload,
    );

    setProperty(res.data);

    setDetailName("");
    setDetailIcon("");
  };

  /* ======================
     UPDATE DETAIL
  ====================== */

  const updateDetailItem = async (bathroomId, detail) => {
    const payload = {
      name: detail.name,
      icon: detail.icon,
    };

    const res = await updateBathroomDetail(
      property._id,
      bathroomId,
      detail._id,
      payload,
    );

    setProperty(res.data);
  };

  /* ======================
     DELETE DETAIL
  ====================== */

  const removeDetailItem = async (bathroomId, detailId) => {
    const res = await deleteBathroomDetail(property._id, bathroomId, detailId);

    setProperty(res.data);
  };

  /* ======================
     CHANGE DETAIL FIELD
  ====================== */

  const changeDetail = (bathIndex, detailIndex, field, value) => {
    const updated = [...property.bathrooms];

    updated[bathIndex].bathdetails[detailIndex][field] = value;

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  return (
    <div className="space-y-10">
      {/* EXISTING BATHROOMS */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Bathrooms</h2>

        {property.bathrooms?.map((bathroom, i) => (
          <div
            key={bathroom._id}
            className="border border-gray-200 p-4 rounded-lg space-y-5"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={bathroom.bathName}
              onChange={(e) => changeBathroom(i, e.target.value)}
              placeholder="Bathroom Name"
            />

            <button
              onClick={() => removeBathroomItem(bathroom._id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete Bathroom
            </button>

            {/* DETAILS */}

            <div className="space-y-4">
              {bathroom.bathdetails?.map((detail, j) => (
                <div
                  key={detail._id}
                  className="border border-gray-100 p-4 rounded-lg space-y-3"
                >
                  <input
                    className="w-full border border-gray-300 rounded-md p-3"
                    value={detail.name}
                    onChange={(e) => changeDetail(i, j, "name", e.target.value)}
                    placeholder="Detail Name"
                  />

                  <IconPicker
                    value={detail.icon}
                    onSelect={(iconName) =>
                      changeDetail(i, j, "icon", iconName)
                    }
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={() => updateDetailItem(bathroom._id, detail)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => removeDetailItem(bathroom._id, detail._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedBathroom(bathroom._id)}
              className="text-blue-600 text-sm"
            >
              Add Detail Below
            </button>
          </div>
        ))}
      </div>

      {/* ADD BATHROOM */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Add Bathroom</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Bathroom Name"
          value={bathName}
          onChange={(e) => setBathName(e.target.value)}
        />

        <button
          onClick={submitBathroom}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Add Bathroom
        </button>
      </div>

      {/* ADD DETAIL */}

      {selectedBathroom && (
        <div className="bg-white p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Add Bathroom Detail</h2>

          <input
            className="w-full border border-gray-300 rounded-md p-3"
            placeholder="Detail Name"
            value={detailName}
            onChange={(e) => setDetailName(e.target.value)}
          />

          <IconPicker value={detailIcon} onSelect={setDetailIcon} />

          <button
            onClick={submitDetail}
            className="bg-green-600 text-white px-5 py-2 rounded"
          >
            Add Detail
          </button>
        </div>
      )}
    </div>
  );
}
