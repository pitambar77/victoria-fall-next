// import { useState } from "react";
// import { addSpace, updateSpace, deleteSpace } from "../../api/propertiesApi";

// export default function SpaceSection({ property, setProperty }) {
//   const [title, setTitle] = useState("");
//   const [icon, setIcon] = useState(null);

//   /* ======================
//      ADD SPACE
//   ====================== */

//   const submitSpace = async () => {
//     const formData = new FormData();

//     formData.append("title", title);

//     if (icon) {
//       formData.append("icon", icon);
//     }

//     const res = await addSpace(property._id, formData);

//     setProperty(res.data);

//     setTitle("");
//     setIcon(null);
//   };

//   /* ======================
//      UPDATE SPACE
//   ====================== */

//   const updateSpaceItem = async (space) => {
//     const formData = new FormData();

//     formData.append("title", space.title);

//     if (space.newIcon) {
//       formData.append("icon", space.newIcon);
//     }

//     const res = await updateSpace(property._id, space._id, formData);

//     setProperty(res.data);
//   };

//   /* ======================
//      DELETE SPACE
//   ====================== */

//   const removeSpace = async (spaceId) => {
//     const res = await deleteSpace(property._id, spaceId);

//     setProperty(res.data);
//   };

//   /* ======================
//      CHANGE SPACE FIELD
//   ====================== */

//   const changeSpace = (index, value) => {
//     const updated = [...property.space];

//     updated[index].title = value;

//     setProperty({
//       ...property,
//       space: updated,
//     });
//   };

//   const changeIcon = (index, file) => {
//     const updated = [...property.space];

//     updated[index].newIcon = file;

//     setProperty({
//       ...property,
//       space: updated,
//     });
//   };

//   return (
//     <div className="space-y-10">
//       {/* EXISTING SPACE */}

//       <div className="bg-white p-6 rounded-lg space-y-6">
//         <h2 className="text-xl font-semibold">Space</h2>

//         {property.space?.map((space, i) => (
//           <div
//             key={space._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-4"
//           >
//             <input
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40"
//               value={space.title}
//               onChange={(e) => changeSpace(i, e.target.value)}
//               placeholder="Space Title (Kitchen / Patio / Living Room)"
//             />

//             {/* ICON UPLOAD */}

//             <div className=" w-[180px]">
//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
//                 {space.newIcon ? (
//                   <img
//                     src={URL.createObjectURL(space.newIcon)}
//                     className="w-20 h-20 object-contain"
//                   />
//                 ) : space.icon ? (
//                   <img src={space.icon} className="w-20 h-20 object-contain" />
//                 ) : (
//                   <div className="flex flex-col items-center text-gray-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-10 h-10 mb-2 text-gray-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                       />
//                     </svg>

//                     <span className="text-sm">Upload Space Icon</span>
//                   </div>
//                 )}

//                 <input
//                   type="file"
//                   hidden
//                   onChange={(e) => changeIcon(i, e.target.files[0])}
//                 />
//               </label>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => updateSpaceItem(space)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => removeSpace(space._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ADD SPACE */}

//       <div className="bg-white p-6 rounded-lg space-y-4">
//         <h2 className="text-xl font-semibold">Add Space</h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Space Title (Kitchen / Patio / Living Room)"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         {/* ICON UPLOAD */}
//         <div className=" w-[180px]">
//           <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
//             {icon ? (
//               <img
//                 src={URL.createObjectURL(icon)}
//                 className="w-20 h-20 object-contain"
//               />
//             ) : (
//               <div className="flex flex-col items-center text-gray-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-10 h-10 mb-2 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                   />
//                 </svg>

//                 <span className="text-sm">Upload Space Icon</span>
//               </div>
//             )}

//             <input
//               type="file"
//               hidden
//               onChange={(e) => setIcon(e.target.files[0])}
//             />
//           </label>
//         </div>
//         <button
//           onClick={submitSpace}
//           className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
//         >
//           Add Space
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import IconPicker from "../../components/IconPicker";
import { addSpace, updateSpace, deleteSpace } from "../../api/propertiesApi";

export default function SpaceSection({ property, setProperty }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  /* ======================
     ADD SPACE
  ====================== */

  const submitSpace = async () => {
    const payload = {
      title,
      icon,
    };

    const res = await addSpace(property._id, payload);

    setProperty(res.data);

    setTitle("");
    setIcon("");
  };

  /* ======================
     UPDATE SPACE
  ====================== */

  const updateSpaceItem = async (space) => {
    const payload = {
      title: space.title,
      icon: space.icon,
    };

    const res = await updateSpace(property._id, space._id, payload);

    setProperty(res.data);
  };

  /* ======================
     DELETE SPACE
  ====================== */

  const removeSpace = async (spaceId) => {
    const res = await deleteSpace(property._id, spaceId);

    setProperty(res.data);
  };

  /* ======================
     CHANGE SPACE FIELD
  ====================== */

  const changeSpace = (index, field, value) => {
    const updated = [...property.space];

    updated[index][field] = value;

    setProperty({
      ...property,
      space: updated,
    });
  };

  return (
    <div className="space-y-10">
      {/* EXISTING SPACE */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Space</h2>

        {property.space?.map((space, i) => (
          <div
            key={space._id}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={space.title}
              onChange={(e) => changeSpace(i, "title", e.target.value)}
              placeholder="Space Title"
            />

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Space Icon
              </label>

              <IconPicker
                value={space.icon}
                onSelect={(iconName) => changeSpace(i, "icon", iconName)}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => updateSpaceItem(space)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeSpace(space._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD SPACE */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Add Space</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Space Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <IconPicker value={icon} onSelect={setIcon} />

        <button
          onClick={submitSpace}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Add Space
        </button>
      </div>
    </div>
  );
}
