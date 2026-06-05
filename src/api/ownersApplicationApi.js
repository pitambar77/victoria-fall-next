import axios from "axios";

export const getOwnersApplication = () =>
  axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE}/api/ownerapplicationlanding`
  );
