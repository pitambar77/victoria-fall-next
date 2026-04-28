// import { useState, useEffect } from "react";

// import {
//   addInformationBlock,
//   updateInformation,
//   deleteInformationBlock
// } from "../../api/propertiesApi";

// export default function InformationSection({ property, setProperty }) {

//   const [blocks, setBlocks] = useState([]);

//   useEffect(() => {
//     if (property?.information?.info) {
//       setBlocks(property.information.info);
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

//   const removeBlock = async (block, index) => {

//     try {

//       if (block._id) {
//         await deleteInformationBlock(property._id, block._id);
//       }

//       const updated = blocks.filter((_, i) => i !== index);

//       setBlocks(updated);

//       setProperty({
//         ...property,
//         information: {
//           ...property.information,
//           info: updated
//         }
//       });

//     } catch (err) {
//       console.error(err);
//     }

//   };

//   /* ======================
//      SAVE INFORMATION
//   ====================== */

//   const saveInformation = async () => {

//     const res = await updateInformation(property._id, {
//       info: blocks
//     });

//     setProperty(res.data);

//     alert("Information updated");

//   };

//   return (

//     <div className="border p-6 space-y-6">

//       <h2 className="font-bold text-lg">
//         Information
//       </h2>

//       {blocks.map((block, i) => (

//         <div key={block._id || i} className="border p-4 rounded space-y-2">

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
//               value={
//                 Array.isArray(block.content)
//                   ? block.content.join(",")
//                   : ""
//               }
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
//             onClick={() => removeBlock(block, i)}
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
//         onClick={saveInformation}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Save Information
//       </button>

//     </div>

//   );

// }


import { useState, useEffect } from "react";

import {
  updateInformation,
  deleteInformationBlock
} from "../../api/propertiesApi";

export default function InformationSection({ property, setProperty }) {

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {

    if (property?.information?.info) {
      setBlocks(property.information.info);
    }

  }, [property]);

  /* ======================
     ADD BLOCK
  ====================== */

  const addBlock = () => {

    setBlocks([
      ...blocks,
      { type: "paragraph", content: "" }
    ]);

  };

  /* ======================
     CHANGE BLOCK
  ====================== */

  const changeBlock = (index, field, value) => {

    const updated = [...blocks];

    updated[index][field] = value;

    setBlocks(updated);

  };

  /* ======================
     REMOVE BLOCK
  ====================== */

  const removeBlock = async (block, index) => {

    try {

      if (block._id) {
        await deleteInformationBlock(property._id, block._id);
      }

      const updated = blocks.filter((_, i) => i !== index);

      setBlocks(updated);

      setProperty({
        ...property,
        information: {
          ...property.information,
          info: updated
        }
      });

    } catch (err) {

      console.error(err);

    }

  };

  /* ======================
     SAVE INFORMATION
  ====================== */

  const saveInformation = async () => {

    const res = await updateInformation(property._id, {
      info: blocks
    });

    setProperty(res.data);

    alert("Information updated");

  };

  return (

    <div className="space-y-10">

      <div className="bg-white p-6 rounded-lg space-y-6">

        <h2 className="text-xl font-semibold">
          Information
        </h2>

        {blocks.map((block, i) => (

          <div
            key={block._id || i}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >

            {/* BLOCK TYPE */}

            <select
              className="w-full border border-gray-300 rounded-md p-3"
              value={block.type}
              onChange={(e) =>
                changeBlock(i, "type", e.target.value)
              }
            >
              <option value="header">Header</option>
              <option value="paragraph">Paragraph</option>
              <option value="list">List</option>
            </select>


            {/* CONTENT */}

            {block.type === "list" ? (

              <textarea
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Enter list items separated by comma"
                value={
                  Array.isArray(block.content)
                    ? block.content.join(",")
                    : ""
                }
                onChange={(e) =>
                  changeBlock(
                    i,
                    "content",
                    e.target.value.split(",")
                  )
                }
              />

            ) : (

              <textarea
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Content"
                value={block.content}
                onChange={(e) =>
                  changeBlock(i, "content", e.target.value)
                }
              />

            )}


            {/* ACTION */}

            <button
              onClick={() => removeBlock(block, i)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
            >
              Remove Block
            </button>

          </div>

        ))}


        {/* ACTION BUTTONS */}

        <div className="flex gap-4">

          <button
            onClick={addBlock}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            Add Block
          </button>

          <button
            onClick={saveInformation}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
          >
            Save Information
          </button>

        </div>

      </div>

    </div>

  );

}

