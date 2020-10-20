import React from "react";
import { BrowserRouter as  Switch, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "../Dashboard";


import { Login } from "../Login";

export default function RouteConfig() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route path="*" component={() => <h2>404 Page Not Found!</h2>} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
