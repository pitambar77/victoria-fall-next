import axios from "axios";

export const getActivityLanding = () =>
  axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/activitylanding`
  );