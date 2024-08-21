import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2210aaafe8a6431082a7b55104e84f0c",
  },
});
