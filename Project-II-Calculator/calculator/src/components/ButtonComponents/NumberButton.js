import React from "react";
import "./Button.css";

export default function NumberButton(props) {
  const { text, buttonStyle } = props;

  const styleContainer = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: '75%'
  };

  const style = {
    width: "33%",
    height: '90px',
    fontSize: buttonStyle.fontSize,
    fontWeight: buttonStyle.fontWeight,
    background: buttonStyle.background,
    color: buttonStyle.color

  };

  return (
    <div style={styleContainer}>
      {text.map(number => (
        <button key={number} style={style}>
          {number}
        </button>
      ))}
    </div>
  );
}
