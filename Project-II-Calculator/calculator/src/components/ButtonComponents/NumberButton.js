import React from "react";
import "./Button.css";

export default function NumberButton(props) {
  const { numbertext, buttonStyle } = props;

  const styleContainer = {
    display: "flex",
    flexWrap: "wrap",
  };

  const style = {
    width: "33.3%",
    height: '90px',
    fontSize: buttonStyle.fontSize,
    fontWeight: buttonStyle.fontWeight,
    background: buttonStyle.background,
    color: buttonStyle.color
  };

  return (
    <div style={styleContainer}>
      {numbertext.map(number => (
        <button key={number} style={style}>
          {number}
        </button>
      ))}
    </div>
  );
}
