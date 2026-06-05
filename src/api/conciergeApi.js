import axios from "axios";

export const getConciergePage = () =>
  axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/concierge`
  );