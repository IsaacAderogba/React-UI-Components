import React from "react";
import "./Button.css";

export default function ButtonSymbols(props) {
  const { buttonSymbols, symbolStyle } = props;

  const styleContainer = {
    display: "flex",
    flexWrap: "wrap",
  };

  const style = {
    width: "100%",
    height: '90px',
    fontSize: symbolStyle.fontSize,
    fontWeight: symbolStyle.fontWeight,
    background: symbolStyle.background,
    color: symbolStyle.color
  };

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
