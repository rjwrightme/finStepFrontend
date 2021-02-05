import React from "react";

const UserContext = React.createContext({
  isAuthenticated: false,
  firstName: "",
  lastName: "",
  email: "",
  id: "",
  markLoggedIn: () => {
    this.isAuthenticated = true;
  },
  markLoggedOut: () => {
    this.isAuthenticated = false;
  },
});

export default UserContext;
