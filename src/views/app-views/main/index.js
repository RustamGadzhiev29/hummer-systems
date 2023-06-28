import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Main = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route
        path={`${match.url}/planner`}
        component={lazy(() => import(`./planner`))}
      />
      <Route
        path={`${match.url}/dashboard`}
        component={lazy(() => import(`./dashboard`))}
      />
      <Route
        path={`${match.url}/catalog`}
        component={lazy(() => import(`./catalog`))}
      />
      <Route
        path={`${match.url}/orders`}
        component={lazy(() => import(`./orders`))}
      />
      <Route
        path={`${match.url}/clients`}
        component={lazy(() => import(`./clients`))}
      />
      <Route
        path={`${match.url}/banners`}
        component={lazy(() => import(`./banners`))}
      />
      <Route
        path={`${match.url}/promocodes`}
        component={lazy(() => import(`./promocodes`))}
      />
      <Route
        path={`${match.url}/offlines`}
        component={lazy(() => import(`./offlines`))}
      />
      <Route
        path={`${match.url}/employees`}
        component={lazy(() => import(`./employees`))}
      />
      <Route
        path={`${match.url}/mailingList`}
        component={lazy(() => import(`./mailingList`))}
      />
      <Redirect from={`${match.url}`} to={`${match.url}/main`} />
    </Switch>
  );
};

export default Main;

