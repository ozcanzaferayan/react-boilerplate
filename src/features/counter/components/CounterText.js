import React from "react";

const CounterText = ({ text }) => {
  return <span style={style}>{text}</span>;
};

const style = {
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#fad000",
};

export default CounterText;
