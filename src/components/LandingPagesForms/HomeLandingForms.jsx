"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CustomTextEditor from "../CustomTextEditor";

const HomeLandingForms = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // ================= Dynamic Sections ==================
  const [overviewinfo, setOverviewinfo] = useState({
    title: "",
    description: "",
  });

  const [servicesoverview, setServicesoverview] = useState({
    title: "",
    description: "",
  });

  const [propertyoverview, setPropertyoverview] = useState({
    title: "",
    description: "",
  });

  const [reviews, setReviews] = useState([
    {
      name: "",
      review: "",
    },
  ]);

  const [faq, setFaq] = useState([
    {
      title: "",
      subtitle: "",
      faqs: [{ question: "", answer: "" }],
    },
  ]);

  const router = useRouter();

  // ======================================================
  // Prefill on Edit
  // ======================================================
  useEffect(() => {
    if (editData) {
      setFormData(editData);

      if (editData?.image) {
        setMainImagePreview(editData.image);
      }

      setOverviewinfo(
        editData.overviewinfo || {
          title: "",
          description: "",
        },
      );

      setServicesoverview(
        editData.servicesoverview || {
          title: "",
          description: "",
        },
      );

      setPropertyoverview(
        editData.propertyoverview || {
          title: "",
          description: "",
        },
      );

      setReviews(
        editData.reviews?.length
          ? editData.reviews
          : [
              {
                name: "",
                review: "",
              },
            ],
      );

      setFaq(
        editData.faq?.length
          ? editData.faq
          : [
              {
                title: "",
                subtitle: "",
                faqs: [{ question: "", answer: "" }],
              },
            ],
      );
    }
  }, [editData]);

  // Basic handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImage = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  const handleOverviewBase = (e) => {
    setOverviewinfo({
      ...overviewinfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleServicesOverview = (e) => {
    setServicesoverview({
      ...servicesoverview,
      [e.target.name]: e.target.value,
    });
  };

  const handlePropertyOverview = (e) => {
    setPropertyoverview({
      ...propertyoverview,
      [e.target.name]: e.target.value,
    });
  };

  const addReview = () => {
    setReviews([
      ...reviews,
      {
        name: "",
        review: "",
      },
    ]);
  };

  const removeReview = (index) => {
    const updated = [...reviews];
    updated.splice(index, 1);
    setReviews(updated);
  };

  const handleReviewChange = (index, field, value) => {
    const updated = [...reviews];
    updated[index][field] = value;
    setReviews(updated);
  };

  /* ================= FAQ SECTION ================= */

  const addFaqSection = () => {
    setFaq([
      ...faq,
      {
        title: "",
        subtitle: "",
        faqs: [{ question: "", answer: "" }],
      },
    ]);
  };

  const removeFaqSection = (i) => {
    const updated = [...faq];
    updated.splice(i, 1);
    setFaq(updated);
  };

  const handleFaqSection = (i, e) => {
    const updated = [...faq];
    updated[i][e.target.name] = e.target.value;
    setFaq(updated);
  };

  const addFaqQuestion = (i) => {
    const updated = [...faq];

    updated[i].faqs.push({
      question: "",
      answer: "",
    });

    setFaq(updated);
  };

  const removeFaqQuestion = (i, j) => {
    const updated = [...faq];

    updated[i].faqs.splice(j, 1);

    setFaq(updated);
  };

  const handleFaqQuestion = (i, j, e) => {
    const updated = [...faq];

    updated[i].faqs[j].question = e.target.value;

    setFaq(updated);
  };
  // -------------------------------------------------------
  // SUBMIT
  // -------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formData", JSON.stringify(formData));

    if (mainImage) data.append("mainImage", mainImage);

    data.append("overviewinfo", JSON.stringify(overviewinfo));
    data.append("servicesoverview", JSON.stringify(servicesoverview));

    data.append("propertyoverview", JSON.stringify(propertyoverview));

    data.append("reviews", JSON.stringify(reviews));

    data.append("faq", JSON.stringify(faq));

    try {
      let res;
      if (editData) {
        res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/home/${editData._id}`,
          data,
        );
      } else {
        res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/home`,
          data,
        );
      }

      alert("Saved Successfully!");
      router.push("/dashboard/home");
      onSuccess && onSuccess(res.data);
    } catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  };

  return (
    <form className="grid grid-cols-2 gap-4 pb-20" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold text-[#444] col-span-2">
        {editData ? "Edit " : "Create "}
      </h2>

      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        name="subtitle"
        placeholder="Subtitle"
        value={formData.subtitle}
        onChange={handleChange}
      />

      <div className="col-span-2">
        <label>Main Image</label>
        <input
          type="file"
          className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
          onChange={handleMainImage}
        />
        {mainImagePreview && (
          <img src={mainImagePreview} className="w-48 rounded mt-2" />
        )}
      </div>

      {/* =============== Overview Info Section =============== */}
      <section className="col-span-2 mt-5">
        <h3 className="text-xl font-semibold text-[#444] mb-3">Overview Info</h3>

        <div
          className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        >
          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition mb-3"
            name="title"
            placeholder="Title"
            value={overviewinfo.title}
            onChange={handleOverviewBase}
          />

          <CustomTextEditor
            value={overviewinfo.description || ""}
            onChange={(html) =>
              setOverviewinfo({
                ...overviewinfo,
                description: html,
              })
            }
          />
        </div>
      </section>

      <section className="col-span-2 mt-6">
        <h3 className="text-xl font-semibold text-[#444]  mb-3">
          Services Overview
        </h3>

        <div className="border border-gray-300 bg-gray-50 p-4 rounded">
          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition mb-3"
            name="title"
            placeholder="Services Title"
            value={servicesoverview.title}
            onChange={handleServicesOverview}
          />

          <CustomTextEditor
            value={servicesoverview.description || ""}
            onChange={(html) =>
              setServicesoverview({
                ...servicesoverview,
                description: html,
              })
            }
          />
        </div>
      </section>

      <section className="col-span-2 mt-6">
        <h3 className="text-xl font-semibold text-[#444] mb-3">
          Property Overview
        </h3>

        <div className="border border-gray-300 bg-gray-50 p-4 rounded">
          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition mb-3"
            name="title"
            placeholder="Property Title"
            value={propertyoverview.title}
            onChange={handlePropertyOverview}
          />

          <CustomTextEditor
            value={propertyoverview.description || ""}
            onChange={(html) =>
              setPropertyoverview({
                ...propertyoverview,
                description: html,
              })
            }
          />
        </div>
      </section>

      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-[#444]">Reviews</h3>

          <button
            type="button"
            onClick={addReview}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Review
          </button>
        </div>

        {reviews.map((review, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded bg-gray-50 mb-4">
            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition mb-3"
              placeholder="Reviewer Name"
              value={review.name}
              onChange={(e) =>
                handleReviewChange(index, "name", e.target.value)
              }
            />

            <CustomTextEditor
              value={review.review || ""}
              onChange={(html) => handleReviewChange(index, "review", html)}
            />

            <button
              type="button"
              onClick={() => removeReview(index)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove Review
            </button>
          </div>
        ))}
      </section>

      {/* =============== FAQ Section =============== */}

      {/* <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQ Section</h3>

          <button
            type="button"
            onClick={addFaqSection}
            className="bg-green-600 px-3 py-1 rounded text-white"
          >
            + Add FAQ Section
          </button>
        </div>

        {faq.map((section, i) => (
          <div key={i} className="border p-4 rounded bg-gray-100 mt-4">
          
            <input
              className="border p-2 w-full mb-2"
              placeholder="FAQ Title"
              name="title"
              value={section.title}
              onChange={(e) => handleFaqSection(i, e)}
            />

        
            <input
              className="border p-2 w-full mb-4"
              placeholder="FAQ Subtitle"
              name="subtitle"
              value={section.subtitle}
              onChange={(e) => handleFaqSection(i, e)}
            />

         
            <button
              type="button"
              onClick={() => addFaqQuestion(i)}
              className="bg-blue-600 px-3 py-1 rounded text-white mb-4"
            >
              + Add Question
            </button>

            {section.faqs.map((item, j) => (
              <div key={j} className="border p-4 rounded bg-white mt-3">
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="Question"
                  value={item.question}
                  onChange={(e) => handleFaqQuestion(i, j, e)}
                />

                <CustomTextEditor
                  value={item.answer || ""}
                  onChange={(html) => {
                    const updated = [...faq];

                    updated[i].faqs[j].answer = html;

                    setFaq(updated);
                  }}
                />

                <button
                  type="button"
                  className="bg-red-600 text-white px-3 py-1 rounded mt-4"
                  onClick={() => removeFaqQuestion(i, j)}
                >
                  Remove Question
                </button>
              </div>
            ))}

            <button
              type="button"
              className="bg-red-700 text-white px-3 py-1 rounded mt-4"
              onClick={() => removeFaqSection(i)}
            >
              Remove FAQ Section
            </button>
          </div>
        ))}
      </section> */}

      <button
        type="submit"
        className="bg-[#aca287] col-span-2 text-white py-2 rounded mt-5"
      >
        {editData ? "Update " : "Save "}
      </button>
    </form>
  );
};

export default HomeLandingForms;
