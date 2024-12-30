import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/Error";
import Home from "../Pages/Home";
import { createElement } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(App),
    errorElement: createElement(ErrorPage),
    children: [
      {
        index: true,
        element: createElement(Home),
      },
    ],
  },
]);
