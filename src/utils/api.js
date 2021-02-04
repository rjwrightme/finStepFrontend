import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BACKENDURL;

export const getUsers = () => {
  return axios.get("/api/users");
};

export const postNewUser = (user) => {
  return axios
    .post("/api/signup", user)
    .then((response) => console.log(response));
};

export const postLogin = (user) => {
  return axios
    .post("/api/login", user)
    .then((response) => console.log(response));
};
