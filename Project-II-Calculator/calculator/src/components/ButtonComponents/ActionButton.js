import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";
import ButtonSymbols from "./ButtonSymbols";

export default function ActionButton(props) {
    // props data
  const { actionText, buttonStyle, headerTotal, updateTotal } = props;

  // style for overall container
  const container = {
    width: "100%",
    display: "flex"
  };

  // style for action button container
  const actionContainer = {
    width: "25%"
  };

  // style for button text container
  const textContainer = {
    width: "75%"
  };

  // style for "0" button text
  const style = {
    width: "100%",
    height: "90px",
    fontSize: buttonStyle.fontSize,
    fontWeight: buttonStyle.fontWeight,
    background: buttonStyle.background,
    color: buttonStyle.color
  };

  // style for "clear" button text
  const clearStyle = {
    width: "100%",
    height: "90px",
    fontSize: buttonStyle.fontSize,
    background: buttonStyle.background,
    color: buttonStyle.color
  };

  const clearClickHandler = () => {
      updateTotal('0');
  }

  const zeroClickHandler = () => {
      updateTotal(headerTotal + 0)
  }

  // render the following, passing props down as necessary
  return (
    <div style={container}>
      <div style={textContainer}>
        <button onClick={clearClickHandler} style={clearStyle}>{actionText.clear}</button>
        <NumberButton numbertext={props.numbertext} buttonStyle={buttonStyle} />
        <button onClick={zeroClickHandler} style={style}>{actionText.zero}</button>
      </div>
      <div style={actionContainer}>
        <ButtonSymbols
          symbolStyle={props.symbolStyle}
          buttonSymbols={props.buttonSymbols}
        />
      </div>
    </div>
  );
}
