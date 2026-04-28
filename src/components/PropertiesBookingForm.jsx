// import React, { useState } from "react";
// import Button from "./Button";

// const PropertiesBookingForm = () => {
//   // State to hold form data (optional, but good practice for React forms)
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     country: "",
//     checkIn: "",
//     checkOut: "",
//     guests: 1,
//     rooms: 1,
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking Data Submitted:", formData);
//     // Add your actual booking logic here (e.g., API call)
//     alert("Booking submitted! Check console for data.");
//   };

//   // Short list of countries for the Select field
//   const countryOptions = [
//     { value: '', label: 'Select Your Country' },
//     { value: 'usa', label: 'United States' },
//     { value: 'canada', label: 'Canada' },
//     { value: 'uk', label: 'United Kingdom' },
//     { value: 'australia', label: 'Australia' },
//     { value: 'india', label: 'India' },
//     { value: 'germany', label: 'Germany' },
//     // Add more countries here
//   ];


//   return (
//     <div className=" max-w-[1140px] mx-auto ">
//       <div className=" hd rounded-lg">
//         {/* Header */}
//         <h2 className="hd text-[20px] font-[500] text-[#2e2c2d] capitalize">
//          CONFIRM BOOKING
//         </h2>
//         <p className="text-[#2e2c2d] mb-8 hd">
//           Please fill in your details and reservation preferences.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6 ">
//           {/* --- Personal Information Section --- */}

//           {/* Full Name */}
//           <InputField
//             label="Full Name"
//             name="fullName"
//             type="text"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="John Doe"
//             required
//           />

//           {/* Email Address */}
//           <InputField
//             label="Email Address"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//             required
//           />

//           <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
//             {/* Mobile Number */}
//             <InputField
//               label="Mobile Number"
//               name="mobile"
//               type="tel"
//               value={formData.mobile}
//               onChange={handleChange}
//               placeholder="+1 (555) 000-0000"
//               required
//             />
            

//             <div>
//               <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
//                 Country
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               >
//                 {countryOptions.map((option) => (
//                   <option key={option.value} value={option.value} disabled={option.value === ''}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* --- Reservation Details Section --- */}
//           <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 ">
//             {/* Check-in Date */}
//             <InputField
//               label="Check-in Date"
//               name="checkIn"
//               type="date"
//               value={formData.checkIn}
//               onChange={handleChange}
//               required
//             />

//             {/* Check-out Date */}
//             <InputField
//               label="Check-out Date"
//               name="checkOut"
//               type="date"
//               value={formData.checkOut}
//               onChange={handleChange}
//               required
//             />

//             {/* Number of Guests */}
//             <InputField
//               label="Number of Guests"
//               name="guests"
//               type="number"
//               min="1"
//               value={formData.guests}
//               onChange={handleChange}
//               required
//             />

//             {/* Number of Rooms */}
//             <InputField
//               label="Number of Rooms"
//               name="rooms"
//               type="number"
//               min="1"
//               value={formData.rooms}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Submit Button */}
        
//   <Button type="submit">Confirm Booking</Button>
 
        
//         </form>
//       </div>
//     </div>
//   );
// };

// // --- Reusable Input Field Component ---
// const InputField = ({
//   label,
//   name,
//   type,
//   value,
//   onChange,
//   placeholder,
//   required,
//   min,
// }) => (
//   <div>
//     <label
//       htmlFor={name}
//       className="hd block text-sm font-[500] text-[#2e2c2d] mb-1"
//     >
//       {label}
//     </label>
//     <input
//       id={name}
//       name={name}
//       type={type}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       required={required}
//       min={min}
//       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//     />
//   </div>
// );

// export default PropertiesBookingForm;



import React, { useState } from "react";
import Button from "./Button";

const PropertiesBookingForm = ({ propertyName }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    country: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
    property:propertyName || " ",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://victoria-fall-backend-production.up.railway.app//bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Booking submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          country: "",
          checkIn: "",
          checkOut: "",
          guests: 1,
          rooms: 1,
          property:propertyName || " ",
        });
      } else {
        const error = await response.json();
        setMessage(`❌ ${error.message || "Failed to submit booking"}`);
      }
    } catch (error) {
      console.error("Booking error:", error);
      setMessage("❌ Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  // Country dropdown options
  const countryOptions = [
    { value: "", label: "Select Your Country" },
    { value: "zimbabwe", label: "Zimbabwe" },
    { value: "south-africa", label: "South Africa" },
    { value: "zambia", label: "Zambia" },
    { value: "botswana", label: "Botswana" },
    { value: "namibia", label: "Namibia" },
    { value: "kenya", label: "Kenya" },
    { value: "tanzania", label: "Tanzania" },
  ];

  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="hd rounded-lg">
        {/* Header */}
        <h2 className="hd text-[20px] font-[500] text-[#2e2c2d] capitalize">
          Confirm Booking
        </h2>
        <p className="text-[#2e2c2d] mb-8 hd">
          Please fill in your details and reservation preferences.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* --- Personal Information --- */}
          <InputField
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <InputField
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+263 71 000 0000"
              required
            />

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                {countryOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* --- Reservation Details --- */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            <InputField
              label="Check-in Date"
              name="checkIn"
              type="date"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />

            <InputField
              label="Check-out Date"
              name="checkOut"
              type="date"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />

            <InputField
              label="Number of Guests"
              name="guests"
              type="number"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />

            <InputField
              label="Number of Rooms"
              name="rooms"
              type="number"
              min="1"
              value={formData.rooms}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Confirm Booking"}
          </Button>

          {/* Success / Error Message */}
          {message && (
            <p
              className={`text-sm mt-3 ${
                message.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

// --- Reusable Input Field Component ---
const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  min,
}) => (
  <div>
    <label
      htmlFor={name}
      className="hd block text-sm font-[500] text-[#2e2c2d] mb-1"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
);

export default PropertiesBookingForm;

