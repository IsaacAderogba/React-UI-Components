import React from "react";
import "./Button.css";

export default function ButtonSymbols(props) {
  // props data
  const { buttonSymbols, symbolStyle, headerTotal, updateTotal } = props;

  // container styles
  const styleContainer = {
    display: "flex",
    flexWrap: "wrap"
  };

  // symbol styles
  const style = {
    width: "100%",
    height: "90px",
    fontSize: symbolStyle.fontSize,
    fontWeight: symbolStyle.fontWeight,
    background: symbolStyle.background,
    color: symbolStyle.color
  };

  function evaluate(fn) {
    return new Function("return " + fn)();
  }

  const clickHandler = event => {
    let symbolInput = event.target.textContent;

    // if user presses x, substitute with *
    if (symbolInput === "×") {
      return updateTotal(headerTotal + "*");
    }

    // if user presses ÷, substitute with /
    if (symbolInput === "÷") {
      return updateTotal(headerTotal + "/");
    }

    // if user press =, then total and return the value
    if (symbolInput === "=") {
      return updateTotal(evaluate(headerTotal));
    }

    return updateTotal(headerTotal + symbolInput);
  };

  // render
  return (
    <div style={styleContainer}>
      {buttonSymbols.map(symbol => (
        <button onClick={clickHandler} key={symbol} style={style}>
          {symbol}
        </button>
      ))}
    </div>
  );
}
