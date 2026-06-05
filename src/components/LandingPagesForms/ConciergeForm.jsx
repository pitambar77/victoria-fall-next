"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CustomTextEditor from "../CustomTextEditor";

const ConciergeForm = ({ editData, onSuccess }) => {
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

  const [homeServiceSection, setHomeServiceSection] = useState({
    title: "",
  });

  const [homeService, setHomeService] = useState([
    {
      title: "",
      description: "",
      image: null,
      imagePreview: "",
    },
  ]);

  const [culturalServiceSection, setCulturalServiceSection] = useState({
    title: "",
  });

  const [culturalService, setCulturalService] = useState([
    {
      title: "",
      description: "",
      image: null,
      imagePreview: "",
    },
  ]);

  const [beautywellnesServiceSection, setBeautywellnesServiceSection] =
    useState({
      title: "",
    });

  const [beautywellnesService, setBeautywellnesService] = useState([
    {
      title: "",
      description: "",
      image: null,
      imagePreview: "",
    },
  ]);

  const [privateeventServiceSection, setPrivateeventServiceSection] = useState({
    title: "",
  });

  const [privateeventService, setPrivateeventService] = useState([
    {
      title: "",
      description: "",
      image: null,
      imagePreview: "",
    },
  ]);

  const [foodServiceSection, setFoodServiceSection] = useState({
    title: "",
  });

  const [foodService, setFoodService] = useState([
    {
      title: "",
      description: "",
      image: null,
      imagePreview: "",
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

      setHomeServiceSection(
        editData.homeServiceSection || {
          title: "",
        },
      );

      setHomeService(
        editData.homeService?.length
          ? editData.homeService.map((item) => ({
              ...item,
              imagePreview: item.image,
            }))
          : [
              {
                title: "",
                description: "",
                image: null,
                imagePreview: "",
              },
            ],
      );

      setCulturalServiceSection(
        editData.culturalServiceSection || {
          title: "",
        },
      );

      setCulturalService(
        editData.culturalService?.length
          ? editData.culturalService.map((item) => ({
              ...item,
              imagePreview: item.image,
            }))
          : [
              {
                title: "",
                description: "",
                image: null,
                imagePreview: "",
              },
            ],
      );

      setBeautywellnesServiceSection(
        editData.beautywellnesServiceSection || {
          title: "",
        },
      );

      setBeautywellnesService(
        editData.beautywellnesService?.length
          ? editData.beautywellnesService.map((item) => ({
              ...item,
              imagePreview: item.image,
            }))
          : [
              {
                title: "",
                description: "",
                image: null,
                imagePreview: "",
              },
            ],
      );

      setPrivateeventServiceSection(
        editData.privateeventServiceSection || {
          title: "",
        },
      );

      setPrivateeventService(
        editData.privateeventService?.length
          ? editData.privateeventService.map((item) => ({
              ...item,
              imagePreview: item.image,
            }))
          : [
              {
                title: "",
                description: "",
                image: null,
                imagePreview: "",
              },
            ],
      );

      setFoodServiceSection(
        editData.foodServiceSection || {
          title: "",
        },
      );

      setFoodService(
        editData.foodService?.length
          ? editData.foodService.map((item) => ({
              ...item,
              imagePreview: item.image,
            }))
          : [
              {
                title: "",
                description: "",
                image: null,
                imagePreview: "",
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

  const addServiceItem = (setter, hasImage = true) => {
    setter((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        ...(hasImage && {
          image: null,
          imagePreview: "",
        }),
      },
    ]);
  };

  const removeServiceItem = (setter, index) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  const handleServiceChange = (setter, index, field, value) => {
    setter((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  };

  const handleServiceImage = (setter, index, file) => {
    setter((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              image: file,
              imagePreview: URL.createObjectURL(file),
            }
          : item,
      ),
    );
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

const homeServiceData = homeService.map(
  ({ imagePreview, image, ...rest }) => ({
    ...rest,
    image: typeof image === "string" ? image : "",
  })
);

const culturalServiceData = culturalService.map(
  ({ imagePreview, image, ...rest }) => ({
    ...rest,
    image: typeof image === "string" ? image : "",
  })
);

const beautywellnesServiceData = beautywellnesService.map(
  ({ imagePreview, image, ...rest }) => ({
    ...rest,
    image: typeof image === "string" ? image : "",
  })
);

const privateeventServiceData = privateeventService.map(
  ({ imagePreview, image, ...rest }) => ({
    ...rest,
    image: typeof image === "string" ? image : "",
  })
);

const foodServiceData = foodService.map(
  ({ imagePreview, image, ...rest }) => ({
    ...rest,
    image: typeof image === "string" ? image : "",
  })
);

    const data = new FormData();

    data.append("formData", JSON.stringify(formData));

    if (mainImage) {
      data.append("mainImage", mainImage);
    }

    data.append("overviewinfo", JSON.stringify(overviewinfo));

    data.append("homeServiceSection", JSON.stringify(homeServiceSection));

    data.append(
      "culturalServiceSection",
      JSON.stringify(culturalServiceSection),
    );

    data.append(
      "beautywellnesServiceSection",
      JSON.stringify(beautywellnesServiceSection),
    );

    data.append(
      "privateeventServiceSection",
      JSON.stringify(privateeventServiceSection),
    );

    data.append("foodServiceSection", JSON.stringify(foodServiceSection));

    data.append("homeService", JSON.stringify(homeServiceData));

    data.append("culturalService", JSON.stringify(culturalServiceData));

    data.append(
      "beautywellnesService",
      JSON.stringify(beautywellnesServiceData),
    );

    data.append("privateeventService", JSON.stringify(privateeventServiceData));

    data.append("foodService", JSON.stringify(foodServiceData));

    data.append("faq", JSON.stringify(faq));

    // Home Service Images
    homeService.forEach((item) => {
      if (item.image instanceof File) {
        data.append("homeServiceImages", item.image);
      }
    });

    // Cultural Service Images
    culturalService.forEach((item) => {
      if (item.image instanceof File) {
        data.append("culturalServiceImages", item.image);
      }
    });

    // Beauty Service Images
    beautywellnesService.forEach((item) => {
      if (item.image instanceof File) {
        data.append("beautywellnesServiceImages", item.image);
      }
    });

    // Private Event Images
    privateeventService.forEach((item) => {
      if (item.image instanceof File) {
        data.append("privateeventServiceImages", item.image);
      }
    });

    // Food Service Images
    foodService.forEach((item) => {
      if (item.image instanceof File) {
        data.append("foodServiceImages", item.image);
      }
    });

    try {
      let res;

      if (editData) {
        res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/concierge/${editData._id}`,
          data,
        );
      } else {
        res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE}/api/concierge`,
          data,
        );
      }

      alert("Saved Successfully!");

      router.push("/dashboard/concierge");

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
        <h3 className="text-xl font-semibold text-[#444] mb-3">
          Overview Info
        </h3>

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

      {/* =============== Home Service Section =============== */}

      <section className="col-span-2 mt-6">
        <div className="flex justify-between mb-3">
          <h3 className="text-xl font-semibold">Make Yourself at Home section</h3>

          <button
            type="button"
            onClick={() => addServiceItem(setHomeService)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Service
          </button>
        </div>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Section Title"
          value={homeServiceSection.title}
          onChange={(e) =>
            setHomeServiceSection({
              title: e.target.value,
            })
          }
        />

        {homeService.map((item, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <input
              className="w-full border p-3 rounded mb-3"
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                handleServiceChange(
                  setHomeService,
                  index,
                  "title",
                  e.target.value,
                )
              }
            />

            <CustomTextEditor
              value={item.description}
              onChange={(html) =>
                handleServiceChange(setHomeService, index, "description", html)
              }
            />

            <input
              type="file"
              className="mt-3"
              onChange={(e) =>
                handleServiceImage(setHomeService, index, e.target.files[0])
              }
            />

            {item.imagePreview && (
              <img src={item.imagePreview} className="w-40 mt-3 rounded" />
            )}

            <button
              type="button"
              onClick={() => removeServiceItem(setHomeService, index)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* ================= CULTURAL SERVICE ================= */}

      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-[#444]">
            Cultural Service
          </h3>

          <button
            type="button"
            onClick={() => addServiceItem(setCulturalService)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Service
          </button>
        </div>

        {/* Section Title */}

        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4"
          placeholder="Section Title"
          value={culturalServiceSection.title}
          onChange={(e) =>
            setCulturalServiceSection({
              title: e.target.value,
            })
          }
        />

        {/* Service Items */}

        {culturalService.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded bg-gray-50 mb-4"
          >
            {/* Title */}

            <input
              className="w-full border border-gray-300 rounded-md p-3 mb-3"
              placeholder="Service Title"
              value={item.title}
              onChange={(e) =>
                handleServiceChange(
                  setCulturalService,
                  index,
                  "title",
                  e.target.value,
                )
              }
            />

            {/* Description */}

            <CustomTextEditor
              value={item.description || ""}
              onChange={(html) =>
                handleServiceChange(
                  setCulturalService,
                  index,
                  "description",
                  html,
                )
              }
            />

            {/* Image */}

            <div className="mt-3">
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) =>
                  handleServiceImage(
                    setCulturalService,
                    index,
                    e.target.files[0],
                  )
                }
              />

              {item.imagePreview && (
                <img
                  src={item.imagePreview}
                  alt=""
                  className="w-40 h-28 object-cover rounded mt-3"
                />
              )}
            </div>

            {/* Remove */}

            <button
              type="button"
              onClick={() => removeServiceItem(setCulturalService, index)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove Service
            </button>
          </div>
        ))}
      </section>

      {/* ================= BEAUTY & WELLNESS SERVICE ================= */}

      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-[#444]">
            Beauty & Wellness Service
          </h3>

          <button
            type="button"
            onClick={() => addServiceItem(setBeautywellnesService)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Service
          </button>
        </div>

        {/* Section Title */}

        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4"
          placeholder="Section Title"
          value={beautywellnesServiceSection.title}
          onChange={(e) =>
            setBeautywellnesServiceSection({
              title: e.target.value,
            })
          }
        />

        {/* Service Items */}

        {beautywellnesService.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded bg-gray-50 mb-4"
          >
            {/* Title */}

            <input
              className="w-full border border-gray-300 rounded-md p-3 mb-3"
              placeholder="Service Title"
              value={item.title}
              onChange={(e) =>
                handleServiceChange(
                  setBeautywellnesService,
                  index,
                  "title",
                  e.target.value,
                )
              }
            />

            {/* Description */}

            <CustomTextEditor
              value={item.description || ""}
              onChange={(html) =>
                handleServiceChange(
                  setBeautywellnesService,
                  index,
                  "description",
                  html,
                )
              }
            />

            {/* Image */}

            <div className="mt-3">
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) =>
                  handleServiceImage(
                    setBeautywellnesService,
                    index,
                    e.target.files[0],
                  )
                }
              />

              {item.imagePreview && (
                <img
                  src={item.imagePreview}
                  alt=""
                  className="w-40 h-28 object-cover rounded mt-3"
                />
              )}
            </div>

            {/* Remove Button */}

            <button
              type="button"
              onClick={() => removeServiceItem(setBeautywellnesService, index)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove Service
            </button>
          </div>
        ))}
      </section>

      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-[#444]">
            Private Event Service
          </h3>

          <button
            type="button"
            onClick={() => addServiceItem(setPrivateeventService)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Service
          </button>
        </div>

        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4"
          placeholder="Section Title"
          value={privateeventServiceSection.title}
          onChange={(e) =>
            setPrivateeventServiceSection({
              title: e.target.value,
            })
          }
        />

        {privateeventService.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded bg-gray-50 mb-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3 mb-3"
              placeholder="Service Title"
              value={item.title}
              onChange={(e) =>
                handleServiceChange(
                  setPrivateeventService,
                  index,
                  "title",
                  e.target.value,
                )
              }
            />

            <CustomTextEditor
              value={item.description || ""}
              onChange={(html) =>
                handleServiceChange(
                  setPrivateeventService,
                  index,
                  "description",
                  html,
                )
              }
            />

            <div className="mt-3">
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) =>
                  handleServiceImage(
                    setPrivateeventService,
                    index,
                    e.target.files[0],
                  )
                }
              />

              {item.imagePreview && (
                <img
                  src={item.imagePreview}
                  alt=""
                  className="w-40 h-28 object-cover rounded mt-3"
                />
              )}
            </div>

            <button
              type="button"
              onClick={() => removeServiceItem(setPrivateeventService, index)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove Service
            </button>
          </div>
        ))}
      </section>

      {/* ================= FOOD SERVICE ================= */}

      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-[#444]">Food Service</h3>

          <button
            type="button"
            onClick={() => addServiceItem(setFoodService)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Service
          </button>
        </div>

        {/* Section Title */}

        <input
          className="w-full border border-gray-300 rounded-md p-3 mb-4"
          placeholder="Section Title"
          value={foodServiceSection.title}
          onChange={(e) =>
            setFoodServiceSection({
              title: e.target.value,
            })
          }
        />

        {/* Service Items */}

        {foodService.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded bg-gray-50 mb-4"
          >
            {/* Title */}

            <input
              className="w-full border border-gray-300 rounded-md p-3 mb-3"
              placeholder="Service Title"
              value={item.title}
              onChange={(e) =>
                handleServiceChange(
                  setFoodService,
                  index,
                  "title",
                  e.target.value,
                )
              }
            />

            {/* Description */}

            <CustomTextEditor
              value={item.description || ""}
              onChange={(html) =>
                handleServiceChange(setFoodService, index, "description", html)
              }
            />

            {/* Image Upload */}

            <div className="mt-3">
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) =>
                  handleServiceImage(setFoodService, index, e.target.files[0])
                }
              />

              {item.imagePreview && (
                <img
                  src={item.imagePreview}
                  alt=""
                  className="w-40 h-28 object-cover rounded mt-3"
                />
              )}
            </div>

            {/* Remove Button */}

            <button
              type="button"
              onClick={() => removeServiceItem(setFoodService, index)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove Service
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

export default ConciergeForm;
