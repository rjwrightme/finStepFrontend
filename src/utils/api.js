import axios from "axios";
axios.defaults.baseURL = process.env.BACKENDURL;

export const getUsers = () => {
  return axios.get("/api/users");
};
