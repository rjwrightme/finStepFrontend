import React, { useState } from "react";
import Login from "./components/Login";
import "./App.css";
import "@fontsource/rubik";

const App = () => {
  const [userState, setUserState] = useState({
    isAuthenticated: false,
    loading: false,
    errors: {},
  });

  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
