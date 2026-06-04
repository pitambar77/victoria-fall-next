import axios from "axios";

export const getHomePage = () =>
  axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/home`
  );