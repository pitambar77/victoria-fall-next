

import React from "react";
import IconPicker from "../../components/IconPicker";

const SpaceForm = ({ property, setProperty, errors }) => {
  /* Ensure one space exists */
  const spaces =
    property.space?.length > 0 ? property.space : [{ title: "", icon: "" }];

  /* =====================
     ADD SPACE
  ===================== */

  // const addSpace = () => {
  //   setProperty({
  //     ...property,
  //     space: [
  //       ...spaces,
  //       {
  //         title: "",
  //         icon: "",
  //       },
  //     ],
  //   });
  // };

  const addSpace = () => {
    const lastSpace = spaces[spaces.length - 1];

    if (!lastSpace.title.trim() || !lastSpace.icon) {
      alert(
        "Please fill the space title and select an icon before adding another space.",
      );
      return;
    }

    setProperty({
      ...property,
      space: [
        ...spaces,
        {
          title: "",
          icon: "",
        },
      ],
    });
  };

  /* =====================
     HANDLE CHANGE
  ===================== */

  const handleChange = (index, field, value) => {
    const updated = [...spaces];
    updated[index][field] = value;

    setProperty({
      ...property,
      space: updated,
    });
    
  };

  /* =====================
     REMOVE SPACE
  ===================== */

  const removeSpace = (index) => {
    const updated = spaces.filter((_, i) => i !== index);

    setProperty({
      ...property,
      space: updated,
    });
  };

  const lastSpace = spaces[spaces.length - 1];

  const canAddSpace = lastSpace?.title?.trim() && lastSpace?.icon;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Available Spaces</h2>

      {spaces.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* Space Title */}
          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            placeholder="Enter Area Name (e.g., Living Room, Dining Area, Patio)"
            value={item.title}
            onChange={(e) => handleChange(i, "title", e.target.value)}
          />

          {/* ICON UPLOAD */}
          {/* <div className="w-[220px]">

            <label className="text-gray-700 mb-2 block">
              Upload Space Icon
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">

              {item.icon ? (
                <img
                  src={URL.createObjectURL(item.icon)}
                  alt="preview"
                  className="w-16 h-16 object-contain"
                />
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
                    />
                  </svg>

                  <span className="text-sm text-gray-500">
                    Click to upload
                  </span>
                </>
              )}

              <input
                type="file"
                hidden
                onChange={(e) => handleChange(i, "icon", e.target.files[0])}
              />

            </label>

          </div> */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Space Icon
            </label>

            <IconPicker
              value={item.icon}
              onSelect={(iconName) => handleChange(i, "icon", iconName)}
            />
          </div>

          {errors?.[`space_${i}`] && (
            <p className="text-red-500 text-sm">{errors[`space_${i}`]}</p>
          )}

          {/* Remove Button */}
          {spaces.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeSpace(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Space
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add Space */}
      {/* <button
        onClick={addSpace}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        + Add Space
      </button> */}
      <button
        onClick={addSpace}
        disabled={!canAddSpace}
        className={`px-4 py-2 rounded ${
          canAddSpace
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        + Add Space
      </button>
    </div>
  );
};

export default SpaceForm;
