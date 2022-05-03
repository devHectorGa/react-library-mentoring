import React from "react";
import { MainRoutes, RouteProps } from "./routes.type";
import { About, Home } from "../pages";

export const routes: RouteProps = {
  [MainRoutes.HOME]: {
    element: <Home />,
  },
  [MainRoutes.ABOUT]: {
    element: <About />,
  },
};
