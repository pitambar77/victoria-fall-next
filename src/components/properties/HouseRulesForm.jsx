import React from "react";
import IconPicker from "../../components/IconPicker";

const HouseRulesForm = ({ property, setProperty, errors, clearError }) => {
  /* Ensure one rule exists */
  const rules =
    property.houserule.rule?.length > 0
      ? property.houserule.rule
      : [{ title: "", description: "", icon: "" }];

  /* ======================
     META CHANGE
  ====================== */

  // const handleMetaChange = (e) => {
  //   setProperty({
  //     ...property,
  //     houserule: {
  //       ...property.houserule,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  const handleMetaChange = (e) => {
    const { name, value } = e.target;

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        [name]: value,
      },
    });

    clearError(name);
  };

  /* ======================
     ADD RULE
  ====================== */

  // const addRule = () => {
  //   setProperty({
  //     ...property,
  //     houserule: {
  //       ...property.houserule,
  //       rule: [...rules, { title: "", description: "", icon: "" }],
  //     },
  //   });
  // };

  const addRule = () => {
    const lastRule = rules[rules.length - 1];

    if (
      !lastRule.title.trim() ||
      !lastRule.description.trim() ||
      !lastRule.icon
    ) {
      alert(
        "Please fill rule title, description, and select an icon before adding another rule.",
      );
      return;
    }

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: [...rules, { title: "", description: "", icon: "" }],
      },
    });
  };

  /* ======================
     CHANGE RULE
  ====================== */

  // const changeRule = (index, field, value) => {
  //   const updated = [...rules];
  //   updated[index][field] = value;

  //   setProperty({
  //     ...property,
  //     houserule: {
  //       ...property.houserule,
  //       rule: updated,
  //     },
  //   });
  // };

  const changeRule = (index, field, value) => {
    const updated = [...rules];
    updated[index][field] = value;

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: updated,
      },
    });

    // clear validation
    if (field === "title") clearError(`ruleTitle_${index}`);
    if (field === "description") clearError(`ruleDesc_${index}`);
    if (field === "icon") clearError(`ruleIcon_${index}`);
  };

  /* ======================
     REMOVE RULE
  ====================== */

  const removeRule = (index) => {
    const updated = rules.filter((_, i) => i !== index);

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: updated,
      },
    });
  };

  const lastRule = rules[rules.length - 1];

  const canAddRule =
    lastRule?.title?.trim() && lastRule?.description?.trim() && lastRule?.icon;

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">House Rules</h2>

      {/* ================= META ================= */}

      <div className="space-y-4">
        {/* <input
          className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.checkIn
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
          name="checkIn"
          placeholder="Check In Time *"
          value={property.houserule.checkIn}
          onChange={handleMetaChange}
        /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 w-full">
            <label className="text-sm sm:text-base font-medium text-gray-700">
              Check-in Time *
            </label>

            <div className="relative">
              <input
                type="time"
                className={`w-full border rounded-md p-3 pl-10 sm:pl-11 text-sm sm:text-base outline-none transition
      ${
        errors?.checkIn
          ? "border-red-500 focus:ring-red-200"
          : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
      }`}
                name="checkIn"
                value={property.houserule.checkIn || ""}
                onChange={handleMetaChange}
              />

              {/* Clock Icon */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                🕒
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500">
              Select the check-in time for guests.
            </p>

            {errors?.checkIn && (
              <p className="text-red-500 text-xs sm:text-sm">
                {errors.checkIn}
              </p>
            )}
          </div>

          {/* <input
          className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.checkOut
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
          name="checkOut"
          placeholder="Check Out Time *"
          value={property.houserule.checkOut}
          onChange={handleMetaChange}
        /> */}

          <div className="space-y-2 w-full">
            <label className="text-sm sm:text-base font-medium text-gray-700">
              Check-out Time *
            </label>

            <div className="relative">
              <input
                type="time"
                className={`w-full border rounded-md p-3 pl-10 sm:pl-11 text-sm sm:text-base outline-none transition
      ${
        errors?.checkOut
          ? "border-red-500 focus:ring-red-200"
          : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
      }`}
                name="checkOut"
                value={property.houserule.checkOut || ""}
                onChange={handleMetaChange}
              />

              {/* Clock Icon */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base">
                🕒
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500">
              Select the check-out time for guests.
            </p>
          </div>

          {errors?.checkOut && (
            <p className="text-red-500 text-sm">{errors.checkOut}</p>
          )}
        </div>
        {/* <textarea
          className="w-full border border-gray-300 rounded-md p-3 outline-none
          focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
          name="content"
          placeholder="House Rules Description"
          value={property.houserule.content}
          onChange={handleMetaChange}
        /> */}
      </div>

      {/* ================= RULE LIST ================= */}

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Property Policies</h3>
       

        {rules.map((rule, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              // className="w-full border border-gray-300 rounded-md p-3 outline-none
              // focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              className={`w-full border rounded-md p-3 outline-none transition
${
  errors?.[`ruleTitle_${i}`]
    ? "border-red-500"
    : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
}`}
              placeholder="Policy Title (Children / Pets / Events / Smoking)"
              value={rule.title}
              onChange={(e) => changeRule(i, "title", e.target.value)}
            />

            {errors?.[`ruleTitle_${i}`] && (
              <p className="text-red-500 text-sm">{errors[`ruleTitle_${i}`]}</p>
            )}

            <input
              className={`w-full border rounded-md p-3 outline-none transition
${
  errors?.[`ruleDesc_${i}`]
    ? "border-red-500"
    : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
}`}
              placeholder="Policy Description (e.g, pet not allow)"
              value={rule.description}
              onChange={(e) => changeRule(i, "description", e.target.value)}
            />

            {errors?.[`ruleDesc_${i}`] && (
              <p className="text-red-500 text-sm">{errors[`ruleDesc_${i}`]}</p>
            )}

            {/* ICON UPLOAD */}

            {/* <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Rule Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {rule.icon ? (
                  <img
                    src={URL.createObjectURL(rule.icon)}
                    alt="preview"
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-sm text-gray-500">Click to upload</span>
                )}

                <input
                  type="file"
                  hidden
                  onChange={(e) => changeRule(i, "icon", e.target.files[0])}
                />
              </label>
            </div> */}

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Rule Icon
              </label>

              <IconPicker
                value={rule.icon}
                onSelect={(iconName) => changeRule(i, "icon", iconName)}
              />
              {errors?.[`ruleIcon_${i}`] && (
                <p className="text-red-500 text-sm">
                  {errors[`ruleIcon_${i}`]}
                </p>
              )}
            </div>

            {/* REMOVE RULE */}

            {rules.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeRule(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Rule
                </button>
              </div>
            )}
          </div>
        ))}

         {errors?.rule_0 && (
          <p className="text-red-500 text-sm">{errors.rule_0}</p>
        )}

        {/* ADD RULE BUTTON */}

        {/* <button
          onClick={addRule}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add Rule
        </button> */}
        <button
          onClick={addRule}
          disabled={!canAddRule}
          className={`px-4 py-2 rounded ${
            canAddRule
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          + Add Rule
        </button>
      </div>
    </div>
  );
};

export default HouseRulesForm;
