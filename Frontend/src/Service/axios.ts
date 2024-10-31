import axios from "axios";
export const baseURLforPhotos = "/";
export default axios.create({
  baseURL: "http://localhost:3000/api/v1",
});
