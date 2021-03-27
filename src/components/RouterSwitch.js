import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../containers/Home";
import Detail from "../containers/Detail";
import Profile from "../containers/Profile";

export default function RouterSwitch(props) {
  return (
    <Switch>
      <Route path="/" component={() => <Home {...props} />} exact />
      <Route path="/detail" component={() => <Detail {...props} />} exact />
      <Route path="/profile" component={() => <Profile {...props} />} exact />
      <Redirect to={"/"} />
    </Switch>
  );
}
