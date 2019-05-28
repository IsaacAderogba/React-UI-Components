import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";

export default function ActionButton(props) {
  const { actionText, buttonStyle } = props;

  const container = {
    maxWidth: "100%",
    display: 'flex'
  };

  const actionContainer = {
    maxWidth: "25%"
  };

  const textContainer = {
    maxWidth: "75%"
  };

  const style = {
    width: "100%",
    height: "90px",
    fontSize: buttonStyle.fontSize,
    fontWeight: buttonStyle.fontWeight,
    background: buttonStyle.background,
    color: buttonStyle.color
  };

  const clearStyle = {
    width: "100%",
    height: "90px",
    fontSize: buttonStyle.fontSize,
    background: buttonStyle.background,
    color: buttonStyle.color
  };

  return (
    <div style={container}>
      <div style={textContainer}>
        <button style={clearStyle}>{actionText.clear}</button>
        <NumberButton numbertext={props.numbertext} buttonStyle={buttonStyle} />
        <button style={style}>{actionText.zero}</button>
      </div>
      <div style={actionContainer}>
          hi
      </div>
    </div>
  );
}
