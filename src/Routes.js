import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute exact path="/" component={Home} appProps={appProps} />
      <AppliedRoute
        exact path="/login"
        component={Login}
        appProps={appProps}
      />
      <AppliedRoute
        exact path="/signup"
        component={Signup}
        appProps={appProps}
      />
      <AppliedRoute
        exact path="/notes/new"
        component={NewNote}
        appProps={appProps}
      />
      { /* Catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
