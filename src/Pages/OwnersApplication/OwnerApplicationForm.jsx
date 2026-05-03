// // this is new form accodeing to owner application
// "use client"
// import React, { useState } from "react";
// import axios from "axios";
// import Step1BasicInfo from "./Step1BasicInfo";
// import Step2BusinessInfo from "./Step2BusinessInfo";
// import Step3LegalVerification from "./Step3LegalVerification";
// import Step4ProfileMedia from "./Step4ProfileMedia";
// import ProgressBar from "./ProgressBar";

// const OwnerApplicationForm = () => {
//   const [step, setStep] = useState(1);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     bussinessName: "",
//     email: "",
//     phone: "",
//     wpnumber: "",
//     roleType: "",
//     propertyName: "",
//     address: "",
//     mapLink: "",
//     propertyType: "",
//     rooms: "",
//     bathrooms: "",
//     loungs: "",
//     kitchen: "",
//     dining: "",
//     outdoor: "",
//     capacity: "",
//     wifi: "",
//     tv: "",
//     security: "",
//     laundry: "",
//     parking: "",
//     pool: "",
//     staff: "",
//     ac: "",
//     kitchenFacilities: "",
//     selfCatering: "",
//     cleaningDetails: "",
//     description: "",
//     zimraBP: "",
//     ztaMembership: "",
//     tradingLicense: "",
//     insuranceDetails: "",
//     bankName: "",
//     branchName: "",
//     branchAddress: "",
//     accountName: "",
//     accountNumber: "",
//     swiftCode: "",
//     seasonalRates: "",
//     rateType: "",
//     rateBasis: "",
//     rateInclusions: "",

//     // Property images
//     heroImage: null,
//     bedroomImages: [],
//     bathroomImages: [],
//     kitchenImages: [],
//     outdoorImages: [],

//     // Restaurant
//     restaurantName: "",
//     category: "",
//     seatingCapacity: "",
//     mealavailable: "",
//     licenseNo: "",
//     exteriorImages: [],
//     interiorImages: [],
//     diningImages: [],

//     // Activity
//     activityName: "",
//     activityType: "",
//     duration: "",
//     pricePerPerson: "",
//     tourism: [],
//     activityImages: [],
//     activityscImages: [],
//   });

//   // Handle text and file changes
//   // const handleChange = (e) => {
//   //   const { name, type, files, value } = e.target;

//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     [name]:
//   //       type === "file"
//   //         ? e.target.multiple
//   //           ? Array.from(files)
//   //           : files[0]
//   //         : value,
//   //   }));
//   // };

//   const handleChange = (e) => {
//     const { name, type, files, value, multiple } = e.target;

//     if (type === "file") {
//       if (multiple) {
//         setFormData((prev) => ({
//           ...prev,
//           [name]: [...(prev[name] || []), ...Array.from(files)],
//         }));
//       } else {
//         setFormData((prev) => ({
//           ...prev,
//           [name]: files[0],
//         }));
//       }
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const form = new FormData();

//       // Append text fields
//       // Object.entries(formData).forEach(([key, value]) => {
//       //   if (Array.isArray(value)) {
//       //     value.forEach((file) => form.append(key, file)); // multiple images
//       //   } else if (value) {
//       //     form.append(key, value ?? "");
//       //   }
//       // });

//       Object.entries(formData).forEach(([key, value]) => {
//   if (Array.isArray(value)) {
//     value.forEach((file) => form.append(key, file));
//   } else {
//     form.append(key, value ?? ""); // ✅ ALWAYS append
//   }
// });

//       const res = await axios.post(
//         "http://victoria-fall-backend.manoramaseoservice.com/api/owner-applications",
//         form,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         },
//       );

//       alert(res.data.message || "Application submitted successfully!");
//       setStep(1);
//       setFormData((prev) => ({
//         ...prev,
//         fullName: "",
//         email: "",
//         phone: "",
//         roleType: "",
//       }));
//     } catch (err) {
//       console.error("❌ Form submission failed:", err);
//       alert(err.response?.data?.message || "Submission failed!");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-[1140px] mx-auto bg-white py-10 px-4">
//       <h1 className="text-3xl font-semibold text-center mb-8">
//         Owner Application Form
//       </h1>

//       <ProgressBar step={step} />

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {step === 1 && (
//           <Step1BasicInfo formData={formData} handleChange={handleChange} />
//         )}
//         {step === 2 && (
//           <Step2BusinessInfo formData={formData} handleChange={handleChange} />
//         )}
//         {step === 3 && (
//           <Step3LegalVerification
//             formData={formData}
//             handleChange={handleChange}
//           />
//         )}
//         {step === 4 && (
//           <Step4ProfileMedia formData={formData} handleChange={handleChange} />
//         )}

//         <div className="flex justify-between mt-4">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={prevStep}
//               className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//             >
//               Back
//             </button>
//           )}

//           {step < 4 ? (
//             <button
//               type="button"
//               onClick={nextStep}
//               className="px-4 py-2 bg-[#aca188] text-white rounded hover:bg-[#c40]"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`px-4 py-2 rounded text-white ${
//                 isSubmitting ? "bg-gray-400" : "bg-[#aca188] hover:bg-[#c40]"
//               }`}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default OwnerApplicationForm;


import React from 'react'

const OwnerApplicationForm = () => {
  return (
    <div>OwnerApplicationForm</div>
  )
}

export default OwnerApplicationForm