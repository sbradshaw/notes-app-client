import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import NotFound from "./containers/NotFound";
import Settings from "./containers/Settings";
import Signup from "./containers/Signup";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute
        exact path="/"
        component={Home}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        exact path="/login"
        component={Login}
        appProps={appProps}
      />
      <UnauthenticatedRoute
        exact path="/signup"
        component={Signup}
        appProps={appProps}
      />
      <AuthenticatedRoute
        exact path="/notes/new"
        component={NewNote}
        appProps={appProps}
      />
      <AuthenticatedRoute
        exact path="/notes/:id"
        component={Notes}
        appProps={appProps}
      />
      <AuthenticatedRoute
        exact path="/settings"
        component={Settings}
        appProps={appProps}
      />
      { /* Catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
