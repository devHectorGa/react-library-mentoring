import React from "react";
import { render } from "react-dom";
import { App as MainApp } from "react-components";
import { routes } from "./routes";

export const App = () => {
  return <MainApp routes={routes} />;
};

render(<App />, document.getElementById("app"));
