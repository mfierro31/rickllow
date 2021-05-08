import React from "react";
import Home from "./Home";
import Account from "./Account";
import Listings from "./Listings";
import { Route, Switch, Redirect } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      <Route exact path="/listings">
        <Listings />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;