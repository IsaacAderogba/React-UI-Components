import React from "react";
import "./Button.css";

export default function ButtonSymbols(props) {
  // props data
  const { buttonSymbols, symbolStyle } = props;

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

  // render
  return (
    <div style={styleContainer}>
      {buttonSymbols.map(symbol => (
        <button key={symbol} style={style}>
          {symbol}
        </button>
      ))}
    </div>
  );
}
