import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Login } from "./Components/Login";
import Layout from "./layout";

export default function RouteConfig() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute component={protectedRoutes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
const protectedRoutes = () => {
  return (
    <Switch>
      <Route path={`/user`} component={Layout} />
    </Switch>
  );
};
