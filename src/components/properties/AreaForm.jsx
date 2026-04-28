import React from "react";
import IconPicker from "../../components/IconPicker";

const AreaForm = ({ property, setProperty, errors, clearError }) => {
  /* Ensure one activity exists */
  const activities =
    property.area.relatedactivity?.length > 0
      ? property.area.relatedactivity
      : [{ title: "", shortDescription: "", icon: "" }];

  /* =====================
     BASIC AREA FIELDS
  ===================== */

  // const handleChange = (e) => {
  //   setProperty({
  //     ...property,
  //     area: {
  //       ...property.area,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  //
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProperty({
      ...property,
      area: {
        ...property.area,
        [name]: value,
      },
    });

    clearError(name);
  };

  /* =====================
     RELATED ACTIVITIES
  ===================== */

  // const addActivity = () => {
  //   setProperty({
  //     ...property,
  //     area: {
  //       ...property.area,
  //       relatedactivity: [
  //         ...activities,
  //         {
  //           title: "",
  //           shortDescription: "",
  //           icon: "",
  //         },
  //       ],
  //     },
  //   });
  // };

  const addActivity = () => {
    const lastActivity = activities[activities.length - 1];

    // Check if required fields are filled
    if (
      !lastActivity.title.trim() ||
      !lastActivity.shortDescription.trim() ||
      !lastActivity.icon
    ) {
      alert("Please fill all activity fields before adding a new one.");
      return;
    }

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: [
          ...activities,
          {
            title: "",
            shortDescription: "",
            icon: "",
          },
        ],
      },
    });
  };

  const changeActivity = (index, field, value) => {
    const updated = [...activities];
    updated[index][field] = value;

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated,
      },
    });
  };

  const removeActivity = (index) => {
    const updated = activities.filter((_, i) => i !== index);

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated,
      },
    });
  };

  const lastActivity = activities[activities.length - 1];
  const isLastActivityFilled =
    lastActivity.title.trim() &&
    lastActivity.shortDescription.trim() &&
    lastActivity.icon;

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">Property Location</h2>

      {/* LOCATION NAME */}

      <input
        className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.locationname
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296]"
  }`}
        name="locationname"
        placeholder="Location Name"
        value={property.area.locationname}
        onChange={handleChange}
      />

      {errors?.locationname && (
        <p className="text-red-500 text-sm">{errors.locationname}</p>
      )}

      {/* MAP LINK */}

      <input
        type="url"
        className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.maplink
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296]"
  }`}
        name="maplink"
        placeholder="Google Map Link"
        value={property.area.maplink}
        onChange={handleChange}
      />

      {errors?.maplink && (
        <p className="text-red-500 text-sm">{errors.maplink}</p>
      )}

      {/* RELATED ACTIVITIES */}

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Add Near by Areas</h3>

        {activities.map((activity, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            {/* Activity Title */}
            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Activity Name"
              value={activity.title}
              onChange={(e) => changeActivity(i, "title", e.target.value)}
            />

            {/* Short Description */}
            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Short Description"
              value={activity.shortDescription}
              onChange={(e) =>
                changeActivity(i, "shortDescription", e.target.value)
              }
            />

            {/* ICON UPLOAD */}

            {/* <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Activity Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {activity.icon ? (
                  <img
                    src={URL.createObjectURL(activity.icon)}
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
                  onChange={(e) => changeActivity(i, "icon", e.target.files[0])}
                />
              </label>
            </div> */}

            {/* ICON SELECT */}

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Activity Icon
              </label>

              <IconPicker
                value={activity.icon}
                onSelect={(iconName) => changeActivity(i, "icon", iconName)}
              />
            </div>

            {/* Remove Button */}

            {activities.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeActivity(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Activity
                </button>
              </div>
            )}

            {errors?.[`activity_${i}`] && (
              <p className="text-red-500 text-sm mt-2">
                {errors[`activity_${i}`]}
              </p>
            )}
          </div>
        ))}

        {/* ADD BUTTON */}

        {/* <button
          onClick={addActivity}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add More Activity
        </button> */}

        <button
          onClick={addActivity}
          disabled={!isLastActivityFilled}
          className={`px-4 py-2 rounded ${
            isLastActivityFilled
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          + Add More Activity
        </button>
      </div>
    </div>
  );
};

export default AreaForm;
