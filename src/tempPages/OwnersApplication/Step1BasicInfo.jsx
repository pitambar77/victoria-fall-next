
import React from "react";

const Step1BasicInfo = ({ formData, handleChange }) => (
  <div className=" hd grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label className="block font-medium">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        
        className="w-full border border-gray-300 rounded-md p-2 mt-1"
      />
    </div>
     <div>
      <label className="block font-medium">Company/Business Name</label>
      <input
        type="text"
        name="bussinessName"
        value={formData.bussinessName}
        onChange={handleChange}
        
        className="w-full border border-gray-300 rounded-md p-2 mt-1"
      />
    </div>
    <div>
      <label className="block font-medium">Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 mt-1"
      />
    </div>
    <div>
      <label className="block font-medium">Phone Number</label>
      <input
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 mt-1"
      />
    </div>
    <div>
      <label className="block font-medium">Whatsapp Number</label>
      <input
        type="number"
        name="wpnumber"
        value={formData.wpnumber}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 mt-1"
      />
    </div>
  </div>
);

export default Step1BasicInfo;

