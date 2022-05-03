import React, { CSSProperties } from "react";
import { Carousel, Collapse } from "antd";

const contentStyle: CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const { Panel } = Collapse;

export const HomeContent = () => (
  <>
    <Carousel>
      <div>
        <p style={contentStyle}>1</p>
      </div>
      <div>
        <p style={contentStyle}>2</p>
      </div>
      <div>
        <p style={contentStyle}>3</p>
      </div>
    </Carousel>
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="This is panel header 1" key="1">
        <p>Lorem 1</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>Lorem 2</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>Lorem 3</p>
      </Panel>
    </Collapse>
  </>
);
