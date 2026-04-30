import React from "react";
import { roleFields } from "../../data/roleFields";

const Step3LegalVerification = ({ formData, handleChange }) => {
  const selectedRole = formData.roleType;

  if (!selectedRole) {
    return (
      <p className="text-gray-500 italic">
        Please select a role type in Step 2 to fill legal verification details.
      </p>
    );
  }

  const legalFields = roleFields[selectedRole]?.legalInfo;

  if (!legalFields || legalFields.length === 0) {
    return (
      <p className="text-gray-500 italic">
        No legal verification fields defined for this role.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {legalFields.map((field) => (
        <div key={field.name}>
          <label className="block font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder || ""}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#aca188] min-h-[100px]"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={field.type === "file" ? undefined : formData[field.name] || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#aca188]"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Step3LegalVerification;

