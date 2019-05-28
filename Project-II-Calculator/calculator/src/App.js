import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents"

const arrayOfButtonNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
const arrayOfButtonSymbols = ['÷', '×', '−', '+', '='];

const actionText = {
  clear: "clear",
  zero: "0"
};

const buttonStyle = {
  fontSize: "30px",
  fontWeight: "bold",
  background: "transparent",
  color: "black"
};

const buttonSymbols = {
  fontSize: "40px",
  fontWeight: "bold",
  background: "darkred",
  color: "white"
};

const App = () => {
  const style = {
    maxWidth: "456px",
    margin: "0 auto",
    border: "1px solid red"
  };

  return (
    <div style={style}>
      <ActionButton
        actionText={actionText}
        buttonStyle={buttonStyle}
        numbertext={arrayOfButtonNumbers}
        symbolStyle={buttonSymbols}
        buttonSymbols={arrayOfButtonSymbols}
      />
    </div>
  );
};

export default App;
