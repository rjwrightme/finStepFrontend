import React, { useState } from "react";
import Router from "./components/Router";
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
      <Router />
    </div>
  );
};

export default App;
