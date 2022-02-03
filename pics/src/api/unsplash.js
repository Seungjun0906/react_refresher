import axios from "axios";

const API_KEY = "FPpOYb0qLtFxEZ_tOkVWR_wVIeHTfvqxsL1hlsTffiE";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});
