import React from "react";

const CounterContainer = (props) => {
  return <div style={style}> {props.children}</div>;
};

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  gap: "2rem",
};

export default CounterContainer;
