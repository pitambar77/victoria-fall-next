"use client";
import { useState } from "react";
import axios from "axios";
import OverviewForm from "../../components/properties/OverviewForm";
import HighlightsForm from "../../components/properties/HighlightsForm";
import AmenitiesForm from "../../components/properties/AmenitiesForm";
import AreaForm from "../../components/properties/AreaForm";
import RoomsForm from "../../components/properties/RoomsForm";
import BathroomsForm from "../../components/properties/BathroomsForm";
import SpaceForm from "../../components/properties/SpaceForm";
import HouseRulesForm from "../../components/properties/HouseRulesForm";
import GalleryForm from "../../components/properties/GalleryForm";
import IncidentalForm from "../../components/properties/IncidentalForm";
import InformationForm from "../../components/properties/InformationForm";
import PropertyBasicForm from "../../components/properties/PropertyBasicForm";
import { useRouter } from "next/navigation";
import useFormErrors from "../../hooks/useFormErrors";

export default function CreateProperty() {
  const [step, setStep] = useState(1);

  const [property, setProperty] = useState({
    overview: {
      title: "",
      subTitle: "",
      landingsubcontent: "",
      description: [],
    },

    slug: "",

    highlights: [],

    aminities: {
      basic: [],
      additional: [],
    },

    area: {
      maplink: "",
      locationname: "",
      relatedactivity: [],
    },

    rooms: [],
    bathrooms: [],
    space: [],

    houserule: {
      checkIn: "",
      checkOut: "",
      content: "",
      rule: [],
    },

    incidental: {
      description: [],
    },

    information: {
      info: [],
    },

    gallery: [],

    price: "",
    rating: "",
    reviews: "",
    sleeps: "",
    guest: "",
    distance: "",

    features: [],

    location: {
      lat: "",
      lng: "",
    },

    address: "",
    city: "",
    country: "",
  });

  const { errors, setError, clearError, clearAllErrors, setErrors } =
    useFormErrors();

  const router = useRouter();

  /* =============================
     STEP NAVIGATION
  ============================== */

  const nextStep = () => {
    if (step === 1) {
      if (!property.overview.title.trim()) {
        setError("title", "Property name is required");
        return;
      }
      const descriptions = property.overview.description || [];

      if (descriptions.length === 0) {
        setErrors({
          description_0: "Description is required",
        });
        return;
      }

      for (let i = 0; i < descriptions.length; i++) {
        if (!descriptions[i].content?.trim()) {
          setErrors({
            [`description_${i}`]: "Description is required",
          });
          return;
        }
      }
    }

    if (step === 2) {
      const highlights = property.highlights || [];

      for (let i = 0; i < highlights.length; i++) {
        const highlight = highlights[i];

        if (!highlight.title?.trim()) {
          setErrors({
            [`highlightTitle_${i}`]: "Highlight title is required",
          });
          return;
        }

        if (!highlight.description?.trim()) {
          setErrors({
            [`highlightDesc_${i}`]: "Highlight description is required",
          });
          return;
        }

        if (!highlight.icon) {
          setErrors({
            [`highlightIcon_${i}`]: "Highlight icon is required",
          });
          return;
        }
      }
    }

    if (step === 3) {
      const basic = property.aminities.basic || [];
      const additional = property.aminities.additional || [];

      if (basic.length === 0) {
        setErrors({
          basicName_0: "At least one popular amenity is required",
        });
        return;
      }

      for (let i = 0; i < basic.length; i++) {
        if (!basic[i].aminityName?.trim()) {
          setErrors({ [`basicName_${i}`]: "Amenity name required" });
          return;
        }

        if (!basic[i].icon) {
          setErrors({ [`basicIcon_${i}`]: "Icon required" });
          return;
        }
      }

      for (let i = 0; i < additional.length; i++) {
        if (!additional[i].aminityName?.trim()) {
          setErrors({ [`addName_${i}`]: "Amenity name required" });
          return;
        }

        if (!additional[i].icon) {
          setErrors({ [`addIcon_${i}`]: "Icon required" });
          return;
        }
      }
    }

    if (step === 4) {
      if (!property.area.locationname.trim()) {
        setError("locationname", "location is required");
        return;
      }
      if (!property.area.maplink.trim()) {
        setError("maplink", "maplink is required");
        return;
      }

      if (step === 4) {
        if (!property.area.locationname.trim()) {
          setError("locationname", "Location is required");
          return;
        }

        if (!property.area.maplink.trim()) {
          setError("maplink", "Map link is required");
          return;
        }

        const activities = property.area.relatedactivity || {};

        for (let i = 0; i < activities.length; i++) {
          const activity = activities[i];

          if (
            !activity.title?.trim() ||
            !activity.shortDescription?.trim() ||
            !activity.icon
          ) {
            setErrors({
              [`activity_${i}`]: "Please complete this activity",
            });

            return;
          }
        }
      }
    }

    if (step === 5) {
      const rooms = property.rooms || [];

      /* Require at least one room */

      if (rooms.length === 0) {
        setErrors({
          bedroomName_0: "At least one bedroom is required",
        });
        return;
      }

      for (let i = 0; i < rooms.length; i++) {
        const room = rooms[i];

        if (!room.bedroomName?.trim()) {
          setErrors({ [`bedroomName_${i}`]: "Bedroom name is required" });
          return;
        }

        if (!room.bed?.trim()) {
          setErrors({ [`bed_${i}`]: "Bed type is required" });
          return;
        }

        if (!room.icon) {
          setErrors({ [`icon_${i}`]: "Bed icon is required" });
          return;
        }
      }
    }

    if (step === 6) {
      const bathrooms = property.bathrooms || [];

      /* Require at least one bathroom */

      if (bathrooms.length === 0) {
        setErrors({
          bathName_0: "At least one bathroom is required",
        });
        return;
      }

      for (let i = 0; i < bathrooms.length; i++) {
        const bath = bathrooms[i];

        if (!bath.bathName?.trim()) {
          setErrors({ [`bathName_${i}`]: "Bathroom name is required" });
          return;
        }

        const details = bath.bathdetails || [];

        if (details.length === 0) {
          setErrors({
            [`bathDetailName_${i}_0`]: "At least one bathroom detail required",
          });
          return;
        }

        for (let j = 0; j < details.length; j++) {
          const detail = details[j];

          if (!detail.name?.trim()) {
            setErrors({
              [`bathDetailName_${i}_${j}`]: "Detail name is required",
            });
            return;
          }

          if (!detail.icon) {
            setErrors({
              [`bathDetailIcon_${i}_${j}`]: "Detail icon is required",
            });
            return;
          }
        }
      }
    }

    if (step === 7) {
      const spaces = property.space || [];

      for (let i = 0; i < spaces.length; i++) {
        const space = spaces[i];

        // first row optional
        if (i === 0) {
          const anyFilled = space.title?.trim() || space.icon;
          const allFilled = space.title?.trim() && space.icon;

          if (anyFilled && !allFilled) {
            setErrors({
              [`space_${i}`]: "Please complete this space",
            });
            return;
          }

          continue;
        }

        // all additional rows required
        if (!space.title?.trim() || !space.icon) {
          setErrors({
            [`space_${i}`]: "Please complete this space or remove it",
          });
          return;
        }
      }
    }

    if (step === 8) {
      if (!property.houserule.checkIn?.trim()) {
        setErrors({ checkIn: "Check In required" });
        return;
      }

      if (!property.houserule.checkOut?.trim()) {
        setErrors({ checkOut: "Check Out required" });
        return;
      }

      const rules = property.houserule.rule || [];

      /* Require at least one rule */

      if (rules.length === 0) {
        setErrors({
          rule_0: "At least one policy is required",
        });
        return;
      }

      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];

        if (!rule.title?.trim()) {
          setErrors({
            [`ruleTitle_${i}`]: "Policy title is required",
          });
          return;
        }

        if (!rule.description?.trim()) {
          setErrors({
            [`ruleDesc_${i}`]: "Policy description is required",
          });
          return;
        }

        if (!rule.icon) {
          setErrors({
            [`ruleIcon_${i}`]: "Policy icon is required",
          });
          return;
        }
      }
    }

    if (step === 9) {
      const blocks = property.incidental.description || [];

      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];

        /* FIRST BLOCK OPTIONAL */

        if (i === 0) {
          const anyFilled =
            block.type === "list"
              ? Array.isArray(block.content) && block.content.length > 0
              : block.content?.trim();

          const allFilled =
            block.type === "list"
              ? Array.isArray(block.content) &&
                block.content.filter((item) => item.trim() !== "").length > 0
              : block.content?.trim();

          if (anyFilled && !allFilled) {
            setErrors({
              [`incidental_${i}`]: "Please complete this section",
            });
            return;
          }

          continue;
        }

        /* OTHER BLOCKS REQUIRED */

        if (block.type === "list") {
          if (
            !Array.isArray(block.content) ||
            block.content.filter((item) => item.trim() !== "").length === 0
          ) {
            setErrors({
              [`incidental_${i}`]: "Please add list items",
            });
            return;
          }
        } else {
          if (!block.content?.trim()) {
            setErrors({
              [`incidental_${i}`]: "Content is required",
            });
            return;
          }
        }
      }
    }

    if (step === 10) {
      const blocks = property.information.info || [];

      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];

        if (i === 0) {
          const anyFilled =
            block.type === "list"
              ? Array.isArray(block.content) && block.content.length > 0
              : block.content?.trim();

          const allFilled =
            block.type === "list"
              ? Array.isArray(block.content) &&
                block.content.filter((item) => item.trim() !== "").length > 0
              : block.content?.trim();

          if (anyFilled && !allFilled) {
            setErrors({
              [`information_${i}`]: "Please complete this section",
            });
            return;
          }

          continue;
        }

        if (block.type === "list") {
          if (
            !Array.isArray(block.content) ||
            block.content.filter((item) => item.trim() !== "").length === 0
          ) {
            setErrors({
              [`information_${i}`]: "Please add list items",
            });
            return;
          }
        } else {
          if (!block.content?.trim()) {
            setErrors({
              [`information_${i}`]: "Content is required",
            });
            return;
          }
        }
      }
    }

    if (step === 11) {
      const images = property.gallery || [];

      if (images.length === 0) {
        setErrors({
          imageName_0: "Image name is required",
        });
        return;
      }

      for (let i = 0; i < images.length; i++) {
        const img = images[i];

        if (!img.imageName?.trim()) {
          setErrors({
            [`imageName_${i}`]: "Image name is required",
          });
          return;
        }

        if (!img.imageCategory) {
          setErrors({
            [`imageCategory_${i}`]: "Image category is required",
          });
          return;
        }

        if (!img.image) {
          setErrors({
            [`image_${i}`]: "Image upload is required",
          });
          return;
        }
      }
    }

    setErrors({});
    clearAllErrors();
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const scrollToError = (field) => {
    const el = document.querySelector(`[name="${field}"]`);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      el.focus();
    }
  };

  /* =============================
     SUBMIT PROPERTY
  ============================== */

  const submit = async () => {
    if (!property.price || property.price.trim() === "") {
      setErrors({ price: "Price required" });
      scrollToError("price");
      return;
    }

    if (!property.category || property.category.trim() === "") {
      setErrors({ category: "Category is required" });
      scrollToError("category");
      return;
    }

    if (!property.sleeps || property.sleeps.trim() === "") {
      setErrors({ sleeps: "Sleeps required" });
      scrollToError("sleeps");
      return;
    }
    if (!property.guest || property.guest.trim() === "") {
      setErrors({ guest: "Guest required" });
      scrollToError("guest");
      return;
    }

    try {
      const formData = new FormData();

      const cleanProperty = {
        ...property,
        highlights: property.highlights.map((h) => ({
          title: h.title,
          description: h.description,
          icon: h.icon,
        })),
      };

      formData.append("property", JSON.stringify(cleanProperty));

      // gallery images
      property.gallery.forEach((g) => {
        if (g.image instanceof File) {
          formData.append("galleryImages", g.image);
        }
      });

      await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/api/property",
        formData,
      );
      // await axios.post("http://localhost:8001/api/property", formData);

      alert("✅ Property created successfully!");
      router.push("/dashbord/properties");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to create property. Please try again.");
    }
  };

  const totalSteps = 12;
  const steps = [
    "Overview",
    "Highlights",
    "Amenities",
    "Area",
    "Rooms",
    "Bathrooms",
    "Space",
    "House Rules",
    "Incidental",
    "Information",
    "Gallery",
    "Basic Info",
  ];

  /* =============================
     STEP RENDERING
  ============================== */

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <OverviewForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 2:
        return (
          <HighlightsForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 3:
        return (
          <AmenitiesForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 4:
        return (
          <AreaForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 5:
        return (
          <RoomsForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 6:
        return (
          <BathroomsForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 7:
        return (
          <SpaceForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 8:
        return (
          <HouseRulesForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 9:
        return (
          <IncidentalForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 10:
        return (
          <InformationForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 11:
        return (
          <GalleryForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      case 12:
        return (
          <PropertyBasicForm
            property={property}
            setProperty={setProperty}
            errors={errors}
            clearError={clearError}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="hd mx-auto  rounded-md p-8">
      <h1 className=" mb-4 font-semibold text-xl">Add New Property</h1>
      {/* STEP INDICATOR */}
      <div className="mb-6 text-sm text-gray-500">Step {step} of 12</div>
      {/* STEP PROGRESS */}
      <div className="mb-10 bg-white rounded-md p-4">
        <div className="flex items-center justify-between">
          {steps.map((label, index) => {
            const stepNumber = index + 1;

            const isCompleted = stepNumber < step;
            const isActive = stepNumber === step;

            return (
              <div key={index} className="flex items-center w-full">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold
              ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : isActive
                    ? "bg-[#aca288] text-white"
                    : "bg-gray-300 text-gray-700"
              }`}
                >
                  {stepNumber}
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2
                ${isCompleted ? "bg-green-500" : "bg-gray-300"}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* TABS */}
      {/* <div className="flex mb-6 bg-white overflow-x-auto">
        {steps.map((label, index) => {
          const tabStep = index + 1;

          return (
            <button
              key={index}
              onClick={() => setStep(tabStep)}
              className={`px-5 py-3 cursor-pointer text-sm font-medium border-b-2 transition
        ${
          step === tabStep
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-blue-600"
        }`}
            >
              {label}
            </button>
          );
        })}
      </div> */}
      <div className=" bg-white p-4 rounded-md">
        {/* FORM STEP */}
        {renderStep()}
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-10">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-300 px-6 py-2 rounded cursor-pointer"
          >
            Previous
          </button>
        )}

        {step < 12 && (
          <button
            onClick={nextStep}
            className="bg-[#aca288] text-white px-6 py-2 rounded cursor-pointer"
          >
            Next
          </button>
        )}

        {step === 12 && (
          <button
            onClick={submit}
            className="bg-[#aca288] text-white px-6 py-2 rounded cursor-pointer"
          >
            Create Property
          </button>
        )}
      </div>
    </div>
  );
}
