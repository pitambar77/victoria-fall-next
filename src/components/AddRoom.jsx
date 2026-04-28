// // src/components/AddRoom.jsx
// import React, { useState } from 'react';

// const AddRoom = () => {
//   const [formData, setFormData] = useState({
//     roomNumber: '',
//     roomType: '',
//     ac: '',
//     meal: '',
//     capacity: 1,
//     rent: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('New Room Data:', formData);
//     // Here you would make an API call to add the new room
//     alert('Room added successfully!');
//   };

//   return (
//     <div className="bg-gray-800 rounded-lg shadow-lg p-6">
//       <h2 className="text-xl font-semibold text-gray-100 mb-6">Add New Room</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-400">Room Number</label>
//             <input type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange}
//               className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-400">Room Type</label>
//             <select name="roomType" value={formData.roomType} onChange={handleChange}
//               className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100">
//               <option value="">Select Type</option>
//               <option value="Single">Single</option>
//               <option value="Double">Double</option>
//               <option value="Super Delux">Super Delux</option>
//               <option value="Delux">Delux</option>
//               {/* Add more room types */}
//             </select>
//           </div>
//         </div>

//         {/* ... (repeat for other fields like AC, Meal, Capacity, Rent) */}

//         <div className="pt-4">
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
//             Add Room
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddRoom;

// src/components/AddRoom.jsx

import React, { useState } from 'react';

const AddRoom = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    capacity: '',
    extraCapability: '',
    roomPrice: '',
    bedCharge: '',
    roomSize: '',
    bedNumber: '',
    bedType: '',
    roomDescription: '',
    reserveCondition: '',
    roomImages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, roomImages: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Room Data:', formData);
    alert('Room data captured! Check the console for details.');
  };

  const handleClear = () => {
    setFormData({
      roomType: '',
      capacity: '',
      extraCapability: '',
      roomPrice: '',
      bedCharge: '',
      roomSize: '',
      bedNumber: '',
      bedType: '',
      roomDescription: '',
      reserveCondition: '',
      roomImages: [],
    });
  };

  return (
    // The main container now has no max-width, making it full width
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Add Room</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Two-Column Grid for most fields */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {/* Room Type */}
          <div>
            <label htmlFor="roomType" className="block text-sm font-medium text-gray-400">Room Type *</label>
            <input type="text" id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} placeholder="Add Room Type" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>

          {/* Capacity */}
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-400">Capacity *</label>
            <input type="text" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} placeholder="Capacity" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>

          {/* Extra Capability */}
          <div>
            <label htmlFor="extraCapability" className="block text-sm font-medium text-gray-400">Extra Capability *</label>
            <input type="text" id="extraCapability" name="extraCapability" value={formData.extraCapability} onChange={handleChange} placeholder="Extra Capability" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>

          {/* Room Price */}
          <div>
            <label htmlFor="roomPrice" className="block text-sm font-medium text-gray-400">Room Price *</label>
            <input type="number" id="roomPrice" name="roomPrice" value={formData.roomPrice} onChange={handleChange} placeholder="Room Price" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>

          {/* Bed Charge */}
          <div>
            <label htmlFor="bedCharge" className="block text-sm font-medium text-gray-400">Bed Charge *</label>
            <input type="number" id="bedCharge" name="bedCharge" value={formData.bedCharge} onChange={handleChange} placeholder="Bed Charge" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>

          {/* Room Size */}
          <div>
            <label htmlFor="roomSize" className="block text-sm font-medium text-gray-400">Room Size *</label>
            <input type="text" id="roomSize" name="roomSize" value={formData.roomSize} onChange={handleChange} placeholder="Room Size" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>

          {/* Bed Number */}
          <div>
            <label htmlFor="bedNumber" className="block text-sm font-medium text-gray-400">Bed Number *</label>
            <input type="number" id="bedNumber" name="bedNumber" value={formData.bedNumber} onChange={handleChange} placeholder="Bed Number" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>

          {/* Bed Type */}
          <div>
            <label htmlFor="bedType" className="block text-sm font-medium text-gray-400">Bed Type *</label>
            <input type="text" id="bedType" name="bedType" value={formData.bedType} onChange={handleChange} placeholder="Bed Type" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500" />
          </div>
        </div>

        {/* Full-width fields (textarea) */}
        <div className="space-y-6">
          {/* Room Description */}
          <div>
            <label htmlFor="roomDescription" className="block text-sm font-medium text-gray-400">Room Description *</label>
            <textarea id="roomDescription" name="roomDescription" rows="3" value={formData.roomDescription} onChange={handleChange} placeholder="Room Description" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500"></textarea>
          </div>

          {/* Reserve Condition */}
          <div>
            <label htmlFor="reserveCondition" className="block text-sm font-medium text-gray-400">Reserve Condition *</label>
            <textarea id="reserveCondition" name="reserveCondition" rows="3" value={formData.reserveCondition} onChange={handleChange} placeholder="Reserve Condition" required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100 placeholder-gray-500"></textarea>
          </div>
        </div>
        
        {/* Full-width image upload */}
        <div className="pt-2">
          <label htmlFor="roomImages" className="block text-lg font-semibold text-gray-400 mb-2">Room Images</label>
          <div className="bg-gray-700 border border-gray-600 rounded-md overflow-hidden">
            <input type="file" id="roomImages" name="roomImages" onChange={handleImageChange} multiple
              className="hidden" />
            <label htmlFor="roomImages" className="cursor-pointer flex items-center">
              <span className="bg-gray-600 text-gray-100 px-4 py-2 hover:bg-gray-500 transition-colors">Choose file</span>
              <span className="text-gray-400 px-4 py-2 truncate flex-1">
                {formData.roomImages.length > 0
                  ? `${formData.roomImages.length} file(s) chosen`
                  : 'No file chosen'}
              </span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 pt-4">
          <button type="button" onClick={handleClear}
            className="px-6 py-2 bg-gray-700 text-gray-200 font-medium rounded-md hover:bg-gray-600 transition-colors">
            Clear
          </button>
          <button type="submit"
            className="px-6 py-2 bg-[#f25922] text-white font-medium rounded-md hover:bg-[#aca188] transition-colors">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;