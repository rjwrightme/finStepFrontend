import { LOGOUT } from "../utils/actions";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BACKENDURL;

export const getUserData = () => {
  return axios.get("api/user_data", {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

export const getUsers = () => {
  return axios.get("api/users");
};

export const postNewUser = (user) => {
  return axios
    .post("api/signup", user)
    .then((response) => console.log(response));
};

export const postLogin = (user) => {
  return axios
    .post("api/login", user)
    .then((response) =>
      localStorage.setItem("accessToken", `Bearer ${response.data.accessToken}`)
    );
};

export const logout = (dispatch) => {
  if (localStorage.getItem("accessToken")) {
    localStorage.removeItem("accessToken");
  }
  dispatch({ type: LOGOUT });
};

export const postNewBudget = (budget) => {
  return axios.post("api/new-budget", budget).then((response) => response);
};

export const postNewBudgetItem = (budgetItem) => {
  return axios.post("api/new-budget-item", budgetItem);
};

export const getBudgetItems = (userID) => {
  return axios.get(`api/budget-list/${userID}`);
};

export const deleteBudgetItem = (budgetItemId) => {
  return axios.delete(`api/budget-item/${budgetItemId}`);
};

export const getBudget = (userId) => {
  return axios.get(`/api/budget/${userId}`);
};
