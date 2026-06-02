// import React from "react";

// const InformationForm = ({ property, setProperty }) => {
//   /* Ensure one block exists */
//   const blocks =
//     property.information.info?.length > 0
//       ? property.information.info
//       : [{ type: "paragraph", content: "" }];

//   /* ======================
//      ADD BLOCK
//   ====================== */

//   const addBlock = () => {
//     setProperty({
//       ...property,
//       information: {
//         ...property.information,
//         info: [
//           ...blocks,
//           {
//             type: "paragraph",
//             content: "",
//           },
//         ],
//       },
//     });
//   };

//   /* ======================
//      CHANGE BLOCK
//   ====================== */

//   const changeBlock = (index, field, value) => {
//     const updated = [...blocks];
//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       information: {
//         ...property.information,
//         info: updated,
//       },
//     });
//   };

//   /* ======================
//      REMOVE BLOCK
//   ====================== */

//   const removeBlock = (index) => {
//     const updated = blocks.filter((_, i) => i !== index);

//     setProperty({
//       ...property,
//       information: {
//         ...property.information,
//         info: updated,
//       },
//     });
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h2 className="text-xl font-semibold">Information</h2>

//       {blocks.map((block, i) => (
//         <div
//           key={i}
//           className="border border-gray-200 p-4 rounded-lg space-y-4"
//         >
//           {/* BLOCK TYPE */}

//           <select
//             className="w-full border border-gray-300 rounded-md p-3 outline-none
//             focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//             value={block.type}
//             onChange={(e) => changeBlock(i, "type", e.target.value)}
//           >
//             <option value="header">Header</option>
//             <option value="paragraph">Paragraph</option>
//             <option value="list">List</option>
//           </select>

//           {/* CONTENT */}

//           {block.type === "list" ? (
//             <textarea
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//               placeholder="Enter list items separated by comma"
//               value={
//                 Array.isArray(block.content)
//                   ? block.content.join(", ")
//                   : block.content
//               }
//               onChange={(e) =>
//                 changeBlock(i, "content", e.target.value.split(","))
//               }
//             />
//           ) : (
//             <textarea
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//               placeholder="Content"
//               value={block.content}
//               onChange={(e) => changeBlock(i, "content", e.target.value)}
//             />
//           )}

//           {/* REMOVE BUTTON */}

//           {blocks.length > 1 && (
//             <div className="flex justify-end">
//               <button
//                 onClick={() => removeBlock(i)}
//                 className="text-red-500 text-sm hover:text-red-700"
//               >
//                 Remove Block
//               </button>
//             </div>
//           )}
//         </div>
//       ))}

//       {/* ADD BLOCK */}

//       <button
//         onClick={addBlock}
//         className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//       >
//         + Add Block
//       </button>
//     </div>
//   );
// };

// export default InformationForm;

import React from "react";
import CustomTextEditor from "../CustomTextEditor";

const InformationForm = ({ property, setProperty }) => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Information</h2>

      <CustomTextEditor
        value={property.information.shortInformation || ""}
        onChange={(value) =>
          setProperty((prev) => ({
            ...prev,
            information: {
              ...prev.information,
              shortInformation: value,
            },
          }))
        }
      />
    </div>
  );
};

export default InformationForm;
