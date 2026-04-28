import axios from "axios";

// const API = "http://localhost:8001/api/destinations";
const API = "http://victoria-fall-backend.manoramaseoservice.com/api/destinations";

/* ================= CREATE ================= */
export const createDestination = (data) =>
  axios.post(API, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

/* ================= READ ================= */

// ✅ Get All Destinations
export const getDestinations = () => axios.get(API);

// ✅ Get Destination by ID (admin/edit use)
export const getDestination = (id) => axios.get(`${API}/${id}`);

// ✅ Get Destination by SLUG (public pages)
export const getDestinationBySlug = (slug) =>
  axios.get(`${API}/slug/${slug}`);

/* ================= UPDATE ================= */
export const updateDestination = (id, data) =>
  axios.put(`${API}/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

/* ================= DELETE ================= */
export const deleteDestination = (id) => axios.delete(`${API}/${id}`);
