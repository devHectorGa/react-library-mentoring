import React from "react";
import { render } from "react-dom";
import { Tabs, Greeting, useLocalStorage } from "react-components";

export const App = () => {
  const [value] = useLocalStorage({ key: "Greeting" });

  return (
    <>
      <Tabs>
        <Tabs.Tab label="Tab1">
          <Greeting />
          <p>{value}</p>
        </Tabs.Tab>
        <Tabs.Tab label="Tab2">
          <p>Content Tab 2</p>
        </Tabs.Tab>
        <Tabs.Tab label="Tab3"></Tabs.Tab>
      </Tabs>
    </>
  );
};

render(<App />, document.getElementById("app"));
