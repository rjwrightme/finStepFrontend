import React, { useState, useLayoutEffect } from "react";
import Router from "./components/Router";
import "./App.css";
import axios from "axios";
import "@fontsource/rubik";

const App = () => {
  const [userState, setUserState] = useState({
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
        setUserState(res.data);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router isAuthenticated={userState.isAuthenticated} />
    </div>
  );
};

export default App;
