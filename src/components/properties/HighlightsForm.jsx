import IconPicker from "../../components/IconPicker";

export default function HighlightsForm({
  property,
  setProperty,
  errors,
  clearError,
}) {
  const highlights =
    property.highlights?.length > 0
      ? property.highlights
      : [{ title: "", description: "", icon: "" }];

  const addHighlight = () => {
    const lastHighlight = highlights[highlights.length - 1];

    if (
      !lastHighlight.title.trim() ||
      !lastHighlight.description.trim() ||
      !lastHighlight.icon
    ) {
      alert("Please fill the current highlight before adding another.");
      return;
    }

    setProperty({
      ...property,
      highlights: [...highlights, { title: "", description: "", icon: "" }],
    });
  };

  const changeHighlight = (index, field, value) => {
    const updated = [...highlights];
    updated[index][field] = value;

    setProperty({
      ...property,
      highlights: updated,
    });

    clearError(`highlightTitle_${index}`);
    clearError(`highlightDesc_${index}`);
    clearError(`highlightIcon_${index}`);
  };
  const removeHighlight = (index) => {
    const updated = highlights.filter((_, i) => i !== index);

    setProperty({
      ...property,
      highlights: updated,
    });
  };

  const lastHighlight = highlights[highlights.length - 1];

  const canAddHighlight =
    lastHighlight.title.trim() &&
    lastHighlight.description.trim() &&
    lastHighlight.icon;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-lg font-semibold">Property Highlights</h2>

      {highlights.map((highlight, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* TITLE */}

          <input
            // className="w-full border border-gray-300 rounded-md p-3 outline-none
            // focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.[`highlightTitle_${i}`]
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296]"
  }`}
            placeholder="Highlight Title"
            value={highlight.title}
            onChange={(e) => changeHighlight(i, "title", e.target.value)}
          />

          {errors?.[`highlightTitle_${i}`] && (
            <p className="text-red-500 text-sm">
              {errors[`highlightTitle_${i}`]}
            </p>
          )}

          {/* DESCRIPTION */}

          <input
            className={`w-full border rounded-md p-3 outline-none
  ${
    errors?.[`highlightDesc_${i}`]
      ? "border-red-500"
      : "border-gray-300 focus:border-[#c1b296]"
  }`}
            placeholder="Highlight Description"
            value={highlight.description}
            onChange={(e) => changeHighlight(i, "description", e.target.value)}
          />

          {errors?.[`highlightDesc_${i}`] && (
            <p className="text-red-500 text-sm">
              {errors[`highlightDesc_${i}`]}
            </p>
          )}

          {/* ICON SELECT */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Highlight Icon
            </label>

            <IconPicker
              value={highlight.icon}
              onSelect={(iconName) => changeHighlight(i, "icon", iconName)}
            />
            {errors?.[`highlightIcon_${i}`] && (
              <p className="text-red-500 text-sm">
                {errors[`highlightIcon_${i}`]}
              </p>
            )}
          </div>

          {/* REMOVE BUTTON */}

          {highlights.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeHighlight(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Highlight
              </button>
            </div>
          )}
        </div>
      ))}

      {/* ADD BUTTON */}

      <button
        onClick={addHighlight}
        disabled={!canAddHighlight}
        className={`px-4 py-2 rounded ${
          canAddHighlight
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        + Add More Highlights
      </button>
    </div>
  );
}
