"use client";

import React, { useState, useEffect } from "react";
import {
  getActivity,
  updateActivity,
  createActivity,
} from "../../api/activityApi";
import { getDestinations } from "../../api/destinationApi";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

const ActivityForm = () => {
  const [destinations, setDestinations] = useState([]);
  const [categories, setCategories] = useState([]);

  const [previewOverviewImage, setPreviewOverviewImage] = useState(null);
  const [previewBannerImage, setPreviewBannerImage] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);
  const [galleryUploading, setGalleryUploading] = useState(false);

  const [formData, setFormData] = useState({
    destination: "",
    category: "",
    locationName: "",
    activityName: "",
    overview: "",
    subDescription: "",
    pricePerPerson: "",
    minPerson: "",
    duration: "",
    bookNowUrl: "", // ✅ ADD THIS
    content: "",

    overviewImage: null,
    bannerImage: null,
    galleryImages: [],

    banner: [{ title: "", subTitle: "" }],

    overviewInfo: [{ title: "", description: [""] }],

    facilities: [{ icon: "", title: "", description: "" }],
    highlights: [""],
    fullDescription: [""],
    include: [""],
    exclude: [""],
    importantInfo: [{ type: "paragraph", content: "" }],
  });

  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const isEdit = Boolean(id);

  /* ================= DESTINATIONS ================= */
  useEffect(() => {
    getDestinations()
      .then((res) => setDestinations(res.data))
      .catch(console.error);
  }, []);

  /* ================= EDIT MODE ================= */
  useEffect(() => {
    if (!id) return;

    const fetchActivity = async () => {
      try {
        const { data } = await getActivity(id);

        const normalizedBanner = {
          title: data.banner?.find((b) => b.title)?.title || "",
          subTitle: data.banner?.find((b) => b.subTitle)?.subTitle || "",
        };

        setFormData({
          destination: data.destination?._id || "",
          category: data.category?._id || "",
          locationName: data.locationName || "",
          activityName: data.activityName || "",
          overview: data.overview || "",
          subDescription: data.subDescription || "",
          pricePerPerson: data.pricePerPerson || "",
          minPerson: data.minPerson || "",
          duration: data.duration || "",
          bookNowUrl: data.bookNowUrl || "",
          content: data.content || "",

          overviewImage: null,
          bannerImage: null,
          galleryImages: [],
          banner: [normalizedBanner],

          overviewInfo: data.overviewInfo?.length
            ? data.overviewInfo
            : [{ title: "", description: [""] }],

          facilities: data.facilities?.length
            ? data.facilities
            : [{ icon: "", title: "", description: "" }],

          highlights: data.highlights || [""],
          fullDescription: data.fullDescription || [""],
          include: data.include || [""],
          exclude: data.exclude || [""],
          importantInfo: Array.isArray(data.importantInfo)
            ? data.importantInfo
            : [{ type: "paragraph", content: "" }],
        });

        setPreviewOverviewImage(data.overviewImage || null);
        setPreviewBannerImage(data.banner?.[0]?.bannerImage || null);
        setPreviewGallery(data.galleryImages || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchActivity();
  }, [id]);

  /* ================= CATEGORIES ================= */
  useEffect(() => {
    if (!formData.destination) return;

    axios
      .get(
        `http://victoria-fall-backend.manoramaseoservice.com/api/categories/${formData.destination}`,
      )
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, [formData.destination]);

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      if (name === "overviewImage") {
        setFormData((p) => ({ ...p, overviewImage: files[0] }));
        setPreviewOverviewImage(URL.createObjectURL(files[0]));
      }

      if (name === "bannerImage") {
        setFormData((p) => ({ ...p, bannerImage: files[0] }));
        setPreviewBannerImage(URL.createObjectURL(files[0]));
      }

      if (name === "galleryImages") {
        const imgs = Array.from(files);
        setFormData((p) => ({ ...p, galleryImages: imgs }));
        setPreviewGallery(imgs.map((f) => URL.createObjectURL(f)));
      }
      return;
    }

    setFormData((p) => ({ ...p, [name]: value }));
  };

  /* ====== ARRAY HELPERS ====== */
  const handleArrayChange = (i, field, value) => {
    setFormData((p) => {
      const updated = [...p[field]];
      updated[i] = value;
      return { ...p, [field]: updated };
    });
  };

  const addArrayField = (field) =>
    setFormData((p) => ({ ...p, [field]: [...p[field], ""] }));

  const removeArrayField = (field, i) =>
    setFormData((p) => ({
      ...p,
      [field]: p[field].filter((_, idx) => idx !== i),
    }));

  /* ====== FACILITIES ====== */
  const handleFacilityChange = (i, key, value) => {
    setFormData((p) => {
      const f = [...p.facilities];
      f[i][key] = value;
      return { ...p, facilities: f };
    });
  };

  const addFacility = () =>
    setFormData((p) => ({
      ...p,
      facilities: [...p.facilities, { icon: "", title: "", description: "" }],
    }));

  const removeFacility = (i) =>
    setFormData((p) => ({
      ...p,
      facilities: p.facilities.filter((_, idx) => idx !== i),
    }));

  /* ====== OVERVIEW INFO (MULTI) ====== */
  const handleOverviewTitleChange = (i, value) => {
    setFormData((p) => {
      const o = [...p.overviewInfo];
      o[i].title = value;
      return { ...p, overviewInfo: o };
    });
  };

  const handleOverviewDescChange = (i, d, value) => {
    setFormData((p) => {
      const o = [...p.overviewInfo];
      o[i].description[d] = value;
      return { ...p, overviewInfo: o };
    });
  };

  const addOverviewDesc = (i) => {
    setFormData((p) => {
      const o = [...p.overviewInfo];
      o[i].description.push("");
      return { ...p, overviewInfo: o };
    });
  };

  const removeOverviewDesc = (i, d) => {
    setFormData((p) => {
      const o = [...p.overviewInfo];
      o[i].description = o[i].description.filter((_, idx) => idx !== d);
      return { ...p, overviewInfo: o };
    });
  };

  const addOverviewSection = () =>
    setFormData((p) => ({
      ...p,
      overviewInfo: [...p.overviewInfo, { title: "", description: [""] }],
    }));

  const removeOverviewSection = (i) =>
    setFormData((p) => ({
      ...p,
      overviewInfo: p.overviewInfo.filter((_, idx) => idx !== i),
    }));

  const uploadSingleGalleryImage = async (file) => {
    if (!file || !id) return;

    const data = new FormData();
    data.append("galleryImage", file);

    try {
      setGalleryUploading(true);

      const res = await axios.post(
        `http://victoria-fall-backend.manoramaseoservice.com/api/activities/${id}/gallery-image`,
        data,
      );

      // update gallery preview
      setPreviewGallery(res.data.galleryImages);
    } catch (err) {
      console.error("Gallery upload error:", err);
      alert("Failed to upload image");
    } finally {
      setGalleryUploading(false);
    }
  };

  const removeGalleryImage = async (image) => {
    try {
      await axios.put(
        `http://victoria-fall-backend.manoramaseoservice.com/api/activities/${id}/gallery-image`,
        { image },
      );

      setPreviewGallery((prev) => prev.filter((img) => img !== image));
    } catch (err) {
      console.error("Remove gallery error:", err);
      alert("Failed to remove image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.destination || !formData.category || !formData.activityName) {
      alert("Destination, Category & Activity Name are required");
      return;
    }

    try {
      if (isEdit) {
        await updateActivity(id, formData); // ✅ plain object
        alert("Activity updated successfully!");
      } else {
        await createActivity(formData); // ✅ plain object
        alert("Activity created successfully!");
      }

      router.push("/activities");
    } catch (err) {
      console.error("Save failed:", err.response?.data || err);
      alert(err.response?.data?.message || "Save failed");
    }
  };

  /* ================= UI ================= */
  return (
    <form onSubmit={handleSubmit} className="p-6 shadow-sm max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Create Activity</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Destination */}
        <div>
          <label className="block text-sm font-medium">Destination</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 outline-none"
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d._id} value={d._id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 outline-none"
            required
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Location Name</label>
          <input
            type="text"
            name="locationName"
            value={formData.locationName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 outline-none"
          />
        </div>
      </div>

      {/* OVERVIEW IMAGE */}
      <div className=" space-y-2 mt-4">
        <label className="font-medium mt-2">Overview Image</label>
        <input
          type="file"
          name="overviewImage"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
        {previewOverviewImage && (
          <img src={previewOverviewImage} className="w-40 mt-2 rounded" />
        )}
      </div>

      <div className=" mt-4">
        {/* BANNER */}
        <label className="font-medium mt-4">Banner Image</label>
        <input
          type="file"
          name="bannerImage"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
        {previewBannerImage && (
          <img
            src={previewBannerImage}
            className="w-full h-32 object-cover mt-2 rounded"
          />
        )}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Banner Title</label>
        <input
          type="text"
          value={formData.banner[0]?.title || ""}
          onChange={(e) =>
            setFormData((p) => {
              const banner = [...p.banner];
              banner[0].title = e.target.value;
              return { ...p, banner };
            })
          }
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Banner Subtitle</label>
        <input
          type="text"
          value={formData.banner[0]?.subTitle || ""}
          onChange={(e) =>
            setFormData((p) => {
              const banner = [...p.banner];
              banner[0].subTitle = e.target.value;
              return { ...p, banner };
            })
          }
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
      </div>

      {/* OVERVIEW INFO */}
      <div>
        <h3 className="mt-6 font-semibold">Overview Sections</h3>
        {formData.overviewInfo.map((sec, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-md p-3 outline-none p-3 mt-2 rounded"
          >
            <input
              value={sec.title}
              onChange={(e) => handleOverviewTitleChange(i, e.target.value)}
              placeholder="Title"
              className="w-full border border-gray-300 rounded-md p-3 outline-none p-2 mb-2"
            />

            {sec.description.map((d, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  value={d}
                  onChange={(e) =>
                    handleOverviewDescChange(i, idx, e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md p-3 outline-none p-2"
                />
                <button
                  type="button"
                  onClick={() => removeOverviewDesc(i, idx)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}

            <button type="button" onClick={() => addOverviewDesc(i)}>
              + Add Description
            </button>
            <button type="button" onClick={() => removeOverviewSection(i)}>
              Remove Section
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={addOverviewSection} className="mt-2">
        + Add Overview Section
      </button>

      {/* Activity Name */}
      <div className=" mt-4">
        <label className="block text-sm font-medium">Activity Name</label>
        <input
          type="text"
          name="activityName"
          value={formData.activityName}
          onChange={handleChange}
          placeholder="Enter activity name"
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
          required
        />
      </div>

      {/* Price Per Person */}
      <div className=" mt-4">
        <label className="block text-sm font-medium">Price Per Person</label>
        <input
          type="number"
          name="pricePerPerson"
          value={formData.pricePerPerson}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
      </div>

      <div className=" mt-4">
        <label className="block text-sm font-medium">Duration</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
      </div>

      {/* Minimum Person */}
      <div className=" mt-4">
        <label className="block text-sm font-medium">Minimum Person</label>
        <input
          type="number"
          name="minPerson"
          value={formData.minPerson}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Content</label>
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Book Now URL</label>
        <input
          type="url"
          name="bookNowUrl"
          value={formData.bookNowUrl}
          onChange={handleChange}
          placeholder="https://booking-link.com"
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
      </div>

      {/* ✅ Gallery Images */}
      <div className=" mt-4">
        {/* ================= GALLERY ================= */}
        <div className="mt-6">
          <label className="block text-sm font-medium">Gallery Images</label>

          {/* Single Upload */}
          <input
            type="file"
            accept="image/*"
            disabled={!isEdit || galleryUploading}
            onChange={(e) => uploadSingleGalleryImage(e.target.files[0])}
            className="border border-gray-300 rounded-md p-3 outline-none"
          />

          {!isEdit && (
            <p className="text-sm text-gray-500 mt-1">
              Save activity first to add gallery images
            </p>
          )}

          {/* Preview + Delete */}
          <div className="flex flex-wrap gap-3 mt-4">
            {previewGallery.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={img}
                  className="w-24 h-24 object-cover rounded"
                  alt="gallery"
                />

                {isEdit && (
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(img)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Overview</label>
        <textarea
          name="overview"
          value={formData.overview}
          onChange={handleChange}
          placeholder="Write short overview..."
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
          rows="3"
        />
      </div>

      {/* Sub Description */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Sub Description</label>
        <textarea
          name="subDescription"
          value={formData.subDescription}
          onChange={handleChange}
          placeholder="Enter short sub description..."
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
          rows="3"
        />
      </div>

      {/* Facilities */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Facilities</h3>
        {formData.facilities.map((facility, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 mb-2">
            <input
              type="text"
              placeholder="Icon URL"
              value={facility.icon}
              onChange={(e) => handleFacilityChange(i, "icon", e.target.value)}
              className="border border-gray-300 rounded-md p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Title"
              value={facility.title}
              onChange={(e) => handleFacilityChange(i, "title", e.target.value)}
              className="border border-gray-300 rounded-md p-3 outline-none"
            />
            <input
              type="text"
              placeholder="Description"
              value={facility.description}
              onChange={(e) =>
                handleFacilityChange(i, "description", e.target.value)
              }
              className="border border-gray-300 rounded-md p-3 outline-none"
            />
            <button
              type="button"
              onClick={() => removeFacility(i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addFacility}
          className="text-blue-600 text-sm mt-1"
        >
          + Add Facility
        </button>
      </div>

      {/* Highlights / Include / Exclude / Full Description */}
      {["highlights", "fullDescription", "include", "exclude"].map((field) => (
        <div key={field} className="mt-6">
          <h3 className="font-semibold capitalize mb-2">{field}</h3>
          {formData[field].map((val, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                type="text"
                value={val}
                onChange={(e) => handleArrayChange(i, field, e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 outline-none"
              />
              <button
                type="button"
                onClick={() => removeArrayField(field, i)}
                className="text-red-500"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField(field)}
            className="text-blue-600 text-sm"
          >
            + Add {field}
          </button>
        </div>
      ))}

      {/* Important Info */}
      {/* <div className="mt-6">
        <label className="block text-sm font-medium">Important Info</label>
        <textarea
          name="importantInfo"
          value={formData.importantInfo}
          onChange={handleChange}
          rows="3"
          className="w-full border p-2 rounded"
        />
      </div> */}

      {/* IMPORTANT INFO (CONTENT BLOCKS) */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Important Info</h3>

        {formData.importantInfo.map((block, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-md p-3 outline-none p-3 mb-3 rounded"
          >
            {/* TYPE SELECT */}
            <select
              value={block.type}
              onChange={(e) => {
                const updated = [...formData.importantInfo];
                updated[i].type = e.target.value;
                updated[i].content = e.target.value === "list" ? [""] : "";
                setFormData({ ...formData, importantInfo: updated });
              }}
              className="border border-gray-300 rounded-md p-3 outline-none p-2 mb-2 w-full"
            >
              <option value="header">Header</option>
              <option value="paragraph">Paragraph</option>
              <option value="list">List</option>
            </select>

            {/* CONTENT */}
            {block.type === "list" ? (
              block.content.map((item, idx) => (
                <div key={idx} className="flex gap-2 mb-1">
                  <input
                    value={item}
                    onChange={(e) => {
                      const updated = [...formData.importantInfo];
                      updated[i].content[idx] = e.target.value;
                      setFormData({ ...formData, importantInfo: updated });
                    }}
                    className="border border-gray-300 rounded-md p-3 outline-none p-2 w-full"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...formData.importantInfo];
                      updated[i].content.splice(idx, 1);
                      setFormData({ ...formData, importantInfo: updated });
                    }}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <textarea
                value={block.content}
                onChange={(e) => {
                  const updated = [...formData.importantInfo];
                  updated[i].content = e.target.value;
                  setFormData({ ...formData, importantInfo: updated });
                }}
                className="border border-gray-300 rounded-md p-3 outline-none p-2 w-full"
              />
            )}

            <button
              type="button"
              onClick={() => {
                const updated = formData.importantInfo.filter(
                  (_, idx) => idx !== i,
                );
                setFormData({ ...formData, importantInfo: updated });
              }}
              className="text-red-600 text-sm mt-2"
            >
              Remove Block
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              importantInfo: [
                ...formData.importantInfo,
                { type: "paragraph", content: "" },
              ],
            })
          }
          className="text-blue-600 text-sm"
        >
          + Add Block
        </button>
      </div>

      {/* <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Activity
      </button> */}
      {/* <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isEdit ? "Update Activity" : "Save Activity"}
      </button> */}
      <button
        type="submit"
        disabled={galleryUploading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isEdit ? "Update Activity" : "Save Activity"}
      </button>
    </form>
  );
};

export default ActivityForm;
