import React from "react";
import Router from "./components/Router";
import "./index.css";
import { UserProvider } from "./utils/UserContext";
import "@fontsource/rubik";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
};

export default App;
