

import React, { useState } from 'react'; 
import Button from './Button';

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

// --- Main Form Component ---
const ActivityExperienceEnquiryForm = ({activityData}) => {

    // State to hold form data (initialized with all required fields)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        country: "",
        activityDate: "",
        pickLocation: "",
        adult: 1, // Changed default to 1 for required fields
        child: 0,
        infant: 0,
        message: "", 
        activity:activityData|| ""
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
      const response = await fetch("https://victoria-fall-backend-production.up.railway.app/api/actbookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Enquiry submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          country: "",
          activityDate: "",
        pickLocation: "",
        adult: 1, // Changed default to 1 for required fields
        child: 0,
        infant: 0,
        message: "", 
        activity:activityData|| ""
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



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Booking Data Submitted:", formData);
    //     alert("Enquiry submitted! Check console for data.");
    // };
    
    // Short list of countries for the Select field
    const countryOptions = [
        { value: '', label: 'Select Your Country' },
        { value: 'usa', label: 'United States' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'australia', label: 'Australia' },
        { value: 'india', label: 'India' },
        { value: 'germany', label: 'Germany' },
        // Add more countries here
    ];

    // Array for number options (0 to 10) for guest counts
    const numberOptions = Array.from({ length: 11 }, (_, i) => i);


    return (
        <div className="max-w-[1140px] mx-auto ">
            <div className="hd rounded-lg">
                {/* Header */}
                <h2 className="hd text-[20px] font-[500] text-[#2e2c2d] capitalize">
                    Activity & Experience Enquiry
                </h2>
                <p className="text-[#2e2c2d] mb-8 hd">
                    Please provide your details for this booking.
                </p>
        
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* --- Personal Information Section --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <InputField
                            label="Full Name"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
            
                        {/* Email Address */}
                        <InputField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                        />
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Mobile Number */}
                        <InputField
                            label="Contact Number"
                            name="mobile"
                            type="tel"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            required
                        />
                        
                        {/* Country Select */}
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
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
                                    <option key={option.value} value={option.value} disabled={option.value === ''}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
        
                    {/* --- Activity Details Section --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* Activity Date */}
                        <InputField
                            label="Activity Date"
                            name="activityDate"
                            type="date"
                            value={formData.activityDate}
                            onChange={handleChange}
                            required
                        />
            
                        {/* Pick Up Location */}
                        {/* Note: Assuming 'picLocation' should be text, not date type */}
                        <InputField
                            label="Pick Up Location"
                            name="pickLocation"
                            type="text" 
                            value={formData.pickLocation}
                            onChange={handleChange}
                            placeholder="Hotel Name or Address"
                            required
                        />
                    </div>
        
                    {/* --- Guest Counts (Dropdowns) --- */}
                    <div className="grid grid-cols-3 gap-6">
                        {/* Adult Dropdown */}
                        <div>
                            <label htmlFor="adult" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                            <select
                                id="adult"
                                name="adult"
                                value={formData.adult}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                {/* Ensure minimum 1 adult */}
                                {numberOptions.slice(1).map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
        
                        {/* Children Dropdown */}
                        <div>
                            <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                            <select
                                id="child"
                                name="child"
                                value={formData.child}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                {numberOptions.map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Infants Dropdown */}
                        <div>
                            <label htmlFor="infants" className="block text-sm font-medium text-gray-700 mb-1">Infants</label>
                            <select
                                id="infant"
                                name="infant"
                                value={formData.infant}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                {numberOptions.map((num) => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* --- Message Textarea (New Addition) --- */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Special Requests / Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="E.g., dietary restrictions, mobility assistance, specific pick-up time, etc."
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                         <Button type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Send Enquiry"}
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

export default ActivityExperienceEnquiryForm;