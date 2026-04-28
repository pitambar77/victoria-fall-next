// import { useState } from "react";
// import {
//   addBasicAmenity,
//   updateBasicAmenity,
//   deleteBasicAmenity,
//   addAdditionalAmenity,
//   updateAdditionalAmenity,
//   deleteAdditionalAmenity,
// } from "../../api/propertiesApi";

// export default function AmenitiesSection({ property, setProperty }) {
//   const [basicName, setBasicName] = useState("");
//   const [basicIcon, setBasicIcon] = useState(null);

//   const [additionalName, setAdditionalName] = useState("");
//   const [additionalIcon, setAdditionalIcon] = useState(null);

//   /* ================= BASIC ================= */

//   const submitBasic = async () => {
//     const formData = new FormData();
//     formData.append("aminityName", basicName);
//     formData.append("icon", basicIcon);

//     const res = await addBasicAmenity(property._id, formData);

//     setProperty(res.data);

//     setBasicName("");
//     setBasicIcon(null);
//   };

//   const updateBasic = async (amenity) => {
//     const formData = new FormData();
//     formData.append("aminityName", amenity.aminityName);

//     if (amenity.newIcon) {
//       formData.append("icon", amenity.newIcon);
//     }

//     const res = await updateBasicAmenity(property._id, amenity._id, formData);
//     setProperty(res.data);
//   };

//   const removeBasic = async (id) => {
//     const res = await deleteBasicAmenity(property._id, id);
//     setProperty(res.data);
//   };

//   const changeBasic = (index, field, value) => {
//     const updated = [...property.aminities.basic];
//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         basic: updated,
//       },
//     });
//   };

//   const changeBasicIcon = (index, file) => {
//     const updated = [...property.aminities.basic];
//     updated[index].newIcon = file;

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         basic: updated,
//       },
//     });
//   };

//   /* ================= ADDITIONAL ================= */

//   const submitAdditional = async () => {
//     const formData = new FormData();
//     formData.append("aminityName", additionalName);
//     formData.append("icon", additionalIcon);

//     const res = await addAdditionalAmenity(property._id, formData);

//     setProperty(res.data);

//     setAdditionalName("");
//     setAdditionalIcon(null);
//   };

//   const updateAdditional = async (amenity) => {
//     const formData = new FormData();
//     formData.append("aminityName", amenity.aminityName);

//     if (amenity.newIcon) {
//       formData.append("icon", amenity.newIcon);
//     }

//     const res = await updateAdditionalAmenity(
//       property._id,
//       amenity._id,
//       formData,
//     );
//     setProperty(res.data);
//   };

//   const removeAdditional = async (id) => {
//     const res = await deleteAdditionalAmenity(property._id, id);
//     setProperty(res.data);
//   };

//   const changeAdditional = (index, field, value) => {
//     const updated = [...property.aminities.additional];
//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         additional: updated,
//       },
//     });
//   };

//   const changeAdditionalIcon = (index, file) => {
//     const updated = [...property.aminities.additional];
//     updated[index].newIcon = file;

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         additional: updated,
//       },
//     });
//   };

//   return (
//     <div className="space-y-12">
//       {/* BASIC AMENITIES */}

//       <div className="bg-white p-6 rounded-lg space-y-6">
//         <h2 className="text-xl font-semibold">Basic Amenities</h2>

//         {property.aminities?.basic?.map((amenity, i) => (
//           <div
//             key={amenity._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-4"
//           >
//             <input
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40"
//               value={amenity.aminityName}
//               onChange={(e) => changeBasic(i, "aminityName", e.target.value)}
//               placeholder="Amenity Name"
//             />

//             {/* ICON UPLOAD */}

//             <div className=" w-[180px]">
//               <label className="flex flex-col  border-2 border-dashed border-gray-300 rounded-lg p-5 cursor-pointer hover:border-blue-500 transition">
//                 {amenity.newIcon ? (
//                   <img
//                     src={URL.createObjectURL(amenity.newIcon)}
//                     className="w-16 h-16 object-contain"
//                   />
//                 ) : amenity.icon ? (
//                   <img
//                     src={amenity.icon}
//                     className="w-16 h-16 object-contain"
//                   />
//                 ) : (
//                   <>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-8 h-8 text-gray-400 mb-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                       />
//                     </svg>
//                     <span className="text-sm text-gray-500">
//                       Click to upload icon
//                     </span>
//                   </>
//                 )}

//                 <input
//                   type="file"
//                   hidden
//                   onChange={(e) => changeBasicIcon(i, e.target.files[0])}
//                 />
//               </label>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={() => updateBasic(amenity)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => removeBasic(amenity._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* ADD BASIC */}

//         <input
//           placeholder="Amenity Name"
//           className="w-full border border-gray-300 rounded-md p-3"
//           value={basicName}
//           onChange={(e) => setBasicName(e.target.value)}
//         />

//         <div className=" w-[180px]">
//           <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-5 cursor-pointer hover:border-blue-500">
//             {basicIcon ? (
//               <img
//                 src={URL.createObjectURL(basicIcon)}
//                 className="w-16 h-16 object-contain"
//               />
//             ) : (
//               <span className="text-sm text-gray-500">Upload icon</span>
//             )}

//             <input
//               type="file"
//               hidden
//               onChange={(e) => setBasicIcon(e.target.files[0])}
//             />
//           </label>
//         </div>
//         <button
//           onClick={submitBasic}
//           className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
//         >
//           Add Basic Amenity
//         </button>
//       </div>

//       {/* ADDITIONAL AMENITIES */}

//       <div className="bg-white p-6 rounded-lg space-y-6">
//         <h2 className="text-xl font-semibold">Additional Amenities</h2>

//         {property.aminities?.additional?.map((amenity, i) => (
//           <div
//             key={amenity._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-4"
//           >
//             <input
//               className="w-full border border-gray-300 rounded-md p-3"
//               value={amenity.aminityName}
//               onChange={(e) =>
//                 changeAdditional(i, "aminityName", e.target.value)
//               }
//             />

//             <div className=" w-[180px]">
//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-5 cursor-pointer hover:border-blue-500">
//                 {amenity.newIcon ? (
//                   <img
//                     src={URL.createObjectURL(amenity.newIcon)}
//                     className="w-16 h-16 object-contain"
//                   />
//                 ) : amenity.icon ? (
//                   <img
//                     src={amenity.icon}
//                     className="w-16 h-16 object-contain"
//                   />
//                 ) : (
//                   <span className="text-sm text-gray-500">
//                     Click to upload icon
//                   </span>
//                 )}

//                 <input
//                   type="file"
//                   hidden
//                   onChange={(e) => changeAdditionalIcon(i, e.target.files[0])}
//                 />
//               </label>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={() => updateAdditional(amenity)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => removeAdditional(amenity._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}

//         <input
//           placeholder="Amenity Name"
//           className="w-full border border-gray-300 rounded-md p-3"
//           value={additionalName}
//           onChange={(e) => setAdditionalName(e.target.value)}
//         />
//         <div className=" w-[180px]">
//           <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-5 cursor-pointer hover:border-blue-500">
//             {additionalIcon ? (
//               <img
//                 src={URL.createObjectURL(additionalIcon)}
//                 className="w-16 h-16 object-contain"
//               />
//             ) : (
//               <span className="text-sm text-gray-500">Upload icon</span>
//             )}

//             <input
//               type="file"
//               hidden
//               onChange={(e) => setAdditionalIcon(e.target.files[0])}
//             />
//           </label>
//         </div>
//         <button
//           onClick={submitAdditional}
//           className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
//         >
//           Add Additional Amenity
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import IconPicker from "../../components/IconPicker";
import {
  addBasicAmenity,
  updateBasicAmenity,
  deleteBasicAmenity,
  addAdditionalAmenity,
  updateAdditionalAmenity,
  deleteAdditionalAmenity,
} from "../../api/propertiesApi";

export default function AmenitiesSection({ property, setProperty }) {
  const [basicName, setBasicName] = useState("");
  const [basicIcon, setBasicIcon] = useState("");

  const [additionalName, setAdditionalName] = useState("");
  const [additionalIcon, setAdditionalIcon] = useState("");

  /* ================= BASIC ================= */

  const submitBasic = async () => {
    const payload = {
      aminityName: basicName,
      icon: basicIcon,
    };

    const res = await addBasicAmenity(property._id, payload);

    setProperty(res.data);

    setBasicName("");
    setBasicIcon("");
  };

  const updateBasic = async (amenity) => {
    const payload = {
      aminityName: amenity.aminityName,
      icon: amenity.icon,
    };

    const res = await updateBasicAmenity(property._id, amenity._id, payload);

    setProperty(res.data);
  };

  const removeBasic = async (id) => {
    const res = await deleteBasicAmenity(property._id, id);
    setProperty(res.data);
  };

  const changeBasic = (index, field, value) => {
    const updated = [...property.aminities.basic];
    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated,
      },
    });
  };

  /* ================= ADDITIONAL ================= */

  const submitAdditional = async () => {
    const payload = {
      aminityName: additionalName,
      icon: additionalIcon,
    };

    const res = await addAdditionalAmenity(property._id, payload);

    setProperty(res.data);

    setAdditionalName("");
    setAdditionalIcon("");
  };

  const updateAdditional = async (amenity) => {
    const payload = {
      aminityName: amenity.aminityName,
      icon: amenity.icon,
    };

    const res = await updateAdditionalAmenity(
      property._id,
      amenity._id,
      payload
    );

    setProperty(res.data);
  };

  const removeAdditional = async (id) => {
    const res = await deleteAdditionalAmenity(property._id, id);
    setProperty(res.data);
  };

  const changeAdditional = (index, field, value) => {
    const updated = [...property.aminities.additional];
    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated,
      },
    });
  };

  return (
    <div className="space-y-12">

      {/* BASIC AMENITIES */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Basic Amenities</h2>

        {property.aminities?.basic?.map((amenity, i) => (
          <div
            key={amenity._id}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={amenity.aminityName}
              onChange={(e) => changeBasic(i, "aminityName", e.target.value)}
              placeholder="Amenity Name"
            />

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Amenity Icon
              </label>

              <IconPicker
                value={amenity.icon}
                onSelect={(iconName) => changeBasic(i, "icon", iconName)}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => updateBasic(amenity)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeBasic(amenity._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* ADD BASIC */}

        <input
          placeholder="Amenity Name"
          className="w-full border border-gray-300 rounded-md p-3"
          value={basicName}
          onChange={(e) => setBasicName(e.target.value)}
        />

        <IconPicker value={basicIcon} onSelect={setBasicIcon} />

        <button
          onClick={submitBasic}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Add Basic Amenity
        </button>
      </div>

      {/* ADDITIONAL AMENITIES */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Additional Amenities</h2>

        {property.aminities?.additional?.map((amenity, i) => (
          <div
            key={amenity._id}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={amenity.aminityName}
              onChange={(e) =>
                changeAdditional(i, "aminityName", e.target.value)
              }
            />

            <IconPicker
              value={amenity.icon}
              onSelect={(iconName) =>
                changeAdditional(i, "icon", iconName)
              }
            />

            <div className="flex gap-3">
              <button
                onClick={() => updateAdditional(amenity)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeAdditional(amenity._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <input
          placeholder="Amenity Name"
          className="w-full border border-gray-300 rounded-md p-3"
          value={additionalName}
          onChange={(e) => setAdditionalName(e.target.value)}
        />

        <IconPicker value={additionalIcon} onSelect={setAdditionalIcon} />

        <button
          onClick={submitAdditional}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Add Additional Amenity
        </button>
      </div>

    </div>
  );
}
