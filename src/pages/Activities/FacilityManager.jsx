import React, { useState } from "react";

const FacilityManager = ({ facilities, setFacilities }) => {
  // Add a new facility object
  const addFacility = () => {
    setFacilities([
      ...facilities,
      {
        icon: "",
        name: "",
        description: "",
        highlights: [],
        fullDescription: [],
        include: [],
        exclude: [],
        importantInfo: "",
      },
    ]);
  };

  const removeFacility = (index) => {
    const updated = [...facilities];
    updated.splice(index, 1);
    setFacilities(updated);
  };

  const updateFacility = (index, key, value) => {
    const updated = [...facilities];
    updated[index][key] = value;
    setFacilities(updated);
  };

  const addListItem = (index, key) => {
    const updated = [...facilities];
    updated[index][key].push("");
    setFacilities(updated);
  };

  const updateListItem = (index, key, itemIndex, value) => {
    const updated = [...facilities];
    updated[index][key][itemIndex] = value;
    setFacilities(updated);
  };

  const removeListItem = (index, key, itemIndex) => {
    const updated = [...facilities];
    updated[index][key].splice(itemIndex, 1);
    setFacilities(updated);
  };

  const addParagraph = (index) => addListItem(index, "fullDescription");

  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-lg">Facilities & Services</h3>
      {facilities.map((facility, idx) => (
        <div
          key={idx}
          className="border p-4 rounded space-y-3 bg-gray-50 relative"
        >
          <button
            type="button"
            onClick={() => removeFacility(idx)}
            className="absolute top-2 right-2 text-red-600 font-bold"
          >
            X
          </button>

          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Icon URL / Name"
              value={facility.icon}
              onChange={(e) => updateFacility(idx, "icon", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Facility Name"
              value={facility.name}
              onChange={(e) => updateFacility(idx, "name", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={facility.description}
              onChange={(e) =>
                updateFacility(idx, "description", e.target.value)
              }
              className="border p-2 rounded"
            />
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-medium">Highlights</h4>
            {facility.highlights.map((item, i) => (
              <div key={i} className="flex gap-2 mt-1">
                <input
                  type="text"
                  placeholder="Highlight"
                  value={item}
                  onChange={(e) =>
                    updateListItem(idx, "highlights", i, e.target.value)
                  }
                  className="border p-2 rounded flex-1"
                />
                <button
                  type="button"
                  onClick={() => removeListItem(idx, "highlights", i)}
                  className="text-red-600 font-bold"
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addListItem(idx, "highlights")}
              className="text-blue-600 mt-2"
            >
              + Add Highlight
            </button>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="font-medium">Full Description</h4>
            {facility.fullDescription.map((para, i) => (
              <textarea
                key={i}
                value={para}
                onChange={(e) =>
                  updateListItem(idx, "fullDescription", i, e.target.value)
                }
                className="border p-2 rounded w-full mt-1"
                rows={3}
                placeholder="Paragraph"
              />
            ))}
            <button
              type="button"
              onClick={() => addParagraph(idx)}
              className="text-blue-600 mt-2"
            >
              + Add Paragraph
            </button>
          </div>

          {/* Include / Exclude */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Include</h4>
              {facility.include.map((item, i) => (
                <div key={i} className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      updateListItem(idx, "include", i, e.target.value)
                    }
                    className="border p-2 rounded flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem(idx, "include", i)}
                    className="text-red-600 font-bold"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem(idx, "include")}
                className="text-blue-600 mt-2"
              >
                + Add Include
              </button>
            </div>

            <div>
              <h4 className="font-medium">Exclude</h4>
              {facility.exclude.map((item, i) => (
                <div key={i} className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) =>
                      updateListItem(idx, "exclude", i, e.target.value)
                    }
                    className="border p-2 rounded flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeListItem(idx, "exclude", i)}
                    className="text-red-600 font-bold"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addListItem(idx, "exclude")}
                className="text-blue-600 mt-2"
              >
                + Add Exclude
              </button>
            </div>
          </div>

          {/* Important Info */}
          <div>
            <h4 className="font-medium">Important Information</h4>
            <textarea
              value={facility.importantInfo}
              onChange={(e) =>
                updateFacility(idx, "importantInfo", e.target.value)
              }
              className="border p-2 rounded w-full mt-1"
              rows={3}
              placeholder="Important information"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addFacility}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        + Add Facility / Service
      </button>
    </div>
  );
};

export default FacilityManager;
