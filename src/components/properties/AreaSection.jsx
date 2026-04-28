// import { useState } from "react";
// import {
//   updateArea,
//   addActivity,
//   updateActivity,
//   deleteActivity,
// } from "../../api/propertiesApi";

// export default function AreaSection({ property, setProperty }) {
//   const [locationname, setLocationName] = useState(
//     property.area?.locationname || "",
//   );

//   const [maplink, setMaplink] = useState(property.area?.maplink || "");

//   const [title, setTitle] = useState("");
//   const [shortDescription, setShortDescription] = useState("");
//   const [icon, setIcon] = useState(null);

//   /* ======================
//      UPDATE AREA META
//   ====================== */

//   const saveArea = async () => {
//     const res = await updateArea(property._id, {
//       locationname,
//       maplink,
//     });

//     setProperty(res.data);

//     alert("Area updated");
//   };

//   /* ======================
//      ADD ACTIVITY
//   ====================== */

//   const submitActivity = async () => {
//     const formData = new FormData();

//     formData.append("title", title);
//     formData.append("shortDescription", shortDescription);
//     formData.append("icon", icon);

//     const res = await addActivity(property._id, formData);

//     setProperty(res.data);

//     setTitle("");
//     setShortDescription("");
//     setIcon(null);
//   };

//   /* ======================
//      UPDATE ACTIVITY
//   ====================== */

//   const updateActivityItem = async (activity) => {
//     const formData = new FormData();

//     formData.append("title", activity.title);
//     formData.append("shortDescription", activity.shortDescription);

//     if (activity.newIcon) {
//       formData.append("icon", activity.newIcon);
//     }

//     const res = await updateActivity(property._id, activity._id, formData);

//     setProperty(res.data);
//   };

//   /* ======================
//      DELETE ACTIVITY
//   ====================== */

//   const removeActivity = async (id) => {
//     const res = await deleteActivity(property._id, id);

//     setProperty(res.data);
//   };

//   /* ======================
//      CHANGE ACTIVITY
//   ====================== */

//   const changeActivity = (index, field, value) => {
//     const updated = [...property.area.relatedactivity];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       area: {
//         ...property.area,
//         relatedactivity: updated,
//       },
//     });
//   };

//   const changeIcon = (index, file) => {
//     const updated = [...property.area.relatedactivity];

//     updated[index].newIcon = file;

//     setProperty({
//       ...property,
//       area: {
//         ...property.area,
//         relatedactivity: updated,
//       },
//     });
//   };

//   return (
//     <div className="space-y-10">
//       {/* AREA META */}

//       <div className="bg-white p-6 rounded-lg space-y-4">
//         <h2 className="text-xl font-semibold">Area Information</h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           value={locationname}
//           placeholder="Location Name"
//           onChange={(e) => setLocationName(e.target.value)}
//         />

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           value={maplink}
//           placeholder="Google Map Link"
//           onChange={(e) => setMaplink(e.target.value)}
//         />

//         <button
//           onClick={saveArea}
//           className="bg-blue-600 text-white px-5 py-2 rounded"
//         >
//           Save Area
//         </button>
//       </div>

//       {/* EXISTING ACTIVITIES */}

//       <div className="bg-white p-6 rounded-lg space-y-6">
//         <h2 className="text-xl font-semibold">Related Activities</h2>

//         {property.area?.relatedactivity?.map((activity, i) => (
//           <div
//             key={activity._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-4"
//           >
//             <input
//               className="w-full border border-gray-300 rounded-md p-3"
//               value={activity.title}
//               onChange={(e) => changeActivity(i, "title", e.target.value)}
//               placeholder="Activity Title"
//             />

//             <input
//               className="w-full border border-gray-300 rounded-md p-3"
//               value={activity.shortDescription}
//               onChange={(e) =>
//                 changeActivity(i, "shortDescription", e.target.value)
//               }
//               placeholder="Short Description"
//             />

//             {/* ICON UPLOAD */}

//             <div className=" w-[180px]">
//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
//                 {activity.newIcon ? (
//                   <img
//                     src={URL.createObjectURL(activity.newIcon)}
//                     className="w-20 h-20 object-contain"
//                   />
//                 ) : activity.icon ? (
//                   <img
//                     src={activity.icon}
//                     className="w-20 h-20 object-contain"
//                   />
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
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                       />
//                     </svg>

//                     <span className="text-sm">Upload Activity Icon</span>
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
//                 onClick={() => updateActivityItem(activity)}
//                 className="bg-blue-600 text-white px-4 py-1 rounded"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => removeActivity(activity._id)}
//                 className="bg-red-500 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ADD ACTIVITY */}

//       <div className="bg-white p-6 rounded-lg space-y-4">
//         <h2 className="text-xl font-semibold">Add Activity</h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Activity Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Short Description"
//           value={shortDescription}
//           onChange={(e) => setShortDescription(e.target.value)}
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
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                   />
//                 </svg>

//                 <span className="text-sm">Upload Activity Icon</span>
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
//           onClick={submitActivity}
//           className="bg-green-600 text-white px-5 py-2 rounded"
//         >
//           Add Activity
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import IconPicker from "../../components/IconPicker";
import {
  updateArea,
  addActivity,
  updateActivity,
  deleteActivity,
} from "../../api/propertiesApi";

export default function AreaSection({ property, setProperty }) {
  const [locationname, setLocationName] = useState(
    property.area?.locationname || "",
  );

  const [maplink, setMaplink] = useState(property.area?.maplink || "");

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [icon, setIcon] = useState("");

  /* ======================
     UPDATE AREA META
  ====================== */

  const saveArea = async () => {
    const res = await updateArea(property._id, {
      locationname,
      maplink,
    });

    setProperty(res.data);

    alert("Area updated");
  };

  /* ======================
     ADD ACTIVITY
  ====================== */

  const submitActivity = async () => {
    const payload = {
      title,
      shortDescription,
      icon,
    };

    const res = await addActivity(property._id, payload);

    setProperty(res.data);

    setTitle("");
    setShortDescription("");
    setIcon("");
  };

  /* ======================
     UPDATE ACTIVITY
  ====================== */

  const updateActivityItem = async (activity) => {
    const payload = {
      title: activity.title,
      shortDescription: activity.shortDescription,
      icon: activity.icon,
    };

    const res = await updateActivity(property._id, activity._id, payload);

    setProperty(res.data);
  };

  /* ======================
     DELETE ACTIVITY
  ====================== */

  const removeActivity = async (id) => {
    const res = await deleteActivity(property._id, id);

    setProperty(res.data);
  };

  /* ======================
     CHANGE ACTIVITY
  ====================== */

  const changeActivity = (index, field, value) => {
    const updated = [...property.area.relatedactivity];

    updated[index][field] = value;

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated,
      },
    });
  };

  return (
    <div className="space-y-10">
      {/* AREA META */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Area Information</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          value={locationname}
          placeholder="Location Name"
          onChange={(e) => setLocationName(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          value={maplink}
          placeholder="Google Map Link"
          onChange={(e) => setMaplink(e.target.value)}
        />

        <button
          onClick={saveArea}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Save Area
        </button>
      </div>

      {/* EXISTING ACTIVITIES */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Related Activities</h2>

        {property.area?.relatedactivity?.map((activity, i) => (
          <div
            key={activity._id}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={activity.title}
              onChange={(e) => changeActivity(i, "title", e.target.value)}
              placeholder="Activity Title"
            />

            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={activity.shortDescription}
              onChange={(e) =>
                changeActivity(i, "shortDescription", e.target.value)
              }
              placeholder="Short Description"
            />

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Activity Icon
              </label>

              <IconPicker
                value={activity.icon}
                onSelect={(iconName) => changeActivity(i, "icon", iconName)}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => updateActivityItem(activity)}
                className="bg-blue-600 text-white px-4 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeActivity(activity._id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD ACTIVITY */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Add Activity</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Activity Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Short Description"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />

        <IconPicker value={icon} onSelect={setIcon} />

        <button
          onClick={submitActivity}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Add Activity
        </button>
      </div>
    </div>
  );
}
