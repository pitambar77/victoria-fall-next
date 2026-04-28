

import React from "react";
import IconPicker from "../../components/IconPicker";

const BathroomsForm = ({ property, setProperty, errors, clearError }) => {
  /* Ensure one bathroom exists */
  const bathrooms =
    property.bathrooms?.length > 0
      ? property.bathrooms
      : [
          {
            bathName: "",
            bathdetails: [{ name: "", icon: "" }],
          },
        ];

  /* ======================
     ADD BATHROOM
  ====================== */

  // const addBathroom = () => {
  //   setProperty({
  //     ...property,
  //     bathrooms: [
  //       ...bathrooms,
  //       {
  //         bathName: "",
  //         bathdetails: [{ name: "", icon: "" }],
  //       },
  //     ],
  //   });
  // };

  const addBathroom = () => {
    const lastBathroom = bathrooms[bathrooms.length - 1];

    if (!lastBathroom.bathName.trim()) {
      alert("Please fill the bathroom name before adding another bathroom.");
      return;
    }

    setProperty({
      ...property,
      bathrooms: [
        ...bathrooms,
        {
          bathName: "",
          bathdetails: [{ name: "", icon: "" }],
        },
      ],
    });
  };
  /* ======================
     CHANGE BATH NAME
  ====================== */

  const changeBathName = (index, value) => {
    const updated = [...bathrooms];
    updated[index].bathName = value;

    setProperty({
      ...property,
      bathrooms: updated,
    });
    clearError(`bathName_${index}`);
  };

  /* ======================
     REMOVE BATHROOM
  ====================== */

  const removeBathroom = (index) => {
    const updated = bathrooms.filter((_, i) => i !== index);

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  /* ======================
     ADD BATH DETAIL
  ====================== */

  // const addDetail = (bathIndex) => {
  //   const updated = [...bathrooms];

  //   updated[bathIndex].bathdetails.push({
  //     name: "",
  //     icon: "",
  //   });

  //   setProperty({
  //     ...property,
  //     bathrooms: updated,
  //   });
  // };

  const addDetail = (bathIndex) => {
    const updated = [...bathrooms];

    const lastDetail =
      updated[bathIndex].bathdetails[updated[bathIndex].bathdetails.length - 1];

    if (!lastDetail.name.trim() || !lastDetail.icon) {
      alert("Please fill detail name and icon before adding another detail.");
      return;
    }

    updated[bathIndex].bathdetails.push({
      name: "",
      icon: "",
    });

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  /* ======================
     CHANGE DETAIL
  ====================== */

  const changeDetail = (bathIndex, detailIndex, field, value) => {
    const updated = [...bathrooms];

    updated[bathIndex].bathdetails[detailIndex][field] = value;

    setProperty({
      ...property,
      bathrooms: updated,
    });
     if (field === "name") {
    clearError(`bathDetailName_${bathIndex}_${detailIndex}`);
  }

  if (field === "icon") {
    clearError(`bathDetailIcon_${bathIndex}_${detailIndex}`);
  }
  };

  /* ======================
     REMOVE DETAIL
  ====================== */

  const removeDetail = (bathIndex, detailIndex) => {
    const updated = [...bathrooms];

    updated[bathIndex].bathdetails = updated[bathIndex].bathdetails.filter(
      (_, i) => i !== detailIndex,
    );

    setProperty({
      ...property,
      bathrooms: updated,
    });
  };

  const lastBathroom = bathrooms[bathrooms.length - 1];
  const canAddBathroom = lastBathroom?.bathName?.trim();

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">Bathrooms</h2>

      {bathrooms.map((bathroom, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-6"
        >
          {/* Bathroom Name */}
          <input
            className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.[`bathName_${i}`]
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
            placeholder="Bathroom Name*"
            value={bathroom.bathName}
            onChange={(e) => changeBathName(i, e.target.value)}
          />
          {errors?.[`bathName_${i}`] && (
            <p className="text-red-500 text-sm">{errors[`bathName_${i}`]}</p>
          )}
          {/* Bathroom Details */}
          <div className="space-y-6">
            {bathroom.bathdetails.map((detail, j) => (
              <div
                key={j}
                className="border border-gray-200 p-4 rounded-lg space-y-4"
              >
                <input
                  className={`w-full border rounded-md p-3 outline-none transition
${
  errors?.[`bathDetailName_${i}_${j}`]
    ? "border-red-500 focus:ring-red-200"
    : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
}`}
                  placeholder="Detail Name (Shower / Bathtub / Sink)"
                  value={detail.name}
                  onChange={(e) => changeDetail(i, j, "name", e.target.value)}
                />

                {errors?.[`bathDetailName_${i}_${j}`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`bathDetailName_${i}_${j}`]}
                  </p>
                )}

                {/* ICON UPLOAD */}

                {/* <div className="w-[220px]">
                  <label className="text-gray-700 mb-2 block">
                    Upload Detail Icon
                  </label>

                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                    {detail.icon ? (
                      <img
                        src={URL.createObjectURL(detail.icon)}
                        alt="preview"
                        className="w-16 h-16 object-contain"
                      />
                    ) : (
                      <span className="text-sm text-gray-500">
                        Click to upload
                      </span>
                    )}

                    <input
                      type="file"
                      hidden
                      onChange={(e) =>
                        changeDetail(i, j, "icon", e.target.files[0])
                      }
                    />
                  </label>
                </div> */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Select Detail Icon
                  </label>

                  <IconPicker
                    value={detail.icon}
                    onSelect={(iconName) =>
                      changeDetail(i, j, "icon", iconName)
                    }
                  />
                </div>

                {errors?.[`bathDetailIcon_${i}_${j}`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`bathDetailIcon_${i}_${j}`]}
                  </p>
                )}

                {/* Remove Detail */}
                {bathroom.bathdetails.length > 1 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => removeDetail(i, j)}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      Remove Detail
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Add Detail Button */}
            <button
              onClick={() => addDetail(i)}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              + Add Detail
            </button>
          </div>

          {/* Remove Bathroom */}
          {bathrooms.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeBathroom(i)}
                className="text-red-600 text-sm hover:text-red-700"
              >
                Remove Bathroom
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add Bathroom */}
      {/* <button
        onClick={addBathroom}
        className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
      >
        + Add Bathroom
      </button> */}

      <button
        onClick={addBathroom}
        disabled={!canAddBathroom}
        className={`px-4 py-2 rounded ${
          canAddBathroom
            ? "bg-gray-300 hover:bg-gray-400"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        + Add Bathroom
      </button>
    </div>
  );
};

export default BathroomsForm;
