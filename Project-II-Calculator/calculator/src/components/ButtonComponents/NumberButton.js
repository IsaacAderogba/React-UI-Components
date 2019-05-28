import React from "react";
import "./Button.css";

export default function NumberButton(props) {
  // props data
  const { numbertext, buttonStyle, headerTotal, updateTotal } = props;

  // style for container
  const styleContainer = {
    display: "flex",
    flexWrap: "wrap"
  };

  // style for button text
  const style = {
    width: "33.3%",
    height: "90px",
    fontSize: buttonStyle.fontSize,
    fontWeight: buttonStyle.fontWeight,
    background: buttonStyle.background,
    color: buttonStyle.color
  };

  const clickHandler = (event) => {
    let numberInput = event.target.textContent;
    if(headerTotal === '0') {
        return updateTotal(numberInput);
    }
    return updateTotal(headerTotal + numberInput);
  };

  // render
  return (
    <div style={styleContainer}>
      {numbertext.map(number => (
        <button onClick={clickHandler} key={number} style={style}>
          {number}
        </button>
      ))}
    </div>
  );
}
