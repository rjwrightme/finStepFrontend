import React, { useReducer, useLayoutEffect } from "react";
import Router from "./components/Router";
import "./App.css";
import UserContext from "./utils/UserContext";
import axios from "axios";
import "@fontsource/rubik";

const reducer = (userState, action) => {
  switch (action.type) {
    case "updateUser":
      return (userState = action.payload);
    case "logout":
      return { isAuthenticated: false };
    default:
      return userState;
  }
};

const App = () => {
  const [userState, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  });

  // check if the user is logged in. If so, update state with user data.
  useLayoutEffect(() => {
    axios.get("/api/user_data").then((res) => {
      if (res.data.isAuthenticated === true) {
        dispatch({ type: "updateUser", payload: res.data });
      }
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={dispatch}>
        <Router isAuthenticated={userState.isAuthenticated} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
