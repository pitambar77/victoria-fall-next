export default function GalleryForm({
  property,
  setProperty,
  errors,
  clearError,
}) {
  /* Ensure one image exists */
  const images =
    property.gallery?.length > 0
      ? property.gallery
      : [
          {
            image: "",
            imageName: "",
            imageCategory: "",
          },
        ];

  /* =====================
     ADD IMAGE
  ===================== */

  // const addImage = () => {
  //   setProperty({
  //     ...property,
  //     gallery: [
  //       ...images,
  //       {
  //         image: "",
  //         imageName: "",
  //         imageCategory: "",
  //       },
  //     ],
  //   });
  // };

  const addImage = () => {
    const lastImage = images[images.length - 1];

    if (
      !lastImage.imageName.trim() ||
      !lastImage.imageCategory ||
      !lastImage.image
    ) {
      alert(
        "Please fill image name, select category, and upload an image before adding another.",
      );
      return;
    }

    setProperty({
      ...property,
      gallery: [
        ...images,
        {
          image: "",
          imageName: "",
          imageCategory: "",
        },
      ],
    });
  };

  /* =====================
     HANDLE CHANGE
  ===================== */

  // const handleChange = (index, field, value) => {
  //   const updated = [...images];
  //   updated[index][field] = value;

  //   setProperty({
  //     ...property,
  //     gallery: updated,
  //   });
  // };

  const handleChange = (index, field, value) => {
    const updated = [...images];
    updated[index][field] = value;

    setProperty({
      ...property,
      gallery: updated,
    });

     if (field === "imageName") clearError(`imageName_${index}`);
  if (field === "imageCategory") clearError(`imageCategory_${index}`);
  if (field === "image") clearError(`image_${index}`);
  };

  /* =====================
     REMOVE IMAGE
  ===================== */

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);

    setProperty({
      ...property,
      gallery: updated,
    });
  };

  const lastImage = images[images.length - 1];

  const canAddImage =
    lastImage?.imageName?.trim() &&
    lastImage?.imageCategory &&
    lastImage?.image;

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">Gallery</h2>
      <p className=" text-gray-700"> (**Minimum six images required)</p>

      {images.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* Image Name */}
          <input
            className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.[`imageName_${i}`]
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
            placeholder="Image Title"
            value={item.imageName}
            onChange={(e) => handleChange(i, "imageName", e.target.value)}
          />
          {errors?.[`imageName_${i}`] && (
            <p className="text-red-500 text-sm">{errors[`imageName_${i}`]}</p>
          )}
          {/* Image Category */}

          <select
            className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.[`imageCategory_${i}`]
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
            value={item.imageCategory}
            onChange={(e) => handleChange(i, "imageCategory", e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Living Area">Living Area</option>
            <option value="Dining Area">Dining Area</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Pool">Pool</option>
            <option value="Garden">Garden</option>
            <option value="Balcony">Balcony</option>
            <option value="Terrace">Terrace</option>
            <option value="Patio">Patio</option>
            <option value="Exterior">Exterior</option>
            <option value="Entrance">Entrance</option>
            <option value="Parking">Parking</option>
            <option value="View">View</option>
            <option value="Amenities">Amenities</option>
            <option value="Common Area">Common Area</option>
            <option value="Surroundings">Surroundings</option>
            <option value="Other">Other</option>
          </select>
          {errors?.[`imageCategory_${i}`] && (
            <p className="text-red-500 text-sm">
              {errors[`imageCategory_${i}`]}
            </p>
          )}
          {/* IMAGE UPLOAD */}

          <div className="w-[220px]">
            <label className="text-gray-700 mb-2 block">Upload Image</label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
              {item.image ? (
                <img
                  src={URL.createObjectURL(item.image)}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded"
                />
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
                    />
                  </svg>

                  <span className="text-sm text-gray-500">Click to upload</span>
                </>
              )}

              <input
                type="file"
                hidden
                onChange={(e) => handleChange(i, "image", e.target.files[0])}
              />
            </label>
            {errors?.[`image_${i}`] && (
              <p className="text-red-500 text-sm">{errors[`image_${i}`]}</p>
            )}
          </div>
          
         
          {/* Remove Image */}

          {images.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeImage(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
      ))}

      {/* ADD IMAGE BUTTON */}

      {/* <button
        onClick={addImage}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        + Add Image
      </button> */}
      <button
        onClick={addImage}
        disabled={!canAddImage}
        className={`px-4 py-2 rounded ${
          canAddImage
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        + Add Image
      </button>
    </div>
  );
}
