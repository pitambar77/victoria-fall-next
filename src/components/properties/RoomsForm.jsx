import IconPicker from "../../components/IconPicker";

export default function RoomsForm({
  property,
  setProperty,
  errors,
  clearError,
}) {
  /* Ensure one room exists */
  const rooms =
    property.rooms?.length > 0
      ? property.rooms
      : [{ bedroomName: "", bed: "", icon: "" }];

  /* =====================
     ADD ROOM
  ===================== */

  // const addRoom = () => {
  //   setProperty({
  //     ...property,
  //     rooms: [
  //       ...rooms,
  //       {
  //         bedroomName: "",
  //         bed: "",
  //         icon: "",
  //       },
  //     ],
  //   });
  // };

  const addRoom = () => {
    const lastRoom = rooms[rooms.length - 1];

    if (
      !lastRoom.bedroomName.trim() ||
      !lastRoom.bed.trim() ||
      !lastRoom.icon
    ) {
      alert("Please fill all room fields before adding another room.");
      return;
    }

    setProperty({
      ...property,
      rooms: [
        ...rooms,
        {
          bedroomName: "",
          bed: "",
          icon: "",
        },
      ],
    });
  };

  /* =====================
     HANDLE CHANGE
  ===================== */

  const handleChange = (index, field, value) => {
    const updated = [...rooms];
    updated[index][field] = value;

    setProperty({
      ...property,
      rooms: updated,
    });
    clearError(`bedroomName_${index}`);
    clearError(`bed_${index}`);
    clearError(`icon_${index}`);
  };

  /* =====================
     REMOVE ROOM
  ===================== */

  const removeRoom = (index) => {
    const updated = rooms.filter((_, i) => i !== index);

    setProperty({
      ...property,
      rooms: updated,
    });
  };

  const lastRoom = rooms[rooms.length - 1];

  const isLastRoomFilled =
    lastRoom?.bedroomName?.trim() && lastRoom?.bed?.trim() && lastRoom?.icon;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Rooms</h2>

      {rooms.map((room, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* Bedroom Name */}
          <input
            className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.[`bedroomName_${i}`]
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
            placeholder="Bedroom Name*"
            value={room.bedroomName}
            onChange={(e) => handleChange(i, "bedroomName", e.target.value)}
          />

          {errors?.[`bedroomName_${i}`] && (
            <p className="text-red-500 text-sm">{errors[`bedroomName_${i}`]}</p>
          )}
          {/* Bed Type */}
          {/* <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            placeholder="Bed Type (King / Queen / Twin)"
            value={room.bed}
            onChange={(e) => handleChange(i, "bed", e.target.value)}
          /> */}

          <select
            className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.[`bed_${i}`]
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
            value={room.bed}
            required
            onChange={(e) => handleChange(i, "bed", e.target.value)}
          >
            <option value="">Select Bed Type</option>
            <option value="King">King</option>
            <option value="Queen">Queen</option>
            <option value="Twin">Twin</option>
            <option value="Double">Double</option>
            <option value="Single">Single</option>
            <option value="Twin XL">Twin XL</option>
            <option value="Full">Full</option>
            <option value="California King">California King</option>
            <option value="Bunk Bed">Bunk Bed</option>
            <option value="Sofa Bed">Sofa Bed</option>
            <option value="Murphy Bed">Murphy Bed</option>
            <option value="Day Bed">Day Bed</option>
            <option value="Trundle Bed">Trundle Bed</option>
            <option value="Futon">Futon</option>
          </select>

          {errors?.[`bed_${i}`] && (
            <p className="text-red-500 text-sm">{errors[`bed_${i}`]}</p>
          )}
          {/* ICON UPLOAD */}
          {/* <div className="w-[220px]">
            <label className="text-gray-700 mb-2 block">Upload Bed Icon</label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
              {room.icon ? (
                <img
                  src={URL.createObjectURL(room.icon)}
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

                  <span className="text-sm text-gray-500">Click to upload</span>
                </>
              )}

              <input
                type="file"
                hidden
                onChange={(e) => handleChange(i, "icon", e.target.files[0])}
              />
            </label>
          </div> */}

          {/* ICON SELECT */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Bed Icon
            </label>

            <IconPicker
              value={room.icon}
              onSelect={(iconName) => handleChange(i, "icon", iconName)}
            />
          </div>

          {errors?.[`icon_${i}`] && (
            <p className="text-red-500 text-sm">{errors[`icon_${i}`]}</p>
          )}

          {/* Remove Button */}
          {rooms.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeRoom(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Room
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add Room */}
      {/* <button
        onClick={addRoom}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        + Add Room
      </button> */}

      <button
        onClick={addRoom}
        disabled={!isLastRoomFilled}
        className={`px-4 py-2 rounded ${
          isLastRoomFilled
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        + Add Room
      </button>
    </div>
  );
}
