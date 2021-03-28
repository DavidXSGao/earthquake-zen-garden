import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../containers/Home";
import Detail from "../containers/Detail";
import Profile from "../containers/Profile";

/**
 * This component is responsible for managing the routing of this application
 *
 * @param {Object} data of the application passed around to other components
 */
export default function RouterSwitch({ data }) {
  const profileData = data.profile;
  const earthQuakeData = data.data;
  return (
    <Switch>
      <Route
        path="/"
        component={() => <Home earthQuakeData={earthQuakeData} />}
        exact
      />
      <Route
        path="/detail/:id"
        component={() => <Detail earthQuakeData={earthQuakeData} />}
        exact
      />
      <Route
        path="/profile/:id"
        component={() => <Profile profileData={profileData} />}
        exact
      />
      <Redirect to={"/"} />
    </Switch>
  );
}
