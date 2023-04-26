import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { AuthRoutes } from "./config/AuthRoutes";
import "./index.css";
import { home_cd_home, home_cd_test, pt_home, pt_test, root, test_cd_home, test_cd_test } from "./config/Routes";

export const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      <br />
      <ul>
        <li>
          <Link to={root}>{root}</Link>
        </li>
        <li>
          <Link to={pt_home}>/{pt_home}</Link>
          <ul>
            <li>
              <Link to={home_cd_test}>{home_cd_test}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={pt_test}>/{pt_test}</Link>
          <ul>
            <li>
              <Link to={test_cd_test}>{test_cd_test}</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    children: [
      {
        path: root,
        element: (
          <div>
            Hello world from <code>localhost/</code>!
          </div>
        ),
      },
      {
        path: pt_home,
        element: <AuthRoutes user={true} link="/" />,
        children: [
          {
            path: home_cd_home,
            element: (
              <div>
                Hello world from <code>localhost/{home_cd_home}</code>!
              </div>
            ),
          },
          {
            path: home_cd_test,
            element: (
              <div>
                Hello world from <code>localhost/{home_cd_test}</code>!
              </div>
            ),
          },
        ],
      },
      {
        path: pt_test,
        element: <AuthRoutes user={false} link="/" />,
        children: [
          {
            path: test_cd_home,
            element: (
              <div>
                Hello world from <code>leoneldc/{test_cd_home}</code>!
              </div>
            ),
          },
          {
            path: test_cd_test,
            element: (
              <div>
                Hello world from <code>leoneldc/{test_cd_test}</code>!
              </div>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
