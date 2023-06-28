import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Settings = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route
        path={`${match.url}/planner`}
        component={lazy(() => import(`./logs`))}
      />
      <Route
        path={`${match.url}/dashboard`}
        component={lazy(() => import(`./general`))}
      />
      <Route
        path={`${match.url}/catalog`}
        component={lazy(() => import(`./mobileApp`))}
      />
      <Redirect from={`${match.url}`} to={`${match.url}/main`} />
    </Switch>
  );
};

export default Settings;

