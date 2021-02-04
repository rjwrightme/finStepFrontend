import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Finstep from "./Finstep";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/app" component={Finstep} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
