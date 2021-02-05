import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Finstep from "./Finstep";
import NotFound from "./NotFound";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {props.isAuthenticated ? <Redirect to="/app" /> : <Welcome />}
        </Route>
        <Route exact path="/login">
          {props.isAuthenticated ? <Redirect to="/app" /> : <Login />}
        </Route>
        <Route exact path="/signup">
          {props.isAuthenticated ? <Redirect to="/app" /> : <Signup />}
        </Route>
        <Route exact path="/app">
          {props.isAuthenticated ? <Finstep /> : <Redirect to="/" />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
