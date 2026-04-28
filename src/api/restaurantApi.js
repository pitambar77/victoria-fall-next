


import axios from "axios";

// const API = "http://localhost:8001/api/restaurants";
const API = "http://victoria-fall-backend.manoramaseoservice.com/api/restaurants";

export const getRestaurants = () => axios.get(API);
export const getRestaurantBySlug = (slug) =>
  axios.get(`${API}/slug/${slug}`);

export const getRestaurant = (id) => axios.get(`${API}/${id}`);
export const createRestaurant = (data) =>
  axios.post(API, data);
export const updateRestaurant = (id, data) =>
  axios.put(`${API}/${id}`, data);
export const deleteRestaurant = (id) => axios.delete(`${API}/${id}`);

export const addMenuCategory = (data) => axios.post(`${API}/menu/category`, data);
export const updateMenuCategory = (data) => axios.put(`${API}/menu/category`, data);
export const deleteMenuCategory = (data) => axios.delete(`${API}/menu/category`, { data });
export const addMenuItem = (data) => axios.post(`${API}/menu/item`, data);
export const updateMenuItem = (data) => axios.put(`${API}/menu/item`, data);
export const deleteMenuItem = (data) => axios.delete(`${API}/menu/item`, { data });
