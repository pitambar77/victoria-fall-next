import React, { useState } from "react";
import Button from "../../../components/Button";

const BookingSection = ({ restaurantData }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    time: "",
    bookingDate: "",
    guest: "",
    message: "",
    restaurant: restaurantData || "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://victoria-fall-backend.manoramaseoservice.com/api/restaubookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Enquiry submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          time: "",
          bookingDate: "",
          guest: "",
          message: "",
          restaurant: restaurantData || "",
        });
      } else {
        const error = await res.json();
        setMessage(`❌ ${error.message || "Failed to submit booking"}`);
      }
    } catch (err) {
      console.error("Booking error:", err);
      setMessage("❌ Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="booking-form" className="max-w-[1140px] mx-auto mt-8 md:pt-20 px-4">
        <p className="text-sm text-center tracking-widest uppercase mb-4 text-[#5c5e62]">
          your special moment
        </p>
        <h2 className="text-[20px] md:text-[30px] text-center font-semibold text-[#2e2c2d] tracking-[3px] uppercase mb-6">
          book a table
        </h2>
        <p className="max-w-2xl mx-auto text-justify md:text-center text-[#5c5e62] tracking-[1px] italic mb-10">
          Book a table online and dine at basilico restaurant to enjoy the
          special flavors, cozy space with your family and loved ones!
        </p>
      </div>

      <div
        className="relative md:py-[80px] py-[20px] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://iol-prod.appspot.com/image/f26461d40465033da0466e224e74577fb4a628ef/5000')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-2/3 md:w-2/3 lg:w-1/2 p-4 relative z-30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-white">
            <input
              type="text"
              name="fullName"
              placeholder="Name*"
              value={formData.fullName}
              onChange={handleChange}
              className="p-3 outline-0 border border-white/80 focus:border-white rounded-md placeholder-white/80 text-sm bg-transparent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="p-3 outline-0 border border-white/80 focus:border-white rounded-md placeholder-white/80 text-sm bg-transparent"
              required
            />
            <input
              type="number"
              name="guest"
              placeholder="Number of Guest"
              value={formData.guest}
              onChange={handleChange}
              className="p-3 outline-0 border border-white/80 focus:border-white rounded-md placeholder-white/80 text-sm bg-transparent"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 outline-0 border border-white/80 focus:border-white rounded-md text-white/80 text-sm bg-transparent"
            />
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="p-3 outline-0 border border-white/80 focus:border-white rounded-md text-white/80 text-sm bg-transparent"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Phone number"
              value={formData.mobile}
              onChange={handleChange}
              className="p-3 outline-0 border border-white/80 focus:border-white rounded-md placeholder-white/80 text-sm bg-transparent"
            />
          </div>
          <textarea
            name="message"
            placeholder="Special Requests (Optional)"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 outline-0 border border-white/80 focus:border-white rounded-md placeholder-white/80 text-sm text-white/80 bg-transparent"
          ></textarea>

          <div className="text-center mt-10">
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "BOOK YOUR TABLE"}
            </Button>

            {message && (
              <p
                className={`text-sm mt-3 ${
                  message.startsWith("✅") ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingSection;
