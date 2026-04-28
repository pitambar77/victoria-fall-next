
// src/data/roleFields.js
export const roleFields = {
  "Property Owner": {
    businessInfo: [
      {
        name: "propertyName",
        label: "Property Name",
        type: "text",
        required: true,
      },
      {
        name: "address",
        label: "Physical Address",
        type: "text",
        required: true,
      },
      { name: "mapLink", label: "Google Map Link", type: "url" },
      {
        name: "propertyType",
        label: "Property Type",
        type: "select",
        options: [
          "Villa",
          "Townhouse",
          "Cottage",
          "Apartment",
          "Room",
          "Other",
        ],
      },
      { name: "rooms", label: "Number of Bed Rooms", type: "number" },
      { name: "bathrooms", label: "Number of Bathrooms", type: "number" },
      { name: "loungs", label: "Number of Loungs", type: "number" },
      { name: "kitchen", label: "Number of Kitchen", type: "number" },
      { name: "dining", label: "Number of dining Area", type: "number" },
      { name: "outdoor", label: "Number of Outdoor Entertainment", type: "number" },
      { name: "capacity", label: "Maximum Guest Capacity", type: "number" },

      { name: "wifi", label: "Wi-Fi", type: "checkbox" },
      { name: "tv", label: "Television / Streaming", type: "checkbox" },
      { name: "security", label: "Security Alarms", type: "checkbox" },
      { name: "laundry", label: "Laundry / Washing Machine", type: "checkbox" },
      { name: "parking", label: "Parking Area", type: "checkbox" },
      { name: "pool", label: "Swimming Pool", type: "checkbox" },
      { name: "staff", label: "Staff (maids, butlers, chefs)", type: "checkbox" },
      { name: "ac", label: "Air Conditioning / Ceiling Fans", type: "checkbox" },

      {
        name: "kitchenFacilities",
        label: "Kitchen & Dining Facilities",
        type: "textarea",
      },
      {
        name: "selfCatering",
        label: "Self-Catering or Serviced",
        type: "select",
        options: ["Self-Catering", "Serviced"],
      },
      {
        name: "cleaningDetails",
        label: "Cleaning & Maintenance Details",
        type: "textarea",
      },
      {
        name: "description",
        label: "Properties Description",
        type: "textarea",
        required: true,
      },
    ],

    legalInfo: [
      { name: "zimraBP", label: "ZIMRA BP Number", type: "text" },
      { name: "ztaMembership", label: "ZTA Membership Number", type: "text" },
      { name: "tradingLicense", label: "Trading License Number", type: "text" },
      { name: "insuranceDetails", label: "Insurance Details", type: "textarea" },

      { name: "bankName", label: "Bank Name", type: "text" },
      { name: "branchName", label: "Branch Name", type: "text" },
      { name: "branchAddress", label: "Branch Address", type: "text" },
      { name: "accountName", label: "Account Name", type: "text" },
      { name: "accountNumber", label: "Account Number", type: "text" },
      { name: "swiftCode", label: "Swift Code / BP Number", type: "text" },
    ],

    profileMedia: [
        { name: "seasonalRates", label: "Seasonal Pricing Applies?", type: "select", options: ["Yes", "No"] },
      { name: "rateType", label: "Rate Type", type: "select", options: ["Recommended Selling Price", "Reseller Net Price"] },
      { name: "rateBasis", label: "Rate Basis", type: "select", options: ["Per Property", "Per Person", "Per Room"] },
      { name: "rateInclusions", label: "Rate Inclusions", type: "textarea" },
    { name: "heroImage", label: "Hero / Banner Image", type: "file" },
      { name: "bedroomImages", label: "Bedroom Images", type: "file", multiple: true },
      { name: "bathroomImages", label: "Bathroom Images", type: "file", multiple: true },
      { name: "kitchenImages", label: "Kitchen Images", type: "file", multiple: true },
      { name: "outdoorImages", label: "Outdoor / Pool Area", type: "file", multiple: true },
    ],
  },

  "Restaurant Owner": {
    businessInfo: [
      {
        name: "restaurantName",
        label: "Restaurant Name",
        type: "text",
        required: true,
      },
      { name: "category", label: "Cuisine Type", type: "text", required: true },
      {
        name: "address",
        label: "Restaurant Address",
        type: "text",
        required: true,
      },
     { name: "mapLink", label: "Google Map Link", type: "url" },
      {
        name: "seatingCapacity",
        label: "Seating Capacity",
        type: "number",
        required: true,
      },
      {
        name:"mealavailable", label:"Meal time and service option (breakfast/lunch/dinner)" , type:"text"
      },
      {
        name: "description",
        label: "Restaurant Description",
        type: "textarea",
        required: true,
      },
    ],

    legalInfo: [
      {
        name: "licenseNo",
        label: "Food License / FSSAI Number",
        type: "text",
        required: true,
      },
      { name: "zimraBP", label: "ZIMRA BP Number", type: "text" },
      { name: "ztaMembership", label: "ZTA Membership Number", type: "text" },
      { name: "tradingLicense", label: "Trading License Number", type: "text" },


      { name: "bankName", label: "Bank Name", type: "text" },
      { name: "branchName", label: "Branch Name", type: "text" },
      { name: "branchAddress", label: "Branch Address", type: "text" },
      { name: "accountName", label: "Account Name", type: "text" },
      { name: "accountNumber", label: "Account Number", type: "text" },
      { name: "swiftCode", label: "Swift Code / BP Number", type: "text" },
    ],

    profileMedia: [
     
    { name: "heroImage", label: "Hero / Banner Image", type: "file" },
      { name: "exteriorImages", label: "Exterior Images", type: "file", multiple: true },
      { name: "interiorImages", label: "Interior Images", type: "file", multiple: true },
      { name: "kitchenImages", label: "Kitchen Images", type: "file", multiple: true },
    { name: "diningImages", label: "Dining Area Images", type: "file", multiple: true },
    ],
  },

  "Activity/Experience Provider": {
    businessInfo: [
      {
        name: "activityName",
        label: "Activity / Experience Name",
        type: "text",
        required: true,
      },
      {
        name: "category",
        label: "Activity Category",
        type: "text",
        required: true,
      },
      {
        name: "address",
        label: "Meeting / Start Point",
        type: "text",
        required: true,
      },
      { name: "mapLink", label: "Google Map Link", type: "url" },
      {
        name: "activityType",
        label: "Activity Type",
        type: "select",
        options: ["Adventure", "Cultural", "Nature", "Water"],
        required: true,
      },
      {
        name: "duration",
        label: "Duration (hours)",
        type: "text",
        required: true,
      },
      {
        name: "pricePerPerson",
        label: "Price per Person",
        type: "number",
        required: true,
      },
      {
        name: "description",
        label: "Activity Description",
        type: "textarea",
        required: true,
      },
    ],

    legalInfo: [
     { name: "zimraBP", label: "ZIMRA BP Number", type: "text" },
      { name: "ztaMembership", label: "ZTA Membership Number", type: "text" },
      { name: "tradingLicense", label: "Trading License Number", type: "text" },
      { name: "insuranceDetails", label: "Insurance Details", type: "textarea" },
      { name: "tourism", label: "Upload tourism license or relevant certification", type: "file" },

      { name: "bankName", label: "Bank Name", type: "text" },
      { name: "branchName", label: "Branch Name", type: "text" },
      { name: "branchAddress", label: "Branch Address", type: "text" },
      { name: "accountName", label: "Account Name", type: "text" },
      { name: "accountNumber", label: "Account Number", type: "text" },
      { name: "swiftCode", label: "Swift Code / BP Number", type: "text" },
    ],

    profileMedia: [
     { name: "heroImage", label: "Hero / Banner Image", type: "file" },
      { name: "activityImages", label: " Activity1 Images", type: "file", multiple: true },
      { name: "activityscImages", label: "Activity1 Images", type: "file", multiple: true },
     
    ],
  },
};
