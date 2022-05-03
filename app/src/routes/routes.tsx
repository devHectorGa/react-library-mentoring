import React from "react";
import { RouteProps, MainRoutes } from "react-components";
import { CustomHome } from "../pages";

export const routes: RouteProps = {
  [MainRoutes.HOME]: {
    element: <CustomHome />,
  },
};
