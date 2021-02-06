import React, { useState, useEffect } from "react";
import axios from "axios";
import Responsive from "./Responsive";
import SideNav from "./SideNav";

const Finstep = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    axios.get("/api/user_data").then((res) => setProfile(res.data));
  }, []);
  return (
    <div>
      <Responsive displayIn={["Laptop", "Tablet"]}>
        <SideNav />
      </Responsive>
      <h1>It works!</h1>
      <p>First: {profile.firstName}</p>
      <p>Last: {profile.lastName}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default Finstep;
