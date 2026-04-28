import axios from "axios";

// const API = "http://localhost:8001/api/properties";

const API = "http://victoria-fall-backend.manoramaseoservice.com/api/properties";



export const getProperties = () => axios.get(API);
export const getProperty = (id) => axios.get(`${API}/${id}`);
export const createProperty = (data) =>
  axios.post(API, data, { headers: { "Content-Type": "multipart/form-data" } });
export const updateProperty = (id, data) =>
  axios.put(`${API}/${id}`, data, { headers: { "Content-Type": "multipart/form-data" } });
export const deleteProperty = (id) => axios.delete(`${API}/${id}`);

export const addFacility = (id, data) =>
  axios.post(`${API}/${id}/facility`, data, { headers: { "Content-Type": "multipart/form-data" } });
export const deleteFacility = (id, facilityId) =>
  axios.delete(`${API}/${id}/facility/${facilityId}`);
