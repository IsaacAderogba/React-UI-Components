import React from "react";
import "./Display.css";

export default function CalculatorDisplay(props) {
  // props data
  const { headerTotal, headerStyle } = props;

  // style for enclosing container
  const containerStyle = {
    background: headerStyle.background,
    border: "1px solid grey"
  };

  // style for text
  const style = {
    fontSize: headerStyle.fontSize,
    fontWeight: headerStyle.fontWeight,
    color: headerStyle.color,
    textAlign: "right",
    padding: "20px",
    margin: "0"
  };

  // render
  return (
    <div style={containerStyle}>
      <h1 style={style}>{headerTotal}</h1>
    </div>
  );
}
