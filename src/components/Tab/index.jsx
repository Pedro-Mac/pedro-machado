import React from "react";

import "./Tab.scss";

const Tab = (props) => {
  return (
    <div
      className="Tab-Container"
      style={{ backgroundColor: props.stateTab === props.tab && "#1e2228" }}
    >
      <h3
        onClick={props.handleTab}
        style={{ color: props.stateTab === props.tab && "#1e2228" }}
      >
        {props.tabTitle}
      </h3>
    </div>
  );
};

export default Tab;
