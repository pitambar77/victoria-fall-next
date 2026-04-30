"use client"

import React, { useState } from 'react';
import Button from '../../components/Button';

const ContactForm = () => {
  // State to manage form data (optional, but good practice)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (placeholder)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://victoria-fall-backend.manoramaseoservice.com/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Booking submitted successfully!");
        setFormData({
           firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
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


  // Define the common input styles
  const inputStyle = "hd w-full border-b border-gray-400 focus:outline-none focus:border-gray-300 focus:rounded-sm px-2 focus:border-1 placeholder-transparent bg-transparent py-2 text-gray-800";
  // Define the common label/placeholder styles (The "placeholder-transparent" moves the label above the input)
  const labelStyle = "hd absolute left-0 -top-5 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#aca188] ";
  
  // Custom text color based on the image (a soft brown/gold)
  const textColor = "text-[#8B5F37]"; // Using a specific hex for the gold/brown color

  return (
    <div className="flex justify-center min-h-screen bg-white py-10 md:py-20 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl">
        {/* Title */}
        <h1 className='hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] text-center tracking-[3px] uppercase mb-10'>
          How can we help you ?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* First Name */}
          <div className="relative pt-6">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name" // Required for the peer selector
              className={`peer ${inputStyle}`}
              required
            />
            <label htmlFor="firstName" className={`${labelStyle}`}>
              First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative pt-6">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`peer ${inputStyle}`}
              required
            />
            <label htmlFor="lastName" className={`${labelStyle}`}>
              Last Name
            </label>
          </div>

          {/* E-mail */}
          <div className="relative pt-6">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className={`peer ${inputStyle}`}
              required
            />
            <label htmlFor="email" className={`${labelStyle}`}>
              E-mail
            </label>
          </div>

          {/* Phone number */}
          <div className="relative pt-6">
            <input
              type="tel"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Phone number"
              className={`peer ${inputStyle}`}
            />
            <label htmlFor="phone" className={`${labelStyle}`}>
              Phone number
            </label>
          </div>

          {/* Subject (Full Width) */}
          <div className="relative pt-6 md:col-span-2">
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={`peer ${inputStyle}`}
            />
            <label htmlFor="subject" className={`${labelStyle}`}>
              Subject
            </label>
          </div>

          {/* Message (Full Width Textarea) */}
          <div className="relative pt-6 md:col-span-2">
            {/* The textarea border style is different (full box, not just bottom line) */}
            <textarea
              name="message"
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
             placeholder='Message'
              className={`peer ${inputStyle}`}
              required
            ></textarea>
            {/* The Message label appears as a static placeholder based on your image */}
            <label htmlFor="message" className={`${labelStyle}`}>
              Message
            </label>
          </div>

        </div>

        {/* Send Button */}
        <div className="text-center mt-12">
          {/* <button
            type="submit"
            className={`text-xl ${textColor} font-serif italic tracking-wider hover:underline`}
          >
            Send
          </button> */}
          {/* <Button>
            Send Enquiry
          </Button> */}
            {/* Submit Button */}
                    <Button type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Send Enquiry"}
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
        </div>
      </form>
    </div>
  );
};

export default ContactForm;