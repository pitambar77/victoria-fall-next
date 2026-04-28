// // src/components/EditRoom.jsx
// import React, { useState, useEffect } from 'react';

// const EditRoom = () => {
//   const [formData, setFormData] = useState({
//     roomNumber: '103', // Mock data
//     roomType: 'Delux',
//     // ... other fields
//   });

//   useEffect(() => {
//     // In a real application, you'd fetch the room data here using a route parameter
//     // For example: const { roomId } = useParams();
//     // axios.get(`/api/rooms/${roomId}`).then(response => setFormData(response.data));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Updated Room Data:', formData);
//     // API call to update the room
//     alert('Room updated successfully!');
//   };

//   return (
//     <div className="bg-gray-800 rounded-lg shadow-lg p-6">
//       <h2 className="text-xl font-semibold text-gray-100 mb-6">Edit Room Details</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Same form fields as AddRoom, but with pre-filled data */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-400">Room Number</label>
//             <input type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange}
//               className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
//           </div>
//           {/* ... other fields */}
//         </div>

//         <div className="pt-4">
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditRoom;


// src/components/EditRoom.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data to simulate fetching a specific room from an API
const mockRoomData = {
  roomNumber: '103',
  roomType: 'Delux',
  capacity: '2',
  extraCapability: 'Jacuzzi, Private Balcony',
  roomPrice: '30',
  bedCharge: '5',
  roomSize: '25 sqm',
  bedNumber: '1',
  bedType: 'Queen',
  roomDescription: 'A quiet, cozy room located on the third floor with a view of the garden.',
  reserveCondition: 'Reservation requires a 50% deposit. No pets allowed.',
  roomImages: [], // For demonstration, assume no initial images
};

const EditRoom = () => {
  const { id } = useParams(); // Get the room number from the URL
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(true);

  // This useEffect fetches the room data based on the URL parameter
  useEffect(() => {
    setLoading(true);
    // In a real application, you would make an API call like:
    // axios.get(`/api/rooms/${id}`).then(response => {
    //   setFormData(response.data);
    //   setLoading(false);
    // });

    // Using mock data for demonstration purposes
    setFormData(mockRoomData);
    setLoading(false);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, roomImages: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Room Data:', formData);
    // This is where you would make the API call to update the room
    alert('Room updated successfully!');
  };

  if (loading) {
    return <div className="text-center text-gray-400">Loading room data...</div>;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-100 mb-6">Edit Room: {id}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {/* Room Type */}
          <div>
            <label htmlFor="roomType" className="block text-sm font-medium text-gray-400">Room Type *</label>
            <input type="text" id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>

          {/* Capacity */}
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-400">Capacity *</label>
            <input type="text" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>

          {/* Extra Capability */}
          <div>
            <label htmlFor="extraCapability" className="block text-sm font-medium text-gray-400">Extra Capability *</label>
            <input type="text" id="extraCapability" name="extraCapability" value={formData.extraCapability} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>

          {/* Room Price */}
          <div>
            <label htmlFor="roomPrice" className="block text-sm font-medium text-gray-400">Room Price *</label>
            <input type="number" id="roomPrice" name="roomPrice" value={formData.roomPrice} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>

          {/* Bed Charge */}
          <div>
            <label htmlFor="bedCharge" className="block text-sm font-medium text-gray-400">Bed Charge *</label>
            <input type="number" id="bedCharge" name="bedCharge" value={formData.bedCharge} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>

          {/* Room Size */}
          <div>
            <label htmlFor="roomSize" className="block text-sm font-medium text-gray-400">Room Size *</label>
            <input type="text" id="roomSize" name="roomSize" value={formData.roomSize} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>

          {/* Bed Number */}
          <div>
            <label htmlFor="bedNumber" className="block text-sm font-medium text-gray-400">Bed Number *</label>
            <input type="number" id="bedNumber" name="bedNumber" value={formData.bedNumber} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>

          {/* Bed Type */}
          <div>
            <label htmlFor="bedType" className="block text-sm font-medium text-gray-400">Bed Type *</label>
            <input type="text" id="bedType" name="bedType" value={formData.bedType} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100" />
          </div>
        </div>

        {/* Full-width fields (textarea) */}
        <div className="space-y-6">
          {/* Room Description */}
          <div>
            <label htmlFor="roomDescription" className="block text-sm font-medium text-gray-400">Room Description *</label>
            <textarea id="roomDescription" name="roomDescription" rows="3" value={formData.roomDescription} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100"></textarea>
          </div>

          {/* Reserve Condition */}
          <div>
            <label htmlFor="reserveCondition" className="block text-sm font-medium text-gray-400">Reserve Condition *</label>
            <textarea id="reserveCondition" name="reserveCondition" rows="3" value={formData.reserveCondition} onChange={handleChange} required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-2 text-gray-100"></textarea>
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
          <button type="submit"
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRoom;