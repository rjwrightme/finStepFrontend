import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import { FinStepProvider } from "../utils/FinStepContext";
import { getUserData } from "../utils/api";
import { UPDATE_USER } from "../utils/actions";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import Finstep from "./Finstep";
import NotFound from "./NotFound";

const Router = () => {
  const [userState, dispatch] = useUserContext();

  // check if the user is logged in. If so, update state with user data.
  useLayoutEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      return;
    }
    getUserData().then((res) => {
      if (res.data.isAuthenticated === true) {
        dispatch({ type: UPDATE_USER, payload: res.data });
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {userState.isAuthenticated ? <Redirect to="/app" /> : <Welcome />}
        </Route>
        <Route exact path="/login">
          {userState.isAuthenticated ? <Redirect to="/app" /> : <Login />}
        </Route>
        <Route exact path="/signup">
          {userState.isAuthenticated ? <Redirect to="/app" /> : <Signup />}
        </Route>
        <Route exact path="/app">
          {userState.isAuthenticated ? (
            <FinStepProvider>
              <Finstep />
            </FinStepProvider>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
