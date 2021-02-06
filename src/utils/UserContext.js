import React, { createContext, useReducer, useContext } from "react";
import {
  UPDATE_USER,
  LOGOUT,
  LOADING,
  COMPLETE,
  UPDATE_EMAIL,
} from "./actions";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (userState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...userState,
        ...action.payload,
      };

    case LOGOUT:
      return {
        isAuthenticated: false,
        firstName: "",
        lastName: "",
        email: "",
        id: "",
        loading: false,
      };

    case UPDATE_EMAIL:
      return {
        ...userState,
        email: action.payload,
      };

    case LOADING:
      return {
        ...userState,
        loading: true,
      };

    case COMPLETE:
      return {
        ...userState,
        loading: false,
      };

    default:
      return userState;
  }
};

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    loading: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
