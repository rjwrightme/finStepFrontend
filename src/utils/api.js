import { LOGOUT } from "../utils/actions";
import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_APP_BACKENDURL;

export const getUserData = () => {
  return axios.get(`https://${process.env.REACT_APP_BACKENDURL}/api/user_data`);
};

export const getUsers = () => {
  return axios.get(`https://${process.env.REACT_APP_BACKENDURL}/api/users`);
};

export const postNewUser = (user) => {
  return axios
    .post(`https://${process.env.REACT_APP_BACKENDURL}/api/signup`, user)
    .then((response) => console.log(response));
};

export const postLogin = (user) => {
  return axios
    .post(`https://${process.env.REACT_APP_BACKENDURL}/api/login`, user)
    .then((response) => console.log(response));
};

export const logout = (dispatch) => {
  return axios
    .get(`https://${process.env.REACT_APP_BACKENDURL}/api/logout`)
    .then(() => {
      dispatch({ type: LOGOUT });
    });
};

export const postNewBudget = (budget) => {
  return axios
    .post(`https://${process.env.REACT_APP_BACKENDURL}/api/new-budget`, budget)
    .then((response) => response);
};

export const postNewBudgetItem = (budgetItem) => {
  return axios
    .post(
      `https://${process.env.REACT_APP_BACKENDURL}/api/new-budget-item`,
      budgetItem
    )
    .then((response) => console.log(response));
};

export const getBudgetItems = () => {
  return axios.get(
    `https://${process.env.REACT_APP_BACKENDURL}/api/budget-list`
  );
};

export const getBudget = (userId) => {
  return axios.get(
    `https://${process.env.REACT_APP_BACKENDURL}/api/budget/${userId}`
  );
};
