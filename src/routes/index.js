import React from "react";
import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import _ from "lodash";
import { useSelector } from "react-redux";

import route from "./route";

import My404Component from "pages/My404Component";

import { AuthLayout, BasicLayout } from "components";

const Routes = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <Router>
      <WrapperRoutes>
        {_.map(_.filter(route, { routeType: "public" }), (val, key) => {
          const Component = val.element;
          return (
            <Route
              exact={true}
              key={key}
              path={val.path}
              element={
                <BasicLayout>
                  <Component />
                </BasicLayout>
              }
            />
          );
        })}
        {/* {_.map(_.filter(route, { routeType: "private" }), (val, key) => {
          const Component = val.element;
          return (
            <Route
              exact={true}
              key={key}
              path={val.path}
              element={
                token ? (
                  <BasicLayout>
                    <Component />
                  </BasicLayout>
                ) : (
                  <Navigate to={"/"} />
                )
              }
            />
          );
        })} */}
        <Route path="*" element={<My404Component />} />
      </WrapperRoutes>
    </Router>
  );
};

export default Routes;
