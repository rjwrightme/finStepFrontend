import React from "react";

const UserContext = React.createContext({
  isAuthenticated: false,
  firstName: "",
  lastName: "",
  email: "",
  id: "",
});

export default UserContext;
