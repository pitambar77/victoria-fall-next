// import React, { useState, useEffect } from "react";
// import { createRestaurant, updateRestaurant } from "../api/restaurantApi";
// import MenuManager from "./MenuManager";

// const RestaurantForm = ({ selectedRestaurant, onSave }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     overview: "",
//     subDescription: "",
//     address1: "",
//     address2: "",
//     openingTime: "",
//     closingTime: "",
//     contactNumber: "",
//     bannerImages: [],
//     galleryImages: [],
//     menu: [],
//   });

//   // Populate form when editing
//   useEffect(() => {
//     if (selectedRestaurant) {
//       setFormData({
//         ...selectedRestaurant,
//         bannerImages: [],
//         galleryImages: [],
//       });
//     }
//   }, [selectedRestaurant]);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle file change
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.files });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();

//       // Append text fields
//       ["name","overview","subDescription","address1","address2","openingTime","closingTime","contactNumber"].forEach(key => {
//         data.append(key, formData[key]);
//       });

//       // Append files
//       if (formData.bannerImages.length) {
//         Array.from(formData.bannerImages).forEach(file => data.append("bannerImages", file));
//       }
//       if (formData.galleryImages.length) {
//         Array.from(formData.galleryImages).forEach(file => data.append("galleryImages", file));
//       }

//       // Append menu as JSON
//       data.append("menu", JSON.stringify(formData.menu));

//       if (selectedRestaurant) {
//         await updateRestaurant(selectedRestaurant._id, data);
//       } else {
//         await createRestaurant(data);
//       }

//       onSave();
//     } catch (err) {
//       console.error(err);
//       alert("Error saving restaurant. Check backend logs.");
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow rounded mb-4">
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Restaurant Name"
//           className="border p-2 w-full"
//           required
//         />
//         <textarea
//           name="overview"
//           value={formData.overview}
//           onChange={handleChange}
//           placeholder="Overview"
//           className="border p-2 w-full"
//         />
//         <textarea
//           name="subDescription"
//           value={formData.subDescription}
//           onChange={handleChange}
//           placeholder="Sub Description"
//           className="border p-2 w-full"
//         />
//         <input
//           name="address1"
//           value={formData.address1}
//           onChange={handleChange}
//           placeholder="Address 1"
//           className="border p-2 w-full"
//         />
//         <input
//           name="address2"
//           value={formData.address2}
//           onChange={handleChange}
//           placeholder="Address 2"
//           className="border p-2 w-full"
//         />
//         <input
//           name="openingTime"
//           value={formData.openingTime}
//           onChange={handleChange}
//           placeholder="Opening Time"
//           className="border p-2 w-full"
//         />
//         <input
//           name="closingTime"
//           value={formData.closingTime}
//           onChange={handleChange}
//           placeholder="Closing Time"
//           className="border p-2 w-full"
//         />
//         <input
//           name="contactNumber"
//           value={formData.contactNumber}
//           onChange={handleChange}
//           placeholder="Contact Number"
//           className="border p-2 w-full"
//         />

//         <label>Banner Images</label>
//         <input
//           type="file"
//           name="bannerImages"
//           multiple
//           onChange={handleFileChange}
//         />

//         <label>Gallery Images</label>
//         <input
//           type="file"
//           name="galleryImages"
//           multiple
//           onChange={handleFileChange}
//         />

//         {/* Menu manager component */}
//         <MenuManager
//           menu={formData.menu}
//           setMenu={(menu) => setFormData({ ...formData, menu })}
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {selectedRestaurant ? "Update" : "Create"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RestaurantForm;


import React, { useState, useEffect } from "react";
import { createRestaurant, updateRestaurant } from "../api/restaurantApi";
import MenuManager from "./MenuManager";

const RestaurantForm = ({ selectedRestaurant, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    overview: "",
    subDescription: "",
    address1: "",
    address2: "",
    openingTime: "",
    closingTime: "",
    contactNumber: "",
    bannerImages: [],
    galleryImages: [],
    menu: [],
  });

  useEffect(() => {
    if (selectedRestaurant) {
      setFormData({
        ...selectedRestaurant,
        bannerImages: [],
        galleryImages: [],
      });
    }
  }, [selectedRestaurant]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      ["name","overview","subDescription","address1","address2","openingTime","closingTime","contactNumber"].forEach(key => {
        data.append(key, formData[key]);
      });

      if (formData.bannerImages.length) {
        Array.from(formData.bannerImages).forEach(file => data.append("bannerImages", file));
      }

      if (formData.galleryImages.length) {
        Array.from(formData.galleryImages).forEach(file => data.append("galleryImages", file));
      }

      data.append("menu", JSON.stringify(formData.menu));

      if (selectedRestaurant?._id) {
        await updateRestaurant(selectedRestaurant._id, data);
      } else {
        await createRestaurant(data);
      }

      onSave();
    } catch (err) {
      console.error(err);
      alert("Error saving restaurant. Check backend logs.");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Restaurant Name" className="border p-2 w-full" required />
        <textarea name="overview" value={formData.overview} onChange={handleChange} placeholder="Overview" className="border p-2 w-full" />
        <textarea name="subDescription" value={formData.subDescription} onChange={handleChange} placeholder="Sub Description" className="border p-2 w-full" />
        <input name="address1" value={formData.address1} onChange={handleChange} placeholder="Address 1" className="border p-2 w-full" />
        <input name="address2" value={formData.address2} onChange={handleChange} placeholder="Address 2" className="border p-2 w-full" />
        <input name="openingTime" value={formData.openingTime} onChange={handleChange} placeholder="Opening Time" className="border p-2 w-full" />
        <input name="closingTime" value={formData.closingTime} onChange={handleChange} placeholder="Closing Time" className="border p-2 w-full" />
        <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" className="border p-2 w-full" />

        <label>Banner Images</label>
        <input type="file" name="bannerImages" multiple onChange={handleFileChange} />
        <label>Gallery Images</label>
        <input type="file" name="galleryImages" multiple onChange={handleFileChange} />

        <MenuManager menu={formData.menu} setMenu={(menu) => setFormData({ ...formData, menu })} />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {selectedRestaurant?._id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;
