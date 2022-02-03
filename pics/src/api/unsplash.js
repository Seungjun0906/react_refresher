import axios from "axios";

const API_KEY = "unsplash api key";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});
