import Dashboard from "pages/Dashboard";
import ForgotPassword from "pages/ForgotPassword";
import Login from "pages/Login";

const routesName = [
  {
    routeType: "public",
    path: "/",
    element: Dashboard,
    exact: true,
  },
  // {
  //   routeType: "public",
  //   path: "/forgot-password",
  //   element: ForgotPassword,
  //   exact: true,
  // },
  {
    routeType: "public",
    path: "/dashboard",
    element: Dashboard,
    exact: true,
  },
];

export default routesName;
