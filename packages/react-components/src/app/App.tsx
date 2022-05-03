import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProps } from "./App.type";
import { routes as defaultRoutes } from "../routes";
import "antd/dist/antd.css";

export const App: FC<AppProps> = ({ routes }) => {
  const mergeRoutes = { ...defaultRoutes, ...routes };
  const routesElement = Object.entries(mergeRoutes).map(([path, props]) => (
    <Route key={path} path={path} {...props} />
  ));

  return (
    <BrowserRouter>
      <Routes>{routesElement}</Routes>
    </BrowserRouter>
  );
};
