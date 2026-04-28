

import { useState } from "react";
import axios from "axios";

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    name: "",
    subDescription: "",
    overviewContent: "",
    description: "",
    propertyType: "",
    checkIn: "",
    checkOut: "",
    address1: "",
    address2: "",
    services: [],
  });

  const [bannerImage, setBannerImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [serviceInput, setServiceInput] = useState("");

  // handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // add a service to the list
  const addService = () => {
    if (serviceInput.trim() !== "") {
      setFormData({
        ...formData,
        services: [...formData.services, serviceInput.trim()],
      });
      setServiceInput("");
    }
  };

  // remove a service
  const removeService = (index) => {
    const newServices = [...formData.services];
    newServices.splice(index, 1);
    setFormData({ ...formData, services: newServices });
  };

  // remove banner
  const removeBanner = () => {
    setBannerImage(null);
  };

  // remove gallery image
  const removeGalleryImage = (index) => {
    const newGallery = [...gallery];
    newGallery.splice(index, 1);
    setGallery(newGallery);
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("subDescription", formData.subDescription);
    data.append("overviewContent", formData.overviewContent);
    data.append("description", formData.description);
    data.append("propertyType", formData.propertyType);
    data.append("checkIn", formData.checkIn);
    data.append("checkOut", formData.checkOut);
    data.append("address1", formData.address1);
    data.append("address2", formData.address2);
    data.append("services", JSON.stringify(formData.services));

    if (bannerImage) {
      data.append("bannerImage", bannerImage);
    }

    gallery.forEach((file) => {
      data.append("gallery", file);
    });

    try {
      await axios.post("https://victoria-fall-backend-production.up.railway.app/api/properties", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Property created successfully!");
    } catch (err) {
      console.error(err);
      alert("Error creating property");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-40">
      <h2 className="text-2xl font-bold mb-4">Add Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Property Name */}
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Sub Description */}
        <input
          type="text"
          name="subDescription"
          placeholder="Sub Description"
          value={formData.subDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Overview */}
        <textarea
          name="overviewContent"
          placeholder="Overview Content"
          value={formData.overviewContent}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Property Type */}
        <input
          type="text"
          name="propertyType"
          placeholder="Property Type (e.g., Villa, Apartment)"
          value={formData.propertyType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Check In & Check Out */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="time"
            name="checkIn"
            placeholder="Check In"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="time"
            name="checkOut"
            placeholder="Check Out"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Address */}
        <input
          type="text"
          name="address1"
          placeholder="Address Line 1"
          value={formData.address1}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address2"
          placeholder="Address Line 2"
          value={formData.address2}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Banner Image */}
        <div>
          <label className="block font-semibold">Banner Image:</label>
          <input
            type="file"
            onChange={(e) => setBannerImage(e.target.files[0])}
            className="w-full p-2 border rounded"
          />
          {bannerImage && (
            <div className="relative mt-2 w-full h-40">
              <img
                src={URL.createObjectURL(bannerImage)}
                alt="Banner Preview"
                className="w-full h-40 object-cover rounded"
              />
              <button
                type="button"
                onClick={removeBanner}
                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Gallery */}
        <div>
          <label className="block font-semibold">Gallery Images:</label>
          <input
            type="file"
            multiple
            onChange={(e) => setGallery([...e.target.files])}
            className="w-full p-2 border rounded"
          />
          {gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-2">
              {gallery.map((file, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="w-full h-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

       



        {/* Services */}
        <div>
          <label className="block font-semibold">Services & Facilities:</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add service (e.g., TV, Wifi)"
              value={serviceInput}
              onChange={(e) => setServiceInput(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <button
              type="button"
              onClick={addService}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>
          <ul className="flex flex-wrap gap-2">
            {formData.services.map((service, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-gray-200 rounded flex items-center gap-2"
              >
                {service}
                <button
                  type="button"
                  onClick={() => removeService(index)}
                  className="text-red-200"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
        >
          Save Property
        </button>
      </form>
    </div>
  );
}


