// import { useState } from "react";

// import {
//   updateHouseRuleMeta,
//   addHouseRule,
//   updateHouseRule,
//   deleteHouseRule,
// } from "../../api/propertiesApi";

// export default function HouseRulesSection({ property, setProperty }) {
//   const [checkIn, setCheckIn] = useState(property.houserule?.checkIn || "");
//   const [checkOut, setCheckOut] = useState(property.houserule?.checkOut || "");
//   const [content, setContent] = useState(property.houserule?.content || "");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [icon, setIcon] = useState(null);

//   /* ======================
//      UPDATE META
//   ====================== */

//   const updateMeta = async () => {
//     const res = await updateHouseRuleMeta(property._id, {
//       checkIn,
//       checkOut,
//       content,
//     });

//     setProperty(res.data);
//   };

//   /* ======================
//      ADD RULE
//   ====================== */

//   const submitRule = async () => {
//     const formData = new FormData();

//     formData.append("title", title);
//     formData.append("description", description);

//     if (icon) {
//       formData.append("icon", icon);
//     }

//     const res = await addHouseRule(property._id, formData);

//     setProperty(res.data);

//     setTitle("");
//     setDescription("");
//     setIcon(null);
//   };

//   /* ======================
//      UPDATE RULE
//   ====================== */

//   const updateRuleItem = async (rule) => {
//     const formData = new FormData();

//     formData.append("title", rule.title);
//     formData.append("description", rule.description);

//     if (rule.newIcon) {
//       formData.append("icon", rule.newIcon);
//     }

//     const res = await updateHouseRule(property._id, rule._id, formData);

//     setProperty(res.data);
//   };

//   /* ======================
//      DELETE RULE
//   ====================== */

//   const removeRule = async (ruleId) => {
//     const res = await deleteHouseRule(property._id, ruleId);

//     setProperty(res.data);
//   };

//   /* ======================
//      CHANGE RULE FIELD
//   ====================== */

//   const changeRule = (index, field, value) => {
//     const updated = [...property.houserule.rule];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       houserule: {
//         ...property.houserule,
//         rule: updated,
//       },
//     });
//   };

//   const changeIcon = (index, file) => {
//     const updated = [...property.houserule.rule];

//     updated[index].newIcon = file;

//     setProperty({
//       ...property,
//       houserule: {
//         ...property.houserule,
//         rule: updated,
//       },
//     });
//   };

//   return (
//     <div className="space-y-10">
//       {/* META SETTINGS */}

//       <div className="bg-white p-6 rounded-lg space-y-4">
//         <h2 className="text-xl font-semibold">House Rules Settings</h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Check In Time"
//           value={checkIn}
//           onChange={(e) => setCheckIn(e.target.value)}
//         />

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Check Out Time"
//           value={checkOut}
//           onChange={(e) => setCheckOut(e.target.value)}
//         />

//         <textarea
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="House Rules Description"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />

//         <button
//           onClick={updateMeta}
//           className="bg-blue-600 text-white px-5 py-2 rounded"
//         >
//           Update Settings
//         </button>
//       </div>

//       {/* EXISTING RULES */}

//       <div className="bg-white p-6 rounded-lg space-y-6">
//         <h2 className="text-xl font-semibold">Rules</h2>

//         {property.houserule?.rule?.map((rule, i) => (
//           <div
//             key={rule._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-4"
//           >
//             <input
//               className="w-full border border-gray-300 rounded-md p-3"
//               value={rule.title}
//               onChange={(e) => changeRule(i, "title", e.target.value)}
//               placeholder="Rule Title"
//             />

//             <input
//               className="w-full border border-gray-300 rounded-md p-3"
//               value={rule.description}
//               onChange={(e) => changeRule(i, "description", e.target.value)}
//               placeholder="Description"
//             />

//             {/* ICON UPLOAD */}
//             <div className=" w-[180px]">
//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
//                 {rule.newIcon ? (
//                   <img
//                     src={URL.createObjectURL(rule.newIcon)}
//                     className="w-20 h-20 object-contain"
//                   />
//                 ) : rule.icon ? (
//                   <img src={rule.icon} className="w-20 h-20 object-contain" />
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

//                     <span className="text-sm">Upload Rule Icon</span>
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
//                 onClick={() => updateRuleItem(rule)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => removeRule(rule._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ADD RULE */}

//       <div className="bg-white p-6 rounded-lg space-y-4">
//         <h2 className="text-xl font-semibold">Add Rule</h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Rule Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
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

//                 <span className="text-sm">Upload Rule Icon</span>
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
//           onClick={submitRule}
//           className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
//         >
//           Add Rule
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import IconPicker from "../../components/IconPicker";

import {
  updateHouseRuleMeta,
  addHouseRule,
  updateHouseRule,
  deleteHouseRule,
} from "../../api/propertiesApi";

export default function HouseRulesSection({ property, setProperty }) {
  const [checkIn, setCheckIn] = useState(property.houserule?.checkIn || "");
  const [checkOut, setCheckOut] = useState(property.houserule?.checkOut || "");
  const [content, setContent] = useState(property.houserule?.content || "");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  /* ======================
     UPDATE META
  ====================== */

  const updateMeta = async () => {
    const res = await updateHouseRuleMeta(property._id, {
      checkIn,
      checkOut,
      content,
    });

    setProperty(res.data);
  };

  /* ======================
     ADD RULE
  ====================== */

  const submitRule = async () => {
    const payload = {
      title,
      description,
      icon,
    };

    const res = await addHouseRule(property._id, payload);

    setProperty(res.data);

    setTitle("");
    setDescription("");
    setIcon("");
  };

  /* ======================
     UPDATE RULE
  ====================== */

  const updateRuleItem = async (rule) => {
    const payload = {
      title: rule.title,
      description: rule.description,
      icon: rule.icon,
    };

    const res = await updateHouseRule(property._id, rule._id, payload);

    setProperty(res.data);
  };

  /* ======================
     DELETE RULE
  ====================== */

  const removeRule = async (ruleId) => {
    const res = await deleteHouseRule(property._id, ruleId);

    setProperty(res.data);
  };

  /* ======================
     CHANGE RULE FIELD
  ====================== */

  const changeRule = (index, field, value) => {
    const updated = [...property.houserule.rule];

    updated[index][field] = value;

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: updated,
      },
    });
  };

  return (
    <div className="space-y-10">
      {/* META SETTINGS */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">House Rules Settings</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Check In Time"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Check Out Time"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />

        <textarea
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="House Rules Description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={updateMeta}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Update Settings
        </button>
      </div>

      {/* EXISTING RULES */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Rules</h2>

        {property.houserule?.rule?.map((rule, i) => (
          <div
            key={rule._id}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={rule.title}
              onChange={(e) => changeRule(i, "title", e.target.value)}
              placeholder="Rule Title"
            />

            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={rule.description}
              onChange={(e) => changeRule(i, "description", e.target.value)}
              placeholder="Description"
            />

            <IconPicker
              value={rule.icon}
              onSelect={(iconName) => changeRule(i, "icon", iconName)}
            />

            <div className="flex gap-3">
              <button
                onClick={() => updateRuleItem(rule)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeRule(rule._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD RULE */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Add Rule</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Rule Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <IconPicker value={icon} onSelect={setIcon} />

        <button
          onClick={submitRule}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Add Rule
        </button>
      </div>
    </div>
  );
}
