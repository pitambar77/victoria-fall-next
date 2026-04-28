import axios from "axios";

const API = "http://victoria-fall-backend.manoramaseoservice.com/api/property";
// const API = "http://localhost:8001/api/property";

/* =========================
   PROPERTY
========================= */

export const getProperties = () => axios.get(API);
export const getProperty = (slug) => axios.get(`${API}/slug/${slug}`);

// export const getProperty = (id) => axios.get(`${API}/${id}`);

export const createProperty = (data) => axios.post(API, data);

export const deleteProperty = (id) => axios.delete(`${API}/${id}`);

/* =========================
   OVERVIEW
========================= */

export const updateOverviewMeta = (id, data) =>
  axios.put(`${API}/${id}/overview/meta`, data);

export const updateOverview = (id, data) =>
  axios.put(`${API}/${id}/overview`, data);

export const addOverviewBlock = (id, data) =>
  axios.post(`${API}/${id}/overview`, data);

export const deleteOverviewBlock = (id, blockId) =>
  axios.delete(`${API}/${id}/overview/${blockId}`);

/* =========================
   HIGHLIGHTS
========================= */

export const addHighlight = (id, formData) =>
  axios.post(`${API}/${id}/highlights`, formData);

export const updateHighlight = (id, highlightId, formData) =>
  axios.put(`${API}/${id}/highlights/${highlightId}`, formData);

export const deleteHighlight = (id, highlightId) =>
  axios.delete(`${API}/${id}/highlights/${highlightId}`);

/* =========================
   GALLERY
========================= */

export const addGalleryImage = (id, formData) =>
  axios.post(`${API}/${id}/gallery`, formData);

export const updateGalleryImage = (id, imageId, data) =>
  axios.put(`${API}/${id}/gallery/${imageId}`, data);

export const deleteGalleryImage = (id, imageId) =>
  axios.delete(`${API}/${id}/gallery/${imageId}`);

/* =========================
   ROOMS
========================= */

export const addRoom = (id, formData) =>
  axios.post(`${API}/${id}/rooms`, formData);

export const updateRoom = (id, roomId, formData) =>
  axios.put(`${API}/${id}/rooms/${roomId}`, formData);

export const deleteRoom = (id, roomId) =>
  axios.delete(`${API}/${id}/rooms/${roomId}`);

/* =========================
   AMENITIES
========================= */

export const addBasicAmenity = (id, formData) =>
  axios.post(`${API}/${id}/amenities/basic`, formData);

export const updateBasicAmenity = (id, amenityId, formData) =>
  axios.put(`${API}/${id}/amenities/basic/${amenityId}`, formData);

export const deleteBasicAmenity = (id, amenityId) =>
  axios.delete(`${API}/${id}/amenities/basic/${amenityId}`);

export const addAdditionalAmenity = (id, formData) =>
  axios.post(`${API}/${id}/amenities/additional`, formData);

export const updateAdditionalAmenity = (id, amenityId, formData) =>
  axios.put(`${API}/${id}/amenities/additional/${amenityId}`, formData);

export const deleteAdditionalAmenity = (id, amenityId) =>
  axios.delete(`${API}/${id}/amenities/additional/${amenityId}`);

/* =========================
 Area location
========================= */

export const updateArea = (id, data) => axios.put(`${API}/${id}/area`, data);

export const addActivity = (id, formData) =>
  axios.post(`${API}/${id}/activities`, formData);

export const updateActivity = (id, activityId, formData) =>
  axios.put(`${API}/${id}/activities/${activityId}`, formData);

export const deleteActivity = (id, activityId) =>
  axios.delete(`${API}/${id}/activities/${activityId}`);

/* =========================
   LOCATION
========================= */

export const updateLocation = (id, data) =>
  axios.put(`${API}/${id}/location`, data);

/* =========================
   ADDRESS
========================= */

export const updateAddress = (id, data) =>
  axios.put(`${API}/${id}/address`, data);

/* =========================
   FEATURES
========================= */

export const addFeature = (id, data) =>
  axios.post(`${API}/${id}/features`, data);

export const updateFeature = (id, data) =>
  axios.put(`${API}/${id}/features`, data);

export const deleteFeature = (id, data) =>
  axios.delete(`${API}/${id}/features`, { data });

/* =========================
   BATHROOMS
========================= */

export const addBathroom = (id, data) =>
  axios.post(`${API}/${id}/bathrooms`, data);

export const deleteBathroom = (id, bathroomId) =>
  axios.delete(`${API}/${id}/bathrooms/${bathroomId}`);

export const addBathroomDetail = (id, bathroomId, formData) =>
  axios.post(`${API}/${id}/bathrooms/${bathroomId}/details`, formData);

export const updateBathroomDetail = (id, bathroomId, detailId, formData) =>
  axios.put(
    `${API}/${id}/bathrooms/${bathroomId}/details/${detailId}`,
    formData,
  );

export const deleteBathroomDetail = (id, bathroomId, detailId) =>
  axios.delete(`${API}/${id}/bathrooms/${bathroomId}/details/${detailId}`);

/* =========================
   SPACE
========================= */

export const addSpace = (id, formData) =>
  axios.post(`${API}/${id}/space`, formData);

export const updateSpace = (id, spaceId, formData) =>
  axios.put(`${API}/${id}/space/${spaceId}`, formData);

export const deleteSpace = (id, spaceId) =>
  axios.delete(`${API}/${id}/space/${spaceId}`);

/* =========================
   HOUSE RULE
========================= */

export const updateHouseRuleMeta = (id, data) =>
  axios.put(`${API}/${id}/house-rule/meta`, data);

export const addHouseRule = (id, formData) =>
  axios.post(`${API}/${id}/house-rule`, formData);

export const updateHouseRule = (id, ruleId, formData) =>
  axios.put(`${API}/${id}/house-rule/${ruleId}`, formData);

export const deleteHouseRule = (id, ruleId) =>
  axios.delete(`${API}/${id}/house-rule/${ruleId}`);

/* =========================
   INCIDENTAL
========================= */

export const updateIncidental = (id, data) =>
  axios.put(`${API}/${id}/incidental`, data);

/* =========================
   INFORMATION
========================= */

export const addInformationBlock = (id, data) =>
  axios.post(`${API}/${id}/information`, data);

export const updateInformation = (id, data) =>
  axios.put(`${API}/${id}/information`, data);

export const deleteInformationBlock = (id, blockId) =>
  axios.delete(`${API}/${id}/information/${blockId}`);

//Properties basics
/* =========================
   PROPERTY BASIC
========================= */

export const updatePropertyBasic = (id, data) =>
  axios.put(`${API}/${id}/basic`, data);
