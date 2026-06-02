import { useState, useEffect } from "react";
import { updateOverviewMeta, updateOverview } from "../../api/propertiesApi";
import CustomTextEditor from "../CustomTextEditor";

export default function OverviewSection({ property, setProperty }) {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    landingsubcontent: "",
    shortdescription: "",
  });

  /* =========================
     PREFILL FORM WHEN PROPERTY LOADS
  ========================= */

  useEffect(() => {
    if (!property) return;

    setForm({
      title: property.overview?.title ?? "",
      subTitle: property.overview?.subTitle ?? "",
      landingsubcontent: property.overview?.landingsubcontent ?? "",
      shortdescription: property.overview?.shortdescription ?? "",
    });
  }, [property]);

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================
     SAVE OVERVIEW
  ========================= */

  const saveOverview = async () => {
    try {
      await updateOverviewMeta(property._id, {
        title: form.title,
        subTitle: form.subTitle,
        landingsubcontent: form.landingsubcontent,
      });

      await updateOverview(property._id, {
        overview: {
          ...property.overview,
          shortdescription: form.shortdescription,
        },
      });

      setProperty((prev) => ({
        ...prev,
        overview: form,
      }));

      alert("Overview updated ✅");
    } catch (err) {
      console.error(err);
    }
  };

  if (!property) return null;

  return (
    <div className="p-6   bg-white rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Overview</h2>

      {/* TITLE */}

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />

      {/* SUBTITLE */}

      <input
        name="subTitle"
        value={form.subTitle}
        onChange={handleChange}
        placeholder="Subtitle"
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />

      {/* LANDING CONTENT */}

      <textarea
        name="landingsubcontent"
        value={form.landingsubcontent}
        onChange={handleChange}
        placeholder="Landing Content"
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />

      <div className="space-y-2">
        <h3 className="font-semibold">Description</h3>

        <CustomTextEditor
          value={form.shortdescription || ""}
          onChange={(value) =>
            setForm((prev) => ({
              ...prev,
              shortdescription: value,
            }))
          }
        />
      </div>
      {/* SAVE BUTTON */}

      <button
        onClick={saveOverview}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
      >
        Save Overview
      </button>
    </div>
  );
}
