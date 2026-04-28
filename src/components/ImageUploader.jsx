import React from "react";

const ImageUploader = ({ label, name, onChange, previewUrl }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">{label}</label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
      />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover mt-2 rounded-md" />
      )}
    </div>
  );
};

export default ImageUploader;
