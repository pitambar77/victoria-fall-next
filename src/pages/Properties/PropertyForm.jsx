// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import API from "../../api/axiosInstance.js"; // adjust path if needed

// import {
//   createProperty,
//   getProperty,
//   updateProperty,
// } from "../../api/propertyApi";
// import FacilityManager from "../../components/FacilityManager";

// const PropertyForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     shortTitle: "",
//     propertyType: "",
//     overviewTittle: "", // ✅ NEW
//     overview: "",
//     subDescription: "",
//     address1: "",
//     address2: "",
//     checkIn: "",
//     checkOut: "",
//     contactNumber: "",
//     priceperPerson: "",
//     bannerImage: null,
//     overviewImage: null, // ✅ NEW
//     galleryImages: [],
//     facilities: [],
//     faqs: [], // ⬅ added here faq
//   });
//   const [previewBanner, setPreviewBanner] = useState(null);
//   const [previewOverview, setPreviewOverview] = useState(null); // ✅ NEW
//   const [previewGallery, setPreviewGallery] = useState([]);
//   const [galleryUploading, setGalleryUploading] = useState(false);

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isEdit = Boolean(id);

//   // ✅ Fetch restaurant data in edit mode
//   // useEffect(() => {
//   //   if (isEdit) {
//   //     getProperty(id).then((res) => {
//   //       const data = res.data;
//   //       setFormData({
//   //         name: data.name || "",
//   //            shortTitle: data.shortTitle || " ",
//   // propertyType: data.propertyType || " ",
//   //         overview: data.overview || "",
//   //         subDescription: data.subDescription || "",
//   //         address1: data.address1 || " ",

//   //         address2: data.address2 || "",
//   //         checkIn: data.checkIn || "",
//   //         checkOut: data.checkOut || "",
//   //         contactNumber: data.contactNumber || " ",
//   //         priceperPerson: data.priceperPerson || " ",
//   //         bannerImage: null,
//   //         galleryImages: [],
//   //        facilities: data.facilities || [],
//   //       });

//   //       // ✅ Set image previews if URLs are returned
//   //       if (data.bannerImage)
//   //         setPreviewBanner(`https://victoria-fall-backend-production.up.railway.app/api/${data.bannerImage}`);
//   //       if (data.galleryImages)
//   //         setPreviewGallery(
//   //           data.galleryImages.map((img) => `https://victoria-fall-backend-production.up.railway.app/api/${img}`)
//   //         );
//   //     });
//   //   }
//   // }, [id, isEdit]);

//   useEffect(() => {
//     if (isEdit) {
//       getProperty(id).then((res) => {
//         const data = res.data;

//         setFormData({
//           name: data.name || "",
//           shortTitle: data.shortTitle || "",
//           propertyType: data.propertyType || "",
//           overviewTittle: data.overviewTittle || "",
//           overview: data.overview || "",
//           subDescription: data.subDescription || "",
//           address1: data.address1 || "",
//           address2: data.address2 || "",
//           checkIn: data.checkIn || "",
//           checkOut: data.checkOut || "",
//           contactNumber: data.contactNumber || "",
//           priceperPerson: data.priceperPerson || "",
//           bannerImage: null,
//           overviewImage: null,
//           galleryImages: [],
//           facilities: data.facilities || [],
//           faqs: data.faqs || [],
//         });

//         if (data.bannerImage) setPreviewBanner(`API/${data.bannerImage}`);

//         if (data.overviewImage) setPreviewOverview(`API/${data.overviewImage}`);

//         if (data.galleryImages)
//           setPreviewGallery(data.galleryImages.map((img) => `${img}`));
//       });
//     }
//   }, [id, isEdit]);

//   // ✅ Handle input and file changes
//   // const handleChange = (e) => {
//   //   const { name, value, files } = e.target;
//   //   if (files) {
//   //     if (name === "bannerImage") {
//   //       setFormData({ ...formData, bannerImage: files[0] });
//   //       setPreviewBanner(URL.createObjectURL(files[0]));
//   //     } else if (name === "galleryImages") {
//   //       const selectedFiles = Array.from(files);
//   //       setFormData({ ...formData, galleryImages: selectedFiles });
//   //       setPreviewGallery(selectedFiles.map((f) => URL.createObjectURL(f)));
//   //     }
//   //   } else {
//   //     setFormData({ ...formData, [name]: value });
//   //   }
//   // };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (files) {
//       if (name === "bannerImage") {
//         setFormData({ ...formData, bannerImage: files[0] });
//         setPreviewBanner(URL.createObjectURL(files[0]));
//       }

//       if (name === "overviewImage") {
//         setFormData({ ...formData, overviewImage: files[0] });
//         setPreviewOverview(URL.createObjectURL(files[0]));
//       }

//       if (name === "galleryImages") {
//         const selectedFiles = Array.from(files);
//         setFormData({ ...formData, galleryImages: selectedFiles });
//         setPreviewGallery(selectedFiles.map((f) => URL.createObjectURL(f)));
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const uploadSingleGalleryImage = async (file) => {
//     const formData = new FormData();
//     formData.append("galleryImage", file);

//     try {
//       setGalleryUploading(true);

//       const res = await API.post(`/properties/${id}/gallery-image`, formData);

//       // update preview with latest images
//       const updatedImages = res.data.galleryImages.map((img) => img);

//       setPreviewGallery(updatedImages);
//     } catch (error) {
//       console.error("Gallery upload error:", error);
//       alert("Failed to upload image");
//     } finally {
//       setGalleryUploading(false);
//     }
//   };

//   // add facility here

//   const handleFacilitiesChange = (updatedFacilities) => {
//     setFormData({ ...formData, facilities: updatedFacilities });
//   };

//   // ✅ Submit handler (Create / Update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       if (Array.isArray(value) && key !== "facilities" && key !== "faqs") {
//         value.forEach((v) => data.append(key, v));
//       } else if (key === "facilities" || key === "faqs") {
//         data.append(key, JSON.stringify(value)); // ⬅ includes faqs
//       } else if (value) {
//         data.append(key, value);
//       }
//     });

//     try {
//       if (isEdit) {
//         await updateProperty(id, data);
//         alert("properties updated successfully!");
//       } else {
//         await createProperty(data);
//         alert("properties created successfully!");
//       }
//       navigate("/properties");
//     } catch (error) {
//       console.error("Error saving properties:", error);
//       alert("Error saving properties");
//     }
//   };

//   const removeGallery = async (image) => {
//     try {
//       await API.put(`/properties/${id}/gallery-image`, { image });

//       // remove from preview state
//       setPreviewGallery((prev) => prev.filter((img) => img !== image));
//     } catch (error) {
//       console.error("Remove gallery image error:", error);
//       alert("Failed to remove image");
//     }
//   };

//   // Add a new FAQ
//   const handleAddFaq = () => {
//     setFormData({
//       ...formData,
//       faqs: [...formData.faqs, { question: "", answer: "" }],
//     });
//   };

//   // Update FAQ fields
//   const handleFaqChange = (index, field, value) => {
//     const updatedFaqs = [...formData.faqs];
//     updatedFaqs[index][field] = value;
//     setFormData({ ...formData, faqs: updatedFaqs });
//   };

//   // Remove FAQ
//   const handleRemoveFaq = (index) => {
//     const updatedFaqs = [...formData.faqs];
//     updatedFaqs.splice(index, 1);
//     setFormData({ ...formData, faqs: updatedFaqs });
//   };

//   return (
// <div className="p-6 max-w-3xl ">
//   <h2 className="text-xl font-semibold mb-4">
//     {isEdit ? "Edit properties" : "Add New properties"}
//   </h2>

//   <form onSubmit={handleSubmit} className="space-y-4">
//     <input
//       name="name"
//       placeholder="Property Name"
//       value={formData.name}
//       onChange={handleChange}
//       className="w-full border p-2 rounded"
//       required
//     />
//     <input
//       name="shortTitle"
//       placeholder="Short Title "
//       value={formData.shortTitle}
//       onChange={handleChange}
//       className="w-full border p-2 rounded"
//       required
//     />
//     <input
//       name="propertyType"
//       placeholder="Property Type"
//       value={formData.propertyType}
//       onChange={handleChange}
//       className="w-full border p-2 rounded"
//       required
//     />

//     {/* ✅ Banner image upload + preview */}
//     <div>
//       <label className="block font-medium mb-1">Banner Image</label>
//       <input type="file" name="bannerImage" onChange={handleChange} />
//       {previewBanner && (
//         <img
//           src={previewBanner}
//           alt="Banner Preview"
//           className="mt-2 w-40 h-24 object-cover rounded"
//         />
//       )}
//     </div>

//     <input
//       name="overviewTittle"
//       placeholder="Overview Title"
//       value={formData.overviewTittle}
//       onChange={handleChange}
//       className="w-full border p-2 rounded"
//     />

//     <textarea
//       name="overview"
//       placeholder="Overview"
//       value={formData.overview}
//       onChange={handleChange}
//       className="w-full border p-2 rounded"
//     />

//     <input
//       name="subDescription"
//       placeholder="Sub Description"
//       value={formData.subDescription}
//       onChange={handleChange}
//       className="w-full border p-2 rounded"
//     />

//     <div className="grid grid-cols-2 gap-4">
//       <input
//         name="address1"
//         placeholder="Address 1"
//         value={formData.address1}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       />
//       <input
//         name="address2"
//         placeholder="Address 2"
//         value={formData.address2}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       />
//     </div>

//     <div className="grid grid-cols-2 gap-4">
//       <input
//         name="checkIn"
//         placeholder="Check In"
//         value={formData.checkIn}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       />
//       <input
//         name="checkOut"
//         placeholder="Check Out"
//         value={formData.checkOut}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       />
//     </div>

//     <div className="grid grid-cols-2 gap-4">
//       <input
//         name="contactNumber"
//         type="number"
//         placeholder="Contact Number"
//         value={formData.contactNumber}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       />
//       <input
//         name="priceperPerson"
//         type="number"
//         placeholder="Price per Person"
//         value={formData.priceperPerson}
//         onChange={handleChange}
//         className="border p-2 rounded"
//       />
//     </div>

//     <div>
//       <label className="block font-medium mb-1">Overview Image</label>
//       <input type="file" name="overviewImage" onChange={handleChange} />
//       {previewOverview && (
//         <img
//           src={previewOverview}
//           alt="Overview Preview"
//           className="mt-2 w-40 h-24 object-cover rounded"
//         />
//       )}
//     </div>

//     {/* ✅ Gallery images upload + preview */}
//     <div>
//       {/* <label className="block font-medium mb-1">Gallery Images</label>
//       <input
//         type="file"
//         name="galleryImages"
//         multiple
//         onChange={handleChange}
//       /> */}
//       <div>
//         <label className="block font-medium mb-1">Add Gallery Image</label>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => uploadSingleGalleryImage(e.target.files[0])}
//           disabled={!isEdit || galleryUploading}
//         />

//         {!isEdit && (
//           <p className="text-sm text-gray-500">
//             Save property first to add gallery images
//           </p>
//         )}
//       </div>

//       {/* <div className="flex gap-2 flex-wrap mt-2">
//         {previewGallery.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt={`Gallery ${i}`}
//             className="w-24 h-24 object-cover rounded"
//           />
//         ))}
//       </div> */}
//       <div className="flex gap-4 flex-wrap mt-2">
//         {previewGallery.map((img, i) => (
//           <div key={i} className="relative">
//             <img
//               src={img}
//               alt={`Gallery ${i}`}
//               className="w-24 h-24 object-cover rounded"
//             />

//             {isEdit && (
//               <button
//                 type="button"
//                 onClick={() => removeGallery(img)}
//                 className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>

//     <FacilityManager
//       facilities={formData.facilities}
//       setFacilities={handleFacilitiesChange}
//     />

//     {/* FAQ SECTION */}
//     <div className="space-y-2 border p-4 rounded-md">
//       <h3 className="font-semibold text-lg">FAQ Section</h3>

//       {formData.faqs.map((faq, index) => (
//         <div key={index} className="border p-3 rounded-md space-y-2">
//           <input
//             type="text"
//             placeholder="Question"
//             className="w-full border p-2 rounded"
//             value={faq.question}
//             onChange={(e) =>
//               handleFaqChange(index, "question", e.target.value)
//             }
//           />
//           <textarea
//             placeholder="Answer"
//             className="w-full border p-2 rounded"
//             value={faq.answer}
//             onChange={(e) =>
//               handleFaqChange(index, "answer", e.target.value)
//             }
//           ></textarea>

//           <button
//             type="button"
//             className="text-red-600 underline"
//             onClick={() => handleRemoveFaq(index)}
//           >
//             Remove FAQ
//           </button>
//         </div>
//       ))}

//       <button
//         type="button"
//         className="bg-blue-600 text-white px-3 py-1 rounded"
//         onClick={handleAddFaq}
//       >
//         + Add FAQ
//       </button>
//     </div>

//     <button
//       type="submit"
//       className="bg-green-600 text-white px-4 py-2 rounded"
//     >
//       {isEdit ? "Update" : "Create"}
//     </button>
//   </form>
// </div>
//   );
// };

// export default PropertyForm;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/axiosInstance.js";

import {
  createProperty,
  getProperty,
  updateProperty,
} from "../../api/propertyApi";
import FacilityManager from "../../components/FacilityManager";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortTitle: "",
    propertyType: "",
    overviewTittle: "",
    overview: "",
    subDescription: "",
    address1: "",
    address2: "",
    checkIn: "",
    checkOut: "",
    contactNumber: "",
    priceperPerson: "",
    map: "",
    bannerImage: null,
    overviewImage: null,
    galleryImages: [],
    facilities: [],
    faqs: [],
  });

  const [previewBanner, setPreviewBanner] = useState(null);
  const [previewOverview, setPreviewOverview] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);
  const [galleryUploading, setGalleryUploading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  /* ================= FETCH PROPERTY (EDIT MODE) ================= */
  useEffect(() => {
    if (!isEdit) return;

    getProperty(id)
      .then((res) => {
        const data = res.data;

        setFormData({
          name: data.name || "",
          shortTitle: data.shortTitle || "",
          propertyType: data.propertyType || "",
          overviewTittle: data.overviewTittle || "",
          overview: data.overview || "",
          subDescription: data.subDescription || "",
          address1: data.address1 || "",
          address2: data.address2 || "",
          checkIn: data.checkIn || "",
          checkOut: data.checkOut || "",
          contactNumber: data.contactNumber || "",
          priceperPerson: data.priceperPerson || "",
          map: data.map || "",
          bannerImage: null,
          overviewImage: null,
          galleryImages: [],
          facilities: data.facilities || [],
          faqs: data.faqs || [],
        });

        if (data.bannerImage) setPreviewBanner(data.bannerImage);
        if (data.overviewImage) setPreviewOverview(data.overviewImage);
        if (data.galleryImages) setPreviewGallery(data.galleryImages);
      })
      .catch(() => {
        alert("Property not found");
        navigate("/properties");
      });
  }, [id, isEdit, navigate]);

  const refreshProperty = async () => {
    const res = await getProperty(id);
    setFormData((p) => ({
      ...p,
      facilities: res.data.facilities || [],
    }));
  };

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const file = files[0];

      if (name === "bannerImage") {
        setFormData((p) => ({ ...p, bannerImage: file }));
        setPreviewBanner(URL.createObjectURL(file));
      }

      if (name === "overviewImage") {
        setFormData((p) => ({ ...p, overviewImage: file }));
        setPreviewOverview(URL.createObjectURL(file));
      }

      if (name === "galleryImages") {
        const selectedFiles = Array.from(files);
        setFormData((p) => ({ ...p, galleryImages: selectedFiles }));
        setPreviewGallery(selectedFiles.map((f) => URL.createObjectURL(f)));
      }
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  /* ================= SINGLE GALLERY UPLOAD ================= */
  const uploadSingleGalleryImage = async (file) => {
    if (!file || !isEdit) return;

    const fd = new FormData();
    fd.append("galleryImage", file);

    try {
      setGalleryUploading(true);
      const res = await API.post(`/properties/${id}/gallery-image`, fd);
      setPreviewGallery(res.data.galleryImages);
    } catch (error) {
      console.error("Gallery upload error:", error);
      alert("Failed to upload image");
    } finally {
      setGalleryUploading(false);
    }
  };

  /* ================= FACILITY ================= */
  const handleFacilitiesChange = (updatedFacilities) => {
    setFormData((p) => ({ ...p, facilities: updatedFacilities }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "facilities" || key === "faqs") {
        fd.append(key, JSON.stringify(value));
      } else if (Array.isArray(value)) {
        value.forEach((v) => fd.append(key, v));
      } else if (value !== null && value !== undefined) {
        fd.append(key, value);
      }
    });

    try {
      if (isEdit) {
        await updateProperty(id, fd);
        alert("Property updated successfully");
      } else {
        await createProperty(fd);
        alert("Property created successfully");
      }
      navigate("/properties");
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving property");
    }
  };

  /* ================= REMOVE GALLERY ================= */
  const removeGallery = async (image) => {
    try {
      await API.put(`/properties/${id}/gallery-image`, { image });
      setPreviewGallery((prev) => prev.filter((img) => img !== image));
    } catch (error) {
      console.error("Remove gallery image error:", error);
      alert("Failed to remove image");
    }
  };

  /* ================= FAQ ================= */
  const handleAddFaq = () => {
    setFormData((p) => ({
      ...p,
      faqs: [...p.faqs, { question: "", answer: "" }],
    }));
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...formData.faqs];
    updatedFaqs[index][field] = value;
    setFormData((p) => ({ ...p, faqs: updatedFaqs }));
  };

  const handleRemoveFaq = (index) => {
    const updatedFaqs = [...formData.faqs];
    updatedFaqs.splice(index, 1);
    setFormData((p) => ({ ...p, faqs: updatedFaqs }));
  };

  return (
    // <div className="p-6 max-w-3xl">
    //   <h2 className="text-xl font-semibold mb-4">
    //     {isEdit ? "Edit Properties" : "Add New Properties"}
    //   </h2>

    //   <form onSubmit={handleSubmit} className="space-y-4">
    //     <input name="name" value={formData.name} onChange={handleChange} placeholder="Property Name" className="w-full border p-2 rounded" required />
    //     <input name="shortTitle" value={formData.shortTitle} onChange={handleChange} placeholder="Short Title" className="w-full border p-2 rounded" required />
    //     <input name="propertyType" value={formData.propertyType} onChange={handleChange} placeholder="Property Type" className="w-full border p-2 rounded" required />

    //     <input type="file" name="bannerImage" onChange={handleChange} />
    //     {previewBanner && <img src={previewBanner} className="w-40 h-24 object-cover rounded" />}

    //     <input name="overviewTittle" value={formData.overviewTittle} onChange={handleChange} placeholder="Overview Title" className="w-full border p-2 rounded" />
    //     <textarea name="overview" value={formData.overview} onChange={handleChange} placeholder="Overview" className="w-full border p-2 rounded" />

    //     <input name="subDescription" value={formData.subDescription} onChange={handleChange} placeholder="Sub Description" className="w-full border p-2 rounded" />

    //     <input type="file" name="overviewImage" onChange={handleChange} />
    //     {previewOverview && <img src={previewOverview} className="w-40 h-24 object-cover rounded" />}

    //     <input
    //       type="file"
    //       accept="image/*"
    //       disabled={!isEdit || galleryUploading}
    //       onChange={(e) => e.target.files && uploadSingleGalleryImage(e.target.files[0])}
    //     />

    //     <div className="flex gap-4 flex-wrap">
    //       {previewGallery.map((img, i) => (
    //         <div key={i} className="relative">
    //           <img src={img} className="w-24 h-24 object-cover rounded" />
    //           {isEdit && (
    //             <button
    //               type="button"
    //               onClick={() => removeGallery(img)}
    //               className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
    //             >
    //               ✕
    //             </button>
    //           )}
    //         </div>
    //       ))}
    //     </div>

    //     <FacilityManager
    //       facilities={formData.facilities}
    //       setFacilities={handleFacilitiesChange}
    //     />

    //     {/* FAQ */}
    //     <div className="border p-4 rounded">
    //       <h3 className="font-semibold mb-2">FAQ Section</h3>
    //       {formData.faqs.map((faq, index) => (
    //         <div key={index} className="space-y-2">
    //           <input
    //             value={faq.question}
    //             onChange={(e) => handleFaqChange(index, "question", e.target.value)}
    //             placeholder="Question"
    //             className="w-full border p-2 rounded"
    //           />
    //           <textarea
    //             value={faq.answer}
    //             onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
    //             placeholder="Answer"
    //             className="w-full border p-2 rounded"
    //           />
    //           <button type="button" onClick={() => handleRemoveFaq(index)} className="text-red-600 underline">
    //             Remove FAQ
    //           </button>
    //         </div>
    //       ))}
    //       <button type="button" onClick={handleAddFaq} className="bg-blue-600 text-white px-3 py-1 rounded mt-2">
    //         + Add FAQ
    //       </button>
    //     </div>

    //     <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
    //       {isEdit ? "Update" : "Create"}
    //     </button>
    //   </form>
    // </div>
    <div className="p-6 max-w-3xl ">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit properties" : "Add New properties"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Property Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="shortTitle"
          placeholder="Short Title "
          value={formData.shortTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="propertyType"
          placeholder="Property Type"
          value={formData.propertyType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        {/* ✅ Banner image upload + preview */}
        <div>
          <label className="block font-medium mb-1">Banner Image</label>
          <input type="file" name="bannerImage" onChange={handleChange} />
          {previewBanner && (
            <img
              src={previewBanner}
              alt="Banner Preview"
              className="mt-2 w-40 h-24 object-cover rounded"
            />
          )}
        </div>

        <input
          name="overviewTittle"
          placeholder="Overview Title"
          value={formData.overviewTittle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="overview"
          placeholder="Overview"
          value={formData.overview}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="subDescription"
          placeholder="Sub Description"
          value={formData.subDescription}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="address1"
            placeholder="Address 1"
            value={formData.address1}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="checkIn"
            placeholder="Check In"
            value={formData.checkIn}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="checkOut"
            placeholder="Check Out"
            value={formData.checkOut}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="contactNumber"
            type="number"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="priceperPerson"
            type="number"
            placeholder="Price per Person"
            value={formData.priceperPerson}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div>
          {" "}
          <label className="block font-medium mb-1">
            {" "}
            Google Map Link / Location{" "}
          </label>{" "}
          <input
            type="text"
            name="map"
            placeholder="https://maps.google.com/..."
            value={formData.map}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />{" "}
          <p className="text-xs text-gray-500 mt-1">
            {" "}
            Paste Google Map embed or share link{" "}
          </p>{" "}
        </div>

        <div>
          <label className="block font-medium mb-1">Overview Image</label>
          <input type="file" name="overviewImage" onChange={handleChange} />
          {previewOverview && (
            <img
              src={previewOverview}
              alt="Overview Preview"
              className="mt-2 w-40 h-24 object-cover rounded"
            />
          )}
        </div>

        {/* ✅ Gallery images upload + preview */}
        <div>
          {/* <label className="block font-medium mb-1">Gallery Images</label>
          <input
            type="file"
            name="galleryImages"
            multiple
            onChange={handleChange}
          /> */}
          <div>
            <label className="block font-medium mb-1">Add Gallery Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => uploadSingleGalleryImage(e.target.files[0])}
              disabled={!isEdit || galleryUploading}
            />

            {!isEdit && (
              <p className="text-sm text-gray-500">
                Save property first to add gallery images
              </p>
            )}
          </div>

          {/* <div className="flex gap-2 flex-wrap mt-2">
            {previewGallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i}`}
                className="w-24 h-24 object-cover rounded"
              />
            ))}
          </div> */}
          <div className="flex gap-4 flex-wrap mt-2">
            {previewGallery.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-24 h-24 object-cover rounded"
                />

                {isEdit && (
                  <button
                    type="button"
                    onClick={() => removeGallery(img)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* <FacilityManager
          facilities={formData.facilities}
          setFacilities={handleFacilitiesChange}
        /> */}

        {isEdit && (
          <FacilityManager
            propertyId={id}
            facilities={formData.facilities}
            refreshProperty={refreshProperty}
          />
        )}

        {!isEdit && (
          <p className="text-sm text-gray-500">
            Save the property first to add facilities.
          </p>
        )}

        {/* FAQ SECTION */}
        <div className="space-y-2 border p-4 rounded-md">
          <h3 className="font-semibold text-lg">FAQ Section</h3>

          {formData.faqs.map((faq, index) => (
            <div key={index} className="border p-3 rounded-md space-y-2">
              <input
                type="text"
                placeholder="Question"
                className="w-full border p-2 rounded"
                value={faq.question}
                onChange={(e) =>
                  handleFaqChange(index, "question", e.target.value)
                }
              />
              <textarea
                placeholder="Answer"
                className="w-full border p-2 rounded"
                value={faq.answer}
                onChange={(e) =>
                  handleFaqChange(index, "answer", e.target.value)
                }
              ></textarea>

              <button
                type="button"
                className="text-red-600 underline"
                onClick={() => handleRemoveFaq(index)}
              >
                Remove FAQ
              </button>
            </div>
          ))}

          <button
            type="button"
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={handleAddFaq}
          >
            + Add FAQ
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {isEdit ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
