// import { useState } from "react";
// import { addRoom, updateRoom, deleteRoom } from "../../api/propertiesApi";

// export default function RoomsSection({ property, setProperty }) {
//   const [bedroomName, setBedroomName] = useState("");
//   const [bed, setBed] = useState("");
//   const [icon, setIcon] = useState(null);

//   /* ======================
//      ADD ROOM
//   ====================== */

//   const submitRoom = async () => {
//     const formData = new FormData();

//     formData.append("bedroomName", bedroomName);
//     formData.append("bed", bed);
//     formData.append("icon", icon);

//     const res = await addRoom(property._id, formData);

//     setProperty(res.data);

//     setBedroomName("");
//     setBed("");
//     setIcon(null);
//   };

//   /* ======================
//      UPDATE ROOM
//   ====================== */

//   const updateRoomItem = async (room) => {
//     const formData = new FormData();

//     formData.append("bedroomName", room.bedroomName);
//     formData.append("bed", room.bed);

//     if (room.newIcon) {
//       formData.append("icon", room.newIcon);
//     }

//     const res = await updateRoom(property._id, room._id, formData);

//     setProperty(res.data);
//   };

//   /* ======================
//      DELETE ROOM
//   ====================== */

//   const removeRoom = async (roomId) => {
//     const res = await deleteRoom(property._id, roomId);

//     setProperty(res.data);
//   };

//   /* ======================
//      CHANGE ROOM FIELD
//   ====================== */

//   const changeRoom = (index, field, value) => {
//     const updated = [...property.rooms];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       rooms: updated,
//     });
//   };

//   const changeIcon = (index, file) => {
//     const updated = [...property.rooms];

//     updated[index].newIcon = file;

//     setProperty({
//       ...property,
//       rooms: updated,
//     });
//   };

//   return (
//     <div className="space-y-10">
//       {/* EXISTING ROOMS */}

//       <div className="bg-white p-6 rounded-lg space-y-6">
//         <h2 className="text-xl font-semibold">Rooms</h2>

//         {property.rooms?.map((room, i) => (
//           <div
//             key={room._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-4"
//           >
//             <input
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40"
//               value={room.bedroomName}
//               onChange={(e) => changeRoom(i, "bedroomName", e.target.value)}
//               placeholder="Bedroom Name"
//             />

//             <input
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40"
//               value={room.bed}
//               onChange={(e) => changeRoom(i, "bed", e.target.value)}
//               placeholder="Bed Type (King / Queen / Twin)"
//             />

//             {/* ICON UPLOAD */}
//             <div className=" w-[180px]">
//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
//                 {room.newIcon ? (
//                   <img
//                     src={URL.createObjectURL(room.newIcon)}
//                     className="w-20 h-20 object-contain"
//                   />
//                 ) : room.icon ? (
//                   <img src={room.icon} className="w-20 h-20 object-contain" />
//                 ) : (
//                   <div className="flex flex-col items-center text-gray-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-10 h-10 mb-2 text-gray-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                       />
//                     </svg>

//                     <span className="text-sm">Upload Room Icon</span>
//                   </div>
//                 )}

//                 <input
//                   type="file"
//                   hidden
//                   onChange={(e) => changeIcon(i, e.target.files[0])}
//                 />
//               </label>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => updateRoomItem(room)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => removeRoom(room._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ADD ROOM */}

//       <div className="bg-white p-6 rounded-lg space-y-4">
//         <h2 className="text-xl font-semibold">Add Room</h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Bedroom Name"
//           value={bedroomName}
//           onChange={(e) => setBedroomName(e.target.value)}
//         />

//         <input
//           className="w-full border border-gray-300 rounded-md p-3"
//           placeholder="Bed Type (King / Queen / Twin)"
//           value={bed}
//           onChange={(e) => setBed(e.target.value)}
//         />

//         {/* ICON UPLOAD */}
//         <div className=" w-[180px]">
//           <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
//             {icon ? (
//               <img
//                 src={URL.createObjectURL(icon)}
//                 className="w-20 h-20 object-contain"
//               />
//             ) : (
//               <div className="flex flex-col items-center text-gray-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-10 h-10 mb-2 text-gray-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                   />
//                 </svg>

//                 <span className="text-sm">Upload Room Icon</span>
//               </div>
//             )}

//             <input
//               type="file"
//               hidden
//               onChange={(e) => setIcon(e.target.files[0])}
//             />
//           </label>
//         </div>
//         <button
//           onClick={submitRoom}
//           className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
//         >
//           Add Room
//         </button>
//       </div>
//     </div>
//   );

import { useState } from "react";
import IconPicker from "../../components/IconPicker";
import { addRoom, updateRoom, deleteRoom } from "../../api/propertiesApi";

export default function RoomsSection({ property, setProperty }) {
  const [bedroomName, setBedroomName] = useState("");
  const [bed, setBed] = useState("");
  const [icon, setIcon] = useState("");

  /* ======================
     ADD ROOM
  ====================== */

  const submitRoom = async () => {
    const payload = {
      bedroomName,
      bed,
      icon,
    };

    const res = await addRoom(property._id, payload);

    setProperty(res.data);

    setBedroomName("");
    setBed("");
    setIcon("");
  };

  /* ======================
     UPDATE ROOM
  ====================== */

  const updateRoomItem = async (room) => {
    const payload = {
      bedroomName: room.bedroomName,
      bed: room.bed,
      icon: room.icon,
    };

    const res = await updateRoom(property._id, room._id, payload);

    setProperty(res.data);
  };

  /* ======================
     DELETE ROOM
  ====================== */

  const removeRoom = async (roomId) => {
    const res = await deleteRoom(property._id, roomId);

    setProperty(res.data);
  };

  /* ======================
     CHANGE ROOM FIELD
  ====================== */

  const changeRoom = (index, field, value) => {
    const updated = [...property.rooms];

    updated[index][field] = value;

    setProperty({
      ...property,
      rooms: updated,
    });
  };

  return (
    <div className="space-y-10">
      {/* EXISTING ROOMS */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Rooms</h2>

        {property.rooms?.map((room, i) => (
          <div
            key={room._id}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={room.bedroomName}
              onChange={(e) => changeRoom(i, "bedroomName", e.target.value)}
              placeholder="Bedroom Name"
            />

            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={room.bed}
              onChange={(e) => changeRoom(i, "bed", e.target.value)}
              placeholder="Bed Type"
            />

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Bed Icon
              </label>

              <IconPicker
                value={room.icon}
                onSelect={(iconName) => changeRoom(i, "icon", iconName)}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => updateRoomItem(room)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeRoom(room._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD ROOM */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Add Room</h2>

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Bedroom Name"
          value={bedroomName}
          onChange={(e) => setBedroomName(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Bed Type"
          value={bed}
          onChange={(e) => setBed(e.target.value)}
        />

        <IconPicker value={icon} onSelect={setIcon} />

        <button
          onClick={submitRoom}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Add Room
        </button>
      </div>
    </div>
  );
}
