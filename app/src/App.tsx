import React, { useState } from "react";
import { render } from "react-dom";
import { Tabs } from "react-components";

export const App = () => {
  return (
    <Tabs>
      <Tabs.Tab label="Tab1">
        <p>Content Tab 1</p>
      </Tabs.Tab>
      <Tabs.Tab label="Tab2">
        <p>Content Tab 2</p>
      </Tabs.Tab>
      <Tabs.Tab label="Tab3">
        <p>Content Tab 3</p>
      </Tabs.Tab>
    </Tabs>
  );
};

render(<App />, document.getElementById("app"));
