import React from "react";
import { roleFields } from "../../data/roleFields";

const Step4ProfileMedia = ({ formData, handleChange }) => {
  const selectedRole = formData.roleType;

  if (!selectedRole) {
    return (
      <p className="text-gray-500 italic">
        Please select a role type in Step 2 to upload profile media.
      </p>
    );
  }

  const mediaFields = roleFields[selectedRole]?.profileMedia;

  if (!mediaFields || mediaFields.length === 0) {
    return (
      <p className="text-gray-500 italic">
        No profile media fields defined for this role.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {mediaFields.map((field) => (
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
                className="w-full border border-gray-300 rounded-md p-2 min-h-[100px] focus:outline-none focus:ring-1 focus:ring-[#aca188]"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                multiple={field.multiple || false}
                value={field.type === "file" ? undefined : formData[field.name] || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#aca188]"
              />
            )}
          </div>
        ))}
      </div>

      {/* Terms & Conditions */}
      <div className="mt-4">
        <p className="font-medium mb-2">Terms & Conditions</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {[
            "Business Legitimacy",
            "Content Responsibility",
            "Commission Agreement",
            "Booking & Cancellation",
            "Payment Terms",
            "Data Usage Consent",
            "Dispute Resolution",
            "Acceptance",
            "I agree to the Terms & Conditions",
          ].map((term) => (
            <label key={term} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-amber-600" />
              <span>{term}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step4ProfileMedia;
