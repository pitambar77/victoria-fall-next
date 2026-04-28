import React, { useState, useEffect } from "react";
import { roleFields } from "../../data/roleFields";

const Step2BusinessInfo = ({ formData, handleChange }) => {
  const [selectedRole, setSelectedRole] = useState(formData.roleType || "");

  useEffect(() => {
    setSelectedRole(formData.roleType || "");
  }, [formData.roleType]);

  return (
    <div className="space-y-6">
      {/* Role Type Selector */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Role Type
        </label>
        <select
          name="roleType"
          value={selectedRole}
          onChange={(e) => {
            setSelectedRole(e.target.value);
            handleChange(e);
          }}
          className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-[#aca188]"
        >
          <option value="">Select Role</option>
          {Object.keys(roleFields).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Fields */}
      {selectedRole && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roleFields[selectedRole].businessInfo.map((field) => (
            <div key={field.name}>
              {/* Label */}
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              {/* Input Types */}
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-[#aca188]"
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "checkbox" ? (
                // ✅ INLINE CHECKBOX (single per field)
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2 text-gray-700">
                    <input
                      type="checkbox"
                      name={field.name}
                      checked={formData[field.name] || false}
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: field.name,
                            value: e.target.checked,
                            type: "checkbox",
                          },
                        })
                      }
                      className="h-4 w-4 text-[#aca188] border-gray-300 rounded focus:ring-[#aca188]"
                    />
                    <span className="text-sm">{field.label}</span>
                  </label>
                </div>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={
                    field.type === "file"
                      ? undefined
                      : formData[field.name] || ""
                  }
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-1 focus:ring-[#aca188]"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Step2BusinessInfo;

