import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../containers/Home";
import Detail from "../containers/Detail";
import Profile from "../containers/Profile";

export default function RouterSwitch(props) {
  const profileData = props.data.profile;
  const earthQuakeData = props.data.data;
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
