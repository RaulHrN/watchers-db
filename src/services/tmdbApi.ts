import axios from "axios";

const apiKey = "574196f510dc4a8b48c3557c4a2ab124";

// Endpoint: Popular Movies
export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});
