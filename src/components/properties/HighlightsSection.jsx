

import { useState, useEffect } from "react";
import IconPicker from "../../components/IconPicker";
import {
  addHighlight,
  updateHighlight,
  deleteHighlight,
} from "../../api/propertiesApi";

export default function HighlightsSection({ property, setProperty }) {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    if (!property) return;

    const list =
      property.highlights?.length > 0
        ? property.highlights
        : [{ title: "", description: "", icon: "" }];

    setHighlights(list);
  }, [property]);

  /* =========================
     CHANGE FIELD
  ========================= */

  // const changeHighlight = (index, field, value) => {
  //   const updated = [...highlights];
  //   updated[index][field] = value;
  //   setHighlights(updated);
  // };

  const changeHighlight = (index, field, value) => {
    const updated = [...highlights];
    updated[index][field] = value;

    setHighlights(updated);

    setProperty({
      ...property,
      highlights: updated,
    });
  };

  /* =========================
     ADD HIGHLIGHT
  ========================= */

  const addHighlightRow = () => {
    const last = highlights[highlights.length - 1];

    if (!last.title.trim() || !last.description.trim() || !last.icon) {
      alert("Please complete current highlight first");
      return;
    }

    setHighlights([...highlights, { title: "", description: "", icon: "" }]);
  };

  /* =========================
     SAVE SINGLE HIGHLIGHT
  ========================= */

  // const saveHighlight = async (highlight, index) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("title", highlight.title);
  //     formData.append("description", highlight.description);
  //     formData.append("icon", highlight.icon);

  //     let res;

  //     if (highlight._id) {
  //       res = await updateHighlight(property._id, highlight._id, formData);
  //     } else {
  //       res = await addHighlight(property._id, formData);
  //     }

  //     setProperty(res.data);
  //     alert("Highlight saved ✅");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const saveHighlight = async (highlight) => {
    try {
      const payload = {
        title: highlight.title,
        description: highlight.description,
        icon: highlight.icon,
      };

      let res;

      if (highlight._id) {
        res = await updateHighlight(property._id, highlight._id, payload);
      } else {
        res = await addHighlight(property._id, payload);
      }

      setProperty(res.data);

      // ⭐ IMPORTANT
      setHighlights(res.data.highlights);

      alert("Highlight saved ✅");
    } catch (err) {
      console.error(err);
    }
  };

  /* =========================
     REMOVE HIGHLIGHT
  ========================= */

  const removeHighlight = async (index) => {
    const highlight = highlights[index];

    try {
      if (highlight._id) {
        await deleteHighlight(property._id, highlight._id);
      }

      const updated = highlights.filter((_, i) => i !== index);

      setHighlights(updated);

      setProperty({
        ...property,
        highlights: updated,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Property Highlights</h2>

      {highlights.map((highlight, i) => (
        <div
          key={highlight._id || i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* TITLE */}

          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            placeholder="Highlight Title"
            value={highlight.title}
            onChange={(e) => changeHighlight(i, "title", e.target.value)}
          />

          {/* DESCRIPTION */}

          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            placeholder="Highlight Description"
            value={highlight.description}
            onChange={(e) => changeHighlight(i, "description", e.target.value)}
          />

          {/* ICON PICKER */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Highlight Icon
            </label>

            <IconPicker
              value={highlight.icon}
              onSelect={(iconName) => changeHighlight(i, "icon", iconName)}
            />
          </div>

          {/* ACTION BUTTONS */}

          <div className="flex justify-between pt-2">
            {highlights.length > 1 && (
              <button
                onClick={() => removeHighlight(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove
              </button>
            )}

            <button
              onClick={() => saveHighlight(highlight, i)}
              className="bg-[#aca288] hover:bg-[#9a9077] text-white px-4 py-1 rounded"
            >
              Save
            </button>
          </div>
        </div>
      ))}

      {/* ADD BUTTON */}

      <button
        onClick={addHighlightRow}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        + Add More Highlights
      </button>
    </div>
  );
}
