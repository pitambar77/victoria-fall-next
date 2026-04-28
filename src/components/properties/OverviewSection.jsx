// import { useState, useEffect } from "react";
// import { updateOverviewMeta, updateOverview, deleteOverviewBlock } from "../../api/propertiesApi";

// export default function OverviewSection({ property, setProperty }) {

//   const [form, setForm] = useState({
//     title: "",
//     subTitle: "",
//     landingsubcontent: "",
//     description: [{ type: "paragraph", content: "" }]
//   });

//   /* =========================
//      PREFILL FORM WHEN PROPERTY LOADS
//   ========================= */

//   useEffect(() => {

//     if (!property) return;

//     const blocks =
//       property.overview?.description?.length > 0
//         ? property.overview.description
//         : [{ type: "paragraph", content: "" }];

//     setForm({
//       title: property.overview?.title ?? "",
//       subTitle: property.overview?.subTitle ?? "",
//       landingsubcontent: property.overview?.landingsubcontent ?? "",
//       description: blocks
//     });

//   }, [property]);

//   /* =========================
//      HANDLE INPUT CHANGE
//   ========================= */

//   const handleChange = (e) => {

//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value
//     }));

//   };

//   /* =========================
//      ADD PARAGRAPH
//   ========================= */

//   const addParagraph = () => {

//     setForm((prev) => ({
//       ...prev,
//       description: [
//         ...prev.description,
//         { type: "paragraph", content: "" }
//       ]
//     }));

//   };

//   /* =========================
//      UPDATE PARAGRAPH
//   ========================= */

//   const updateParagraph = (index, value) => {

//     setForm((prev) => {

//       const updated = [...prev.description];
//       updated[index].content = value;

//       return {
//         ...prev,
//         description: updated
//       };

//     });

//   };

//   /* =========================
//      DELETE PARAGRAPH
//   ========================= */

//   const deleteParagraph = async (block, index) => {

//     try {

//       if (block._id) {
//         await deleteOverviewBlock(property._id, block._id);
//       }

//       setForm((prev) => ({
//         ...prev,
//         description: prev.description.filter((_, i) => i !== index)
//       }));

//     } catch (err) {
//       console.error(err);
//     }

//   };

//   /* =========================
//      SAVE OVERVIEW
//   ========================= */

//   const saveOverview = async () => {

//     try {

//       await updateOverviewMeta(property._id, {
//         title: form.title,
//         subTitle: form.subTitle,
//         landingsubcontent: form.landingsubcontent
//       });

//       await updateOverview(property._id, {
//         overview: {
//           ...property.overview,
//           description: form.description
//         }
//       });

//       setProperty((prev) => ({
//         ...prev,
//         overview: form
//       }));

//       alert("Overview updated ✅");

//     } catch (err) {
//       console.error(err);
//     }

//   };

//   if (!property) return null;

//   return (

//     <div className="p-6   bg-white rounded-lg space-y-6">

//       <h2 className="text-xl font-semibold">
//         Overview
//       </h2>

//       {/* TITLE */}

//       <input
//         name="title"
//         value={form.title}
//         onChange={handleChange}
//         placeholder="Title"
//         className="w-full border border-gray-300 rounded-md p-3 outline-none
//         focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//       />

//       {/* SUBTITLE */}

//       <input
//         name="subTitle"
//         value={form.subTitle}
//         onChange={handleChange}
//         placeholder="Subtitle"
//         className="w-full border border-gray-300 rounded-md p-3 outline-none
//         focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//       />

//       {/* LANDING CONTENT */}

//       <textarea
//         name="landingsubcontent"
//         value={form.landingsubcontent}
//         onChange={handleChange}
//         placeholder="Landing Content"
//         className="w-full border border-gray-300 rounded-md p-3 outline-none
//         focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//       />

//       {/* PARAGRAPH BLOCKS */}

//       <div className="space-y-4">

//         <h3 className="font-semibold">
//           Description Paragraphs
//         </h3>

//         {form.description.map((block, index) => (

//           <div
//             key={block._id || index}
//             className="border border-gray-200 p-4 rounded-lg space-y-3"
//           >

//             <textarea
//               value={block.content}
//               placeholder={`Paragraph ${index + 1}`}
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//               onChange={(e) => updateParagraph(index, e.target.value)}
//             />

//             {form.description.length > 1 && (

//               <div className="flex justify-end">

//                 <button
//                   onClick={() => deleteParagraph(block, index)}
//                   className="text-red-500 text-sm hover:text-red-700"
//                 >
//                   Remove Paragraph
//                 </button>

//               </div>

//             )}

//           </div>

//         ))}

//         <button
//           onClick={addParagraph}
//           className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//         >
//           + Add Paragraph
//         </button>

//       </div>

//       {/* SAVE BUTTON */}

//       <button
//         onClick={saveOverview}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
//       >
//         Save Overview
//       </button>

//     </div>
//   );
// }

import { useState, useEffect } from "react";
import {
  updateOverviewMeta,
  updateOverview,
  deleteOverviewBlock,
} from "../../api/propertiesApi";

export default function OverviewSection({ property, setProperty }) {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    landingsubcontent: "",
    description: [{ type: "paragraph", content: "" }],
  });

  /* =========================
     PREFILL FORM WHEN PROPERTY LOADS
  ========================= */

  useEffect(() => {
    if (!property) return;

    const blocks =
      property.overview?.description?.length > 0
        ? property.overview.description
        : [{ type: "paragraph", content: "" }];

    setForm({
      title: property.overview?.title ?? "",
      subTitle: property.overview?.subTitle ?? "",
      landingsubcontent: property.overview?.landingsubcontent ?? "",
      description: blocks,
    });
  }, [property]);

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     ADD PARAGRAPH
  ========================= */

  const addParagraph = () => {
    setForm((prev) => ({
      ...prev,
      description: [...prev.description, { type: "paragraph", content: "" }],
    }));
  };

  /* =========================
     UPDATE PARAGRAPH
  ========================= */

  const updateParagraph = (index, value) => {
    setForm((prev) => {
      const updated = [...prev.description];
      updated[index].content = value;

      return {
        ...prev,
        description: updated,
      };
    });
  };

  /* =========================
     DELETE PARAGRAPH
  ========================= */

  const deleteParagraph = async (block, index) => {
    try {
      if (block._id) {
        await deleteOverviewBlock(property._id, block._id);
      }

      setForm((prev) => ({
        ...prev,
        description: prev.description.filter((_, i) => i !== index),
      }));
    } catch (err) {
      console.error(err);
    }
  };

  /* =========================
     SAVE OVERVIEW
  ========================= */

  const saveOverview = async () => {
    try {
      await updateOverviewMeta(property._id, {
        title: form.title,
        subTitle: form.subTitle,
        landingsubcontent: form.landingsubcontent,
      });

      await updateOverview(property._id, {
        overview: {
          ...property.overview,
          description: form.description,
        },
      });

      setProperty((prev) => ({
        ...prev,
        overview: form,
      }));

      alert("Overview updated ✅");
    } catch (err) {
      console.error(err);
    }
  };

  if (!property) return null;

  return (
    <div className="p-6   bg-white rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Overview</h2>

      {/* TITLE */}

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />

      {/* SUBTITLE */}

      <input
        name="subTitle"
        value={form.subTitle}
        onChange={handleChange}
        placeholder="Subtitle"
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />

      {/* LANDING CONTENT */}

      <textarea
        name="landingsubcontent"
        value={form.landingsubcontent}
        onChange={handleChange}
        placeholder="Landing Content"
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />

      {/* PARAGRAPH BLOCKS */}

      <div className="space-y-4">
        <h3 className="font-semibold">Description Paragraphs</h3>

        {form.description.map((block, index) => (
          <div
            key={block._id || index}
            className="border border-gray-200 p-4 rounded-lg space-y-3"
          >
            <textarea
              value={block.content}
              placeholder={`Paragraph ${index + 1}`}
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              onChange={(e) => updateParagraph(index, e.target.value)}
            />

            {form.description.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => deleteParagraph(block, index)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Paragraph
                </button>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addParagraph}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add Paragraph
        </button>
      </div>

      {/* SAVE BUTTON */}

      <button
        onClick={saveOverview}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
      >
        Save Overview
      </button>
    </div>
  );
}
