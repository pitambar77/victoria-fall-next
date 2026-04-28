import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const IncidentalForm = ({ property, setProperty, errors, clearError }) => {
  /* Ensure one block exists */
  const blocks =
    property.incidental.description?.length > 0
      ? property.incidental.description
      : [{ type: "paragraph", content: "" }];

  /* ======================
     ADD BLOCK
  ====================== */

  const addBlock = () => {
    setProperty({
      ...property,
      incidental: {
        ...property.incidental,
        description: [
          ...blocks,
          {
            type: "paragraph",
            content: "",
          },
        ],
      },
    });
  };

  /* ======================
     CHANGE BLOCK
  ====================== */

  const changeBlock = (index, field, value) => {
    const updated = [...blocks];
    updated[index][field] = value;

    setProperty({
      ...property,
      incidental: {
        ...property.incidental,
        description: updated,
      },
    });
    clearError(`incidental_${index}`);
  };

  /* ======================
     REMOVE BLOCK
  ====================== */

  const removeBlock = (index) => {
    const updated = blocks.filter((_, i) => i !== index);

    setProperty({
      ...property,
      incidental: {
        ...property.incidental,
        description: updated,
      },
    });
  };

  const lastBlock = blocks[blocks.length - 1];

  const canAddBlock =
    lastBlock.type === "list"
      ? Array.isArray(lastBlock.content) && lastBlock.content.length > 0
      : lastBlock.content?.trim();

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Incidental Information</h2>

      {blocks.map((block, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* BLOCK TYPE */}
          {/* <select
            className=" border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            value={block.type}
            onChange={(e) => changeBlock(i, "type", e.target.value)}
          >
            <option value="header">Header</option>
            <option value="paragraph">Paragraph</option>
            <option value="list">List</option>
          </select> */}

          <div className="relative w-full">
            <select
              className="w-full border border-gray-300 rounded-md p-3 pr-10 appearance-none outline-none
    focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition bg-white"
              value={block.type}
              onChange={(e) => changeBlock(i, "type", e.target.value)}
            >
              <option value="header">Header</option>
              <option value="paragraph">Paragraph</option>
              <option value="list">List</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>

          {/* CONTENT FIELD */}

          {block.type === "list" ? (
            <textarea
              className={`w-full border rounded-md p-3 outline-none
${
  errors?.[`incidental_${i}`]
    ? "border-red-500"
    : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
}`}
              placeholder="Enter list items separated by comma"
              value={
                Array.isArray(block.content)
                  ? block.content.join(", ")
                  : block.content
              }
              onChange={(e) =>
                changeBlock(i, "content", e.target.value.split(","))
              }
            />
          ) : (
            <textarea
             className={`w-full border rounded-md p-3 outline-none
${
  errors?.[`incidental_${i}`]
    ? "border-red-500"
    : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
}`}
              placeholder="Content"
              value={block.content}
              onChange={(e) => changeBlock(i, "content", e.target.value)}
            />
          )}

          {errors?.[`incidental_${i}`] && (
            <p className="text-red-500 text-sm">{errors[`incidental_${i}`]}</p>
          )}

          {/* REMOVE BUTTON */}

          {blocks.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeBlock(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Block
              </button>
            </div>
          )}
        </div>
      ))}

      {/* ADD BLOCK */}

      <button
        onClick={addBlock}
        disabled={!canAddBlock}
        className={`px-4 py-2 rounded ${
          canAddBlock
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        + Add Block
      </button>
    </div>
  );
};

export default IncidentalForm;
