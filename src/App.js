import React, { useReducer } from "react";
import Router from "./components/Router";
import "./App.css";
import UserContext from "./utils/UserContext";
import "@fontsource/rubik";

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { isAuthenticated: true };
    case "logout":
      return { isAuthenticated: false };
    default:
      return state;
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

  return (
    <div className="App">
      <UserContext.Provider value={dispatch}>
        <Router />
      </UserContext.Provider>
    </div>
  );
};

export default App;
