import React, { useState } from "react";
import Router from "./components/Router";
import "./App.css";
import UserContext from "./utils/UserContext";
import "@fontsource/rubik";

const App = () => {
  const [userState, setUserState] = useState({
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    email: "",
    id: "",
  });

  return (
    <div className="App">
      <UserContext.Provider value={userState}>
        <Router />
      </UserContext.Provider>
    </div>
  );
};

export default App;
