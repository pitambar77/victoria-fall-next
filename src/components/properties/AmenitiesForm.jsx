import { amenityIcons } from "../../constants/amenityIcons";
import IconPicker from "../../components/IconPicker";

export default function AmenitiesForm({
  property,
  setProperty,
  errors,
  clearError,
}) {
  /* DEFAULT DATA */
  const basicAmenities =
    property.aminities.basic?.length > 0
      ? property.aminities.basic
      : [{ aminityName: "", icon: "" }];

  const additionalAmenities =
    property.aminities.additional?.length > 0
      ? property.aminities.additional
      : [{ aminityName: "", icon: "" }];

  /* ======================
     BASIC AMENITIES
  ====================== */

  const addBasicAmenity = () => {
    const lastAmenity = basicAmenities[basicAmenities.length - 1];

    if (!lastAmenity.aminityName.trim() || !lastAmenity.icon) {
      alert("Please fill the current amenity before adding another.");
      return;
    }

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: [...basicAmenities, { aminityName: "", icon: "" }],
      },
    });
  };

  const changeBasic = (index, field, value) => {
    const updated = [...basicAmenities];
    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated,
      },
    });

    clearError(`basicName_${index}`);
    clearError(`basicIcon_${index}`);
  };

  const removeBasic = (index) => {
    const updated = basicAmenities.filter((_, i) => i !== index);

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated,
      },
    });
  };

  /* ======================
     ADDITIONAL AMENITIES
  ====================== */

  const addAdditionalAmenity = () => {
    const lastAmenity = additionalAmenities[additionalAmenities.length - 1];

    if (!lastAmenity.aminityName.trim() || !lastAmenity.icon) {
      alert("Please fill the current amenity before adding another.");
      return;
    }

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: [...additionalAmenities, { aminityName: "", icon: "" }],
      },
    });
  };
  const changeAdditional = (index, field, value) => {
    const updated = [...additionalAmenities];
    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated,
      },
    });

    clearError(`addName_${index}`);
    clearError(`addIcon_${index}`);
  };

  const removeAdditional = (index) => {
    const updated = additionalAmenities.filter((_, i) => i !== index);

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated,
      },
    });
  };

  const lastBasic = basicAmenities[basicAmenities.length - 1];

  const canAddBasic = lastBasic.aminityName.trim() && lastBasic.icon;

  const lastAdditional = additionalAmenities[additionalAmenities.length - 1];

  const canAddAdditional =
    lastAdditional.aminityName.trim() && lastAdditional.icon;

  return (
    <div className="p-6 space-y-10">
      {/* ================= BASIC ================= */}

      <div>
        <h2 className="text-lg font-semibold mb-4">Popular Amenities</h2>

        {basicAmenities.map((amenity, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4 mb-4"
          >
            <input
              className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.[`basicName_${i}`]
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296]"
  }`}
              placeholder="Amenity Name"
              value={amenity.aminityName}
              onChange={(e) => changeBasic(i, "aminityName", e.target.value)}
            />

            {errors?.[`basicName_${i}`] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[`basicName_${i}`]}
              </p>
            )}

            {/* ICON UPLOAD */}
            {/* <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Amenity Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {amenity.icon ? (
                  <img
                    src={URL.createObjectURL(amenity.icon)}
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
                  onChange={(e) => changeBasic(i, "icon", e.target.files[0])}
                />
              </label>
            </div> */}

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Amenity Icon
              </label>

              {/* <div className="grid grid-cols-6 gap-2">
                {amenityIcons.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => changeBasic(i, "icon", item.name)}
                      className={`p-2 border rounded flex items-center justify-center
          ${
            amenity.icon === item.name
              ? "border-[#c1b296] bg-[#c1b296]/20"
              : "border-gray-300"
          }`}
                    >
                      <Icon size={20} />
                    </button>
                  );
                })}
              </div> */}
              <IconPicker
                value={amenity.icon}
                onSelect={(iconName) => changeBasic(i, "icon", iconName)}
              />
              {errors?.[`basicIcon_${i}`] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[`basicIcon_${i}`]}
                </p>
              )}
            </div>

            {basicAmenities.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeBasic(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Amenity
                </button>
              </div>
            )}
          </div>
        ))}

        {/* <button
          onClick={addBasicAmenity}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add More Basic Amenity
        </button> */}

        <button
          onClick={addBasicAmenity}
          disabled={!canAddBasic}
          className={`px-4 py-2 rounded ${
            canAddBasic
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          + Add More Basic Amenity
        </button>
      </div>

      {/* ================= ADDITIONAL ================= */}

      <div>
        <h2 className="text-lg font-semibold mb-4">Additional Amenities</h2>

        {additionalAmenities.map((amenity, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4 mb-4"
          >
            <input
              className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.[`addName_${i}`]
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296]"
  }`}
              placeholder="Amenity Name"
              value={amenity.aminityName}
              onChange={(e) =>
                changeAdditional(i, "aminityName", e.target.value)
              }
            />

            {errors?.[`addName_${i}`] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[`addName_${i}`]}
              </p>
            )}

            {/* ICON UPLOAD */}
            {/* <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Amenity Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {amenity.icon ? (
                  <img
                    src={URL.createObjectURL(amenity.icon)}
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
                  onChange={(e) =>
                    changeAdditional(i, "icon", e.target.files[0])
                  }
                />
              </label>
            </div> */}

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Amenity Icon
              </label>

              {/* <div className="grid grid-cols-6 gap-2">
                {amenityIcons.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => changeAdditional(i, "icon", item.name)}
                      className={`p-2 border rounded flex items-center justify-center
          ${
            amenity.icon === item.name
              ? "border-[#c1b296] bg-[#c1b296]/20"
              : "border-gray-300"
          }`}
                    >
                      <Icon size={20} />
                    </button>
                  );
                })}
              </div> */}
              <IconPicker
                value={amenity.icon}
                onSelect={(iconName) => changeAdditional(i, "icon", iconName)}
              />
              {errors?.[`addIcon_${i}`] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[`addIcon_${i}`]}
                </p>
              )}
            </div>

            {additionalAmenities.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeAdditional(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Amenity
                </button>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addAdditionalAmenity}
          disabled={!canAddAdditional}
          className={`px-4 py-2 rounded ${
            canAddAdditional
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          + Add More Additional Amenity
        </button>
      </div>
    </div>
  );
}
