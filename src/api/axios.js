import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "34039c63967aacbc2429413a1757fbcf",
    language: "ko-KR",
  },
});

export default instance;
