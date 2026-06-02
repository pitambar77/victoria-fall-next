// import { useState, useEffect } from "react";
// import { updateIncidental } from "../../api/propertiesApi";

// export default function IncidentalSection({ property, setProperty }) {

//   const [blocks, setBlocks] = useState([]);

//   useEffect(() => {
//     if (property?.incidental?.description) {
//       setBlocks(property.incidental.description);
//     }
//   }, [property]);

//   /* ======================
//      ADD BLOCK
//   ====================== */

//   const addBlock = () => {

//     setBlocks([
//       ...blocks,
//       { type: "paragraph", content: "" }
//     ]);

//   };

//   /* ======================
//      CHANGE BLOCK
//   ====================== */

//   const changeBlock = (index, field, value) => {

//     const updated = [...blocks];

//     updated[index][field] = value;

//     setBlocks(updated);

//   };

//   /* ======================
//      REMOVE BLOCK
//   ====================== */

//   const removeBlock = (index) => {

//     const updated = blocks.filter((_, i) => i !== index);

//     setBlocks(updated);

//   };

//   /* ======================
//      SAVE INCIDENTAL
//   ====================== */

//   const saveIncidental = async () => {

//     const res = await updateIncidental(property._id, {
//       description: blocks
//     });

//     setProperty(res.data);

//     alert("Incidental updated");

//   };

//   return (

//     <div className="border p-6 space-y-6">

//       <h2 className="font-bold text-lg">
//         Incidental Information
//       </h2>

//       {blocks.map((block, i) => (

//         <div key={i} className="border p-4 rounded space-y-2">

//           <select
//             value={block.type}
//             onChange={(e) =>
//               changeBlock(i, "type", e.target.value)
//             }
//           >
//             <option value="header">Header</option>
//             <option value="paragraph">Paragraph</option>
//             <option value="list">List</option>
//           </select>

//           {block.type === "list" ? (

//             <textarea
//               className="border p-2 w-full"
//               placeholder="Enter list items separated by comma"
//               value={Array.isArray(block.content) ? block.content.join(",") : ""}
//               onChange={(e) =>
//                 changeBlock(
//                   i,
//                   "content",
//                   e.target.value.split(",")
//                 )
//               }
//             />

//           ) : (

//             <textarea
//               className="border p-2 w-full"
//               placeholder="Content"
//               value={block.content}
//               onChange={(e) =>
//                 changeBlock(i, "content", e.target.value)
//               }
//             />

//           )}

//           <button
//             onClick={() => removeBlock(i)}
//             className="text-red-500"
//           >
//             Remove
//           </button>

//         </div>

//       ))}

//       <button
//         onClick={addBlock}
//         className="bg-gray-200 px-3 py-1 rounded"
//       >
//         Add Block
//       </button>

//       <button
//         onClick={saveIncidental}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Save Incidental
//       </button>

//     </div>

//   );

// }

import { useState, useEffect } from "react";
import { updateIncidental } from "../../api/propertiesApi";
import CustomTextEditor from "../CustomTextEditor";

export default function IncidentalSection({ property, setProperty }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!property) return;

    setContent(property.incidental?.shortdescription || "");
  }, [property]);

  /* ======================
     SAVE INCIDENTAL
  ====================== */

  const saveIncidental = async () => {
    try {
      const res = await updateIncidental(property._id, {
        shortdescription: content,
      });

      setProperty(res.data);

      alert("Incidental updated ✅");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-10">
      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Incidental Information</h2>

        <CustomTextEditor value={content} onChange={setContent} />

        <button
          onClick={saveIncidental}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Save Incidental
        </button>
      </div>
    </div>
  );
}
