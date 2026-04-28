
import { useState } from "react";

import {
  addGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} from "../../api/propertiesApi";

export default function GallerySection({ property, setProperty }) {
  const [imageName, setImageName] = useState("");
  const [imageCategory, setImageCategory] = useState("");
  const [file, setFile] = useState(null);

  /* ======================
     ADD IMAGE
  ====================== */

  const uploadImage = async () => {
    const formData = new FormData();

    formData.append("image", file);
    formData.append("imageName", imageName);
    formData.append("imageCategory", imageCategory);

    const res = await addGalleryImage(property._id, formData);

    setProperty(res.data);

    setImageName("");
    setImageCategory("");
    setFile(null);
  };

  /* ======================
     UPDATE IMAGE
  ====================== */

  const updateImage = async (image) => {
    const res = await updateGalleryImage(property._id, image._id, {
      imageName: image.imageName,
      imageCategory: image.imageCategory,
    });

    setProperty(res.data);
  };

  /* ======================
     DELETE IMAGE
  ====================== */

  const removeImage = async (imageId) => {
    const res = await deleteGalleryImage(property._id, imageId);

    setProperty(res.data);
  };

  /* ======================
     CHANGE FIELD
  ====================== */

  const changeImage = (index, field, value) => {
    const updated = [...property.gallery];

    updated[index][field] = value;

    setProperty({
      ...property,
      gallery: updated,
    });
  };

  return (
    <div className="space-y-10">
      {/* EXISTING IMAGES */}

      <div className="bg-white p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Gallery Images</h2>

        {property.gallery?.map((img, i) => (
          <div
            key={img._id}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            {/* IMAGE PREVIEW */}

            {img.image && (
              <img
                src={img.image}
                className="w-full max-w-[250px] h-[150px] object-cover rounded"
              />
            )}

            {/* IMAGE NAME */}

            <input
              className="w-full border border-gray-300 rounded-md p-3"
              value={img.imageName}
              onChange={(e) => changeImage(i, "imageName", e.target.value)}
              placeholder="Image Name"
            />

            {/* CATEGORY */}

            <select
              className="w-full border border-gray-300 rounded-md p-3"
              value={img.imageCategory}
              onChange={(e) => changeImage(i, "imageCategory", e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Pool">Pool</option>
              <option value="Exterior">Exterior</option>
              <option value="Living">Living Area</option>
            </select>

            {/* ACTION */}

            <div className="flex gap-3">
              <button
                onClick={() => updateImage(img)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeImage(img._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD IMAGE */}

      <div className="bg-white p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Upload New Image</h2>

        {/* IMAGE NAME */}

        <input
          className="w-full border border-gray-300 rounded-md p-3"
          placeholder="Image Name"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
        />

        {/* CATEGORY */}

        <select
          className="w-full border border-gray-300 rounded-md p-3"
          value={imageCategory}
          onChange={(e) => setImageCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Pool">Pool</option>
          <option value="Exterior">Exterior</option>
          <option value="Living">Living Area</option>
        </select>

        {/* IMAGE UPLOAD */}

        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              className="w-40 h-24 object-cover rounded"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mb-2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
                />
              </svg>

              <span className="text-sm">Click to Upload Image</span>
            </div>
          )}

          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {/* BUTTON */}

        <button
          onClick={uploadImage}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
}
