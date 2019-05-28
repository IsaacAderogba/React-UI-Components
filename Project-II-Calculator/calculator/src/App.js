import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

// Calculator Data
const headerTotal = "0";
const arrayOfButtonNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
const arrayOfButtonSymbols = ["÷", "×", "−", "+", "="];
const actionText = { clear: "clear", zero: "0" };

// Calculator Header Style
const headerStyle = {
  fontSize: "70px",
  fontWeight: "300",
  background: "#222222",
  color: "white"
};

// Calculator  Button Style
const buttonStyle = {
  fontSize: "40px",
  fontWeight: "bold",
  background: "transparent",
  color: "black"
};

// Calculator Button Symbols
const buttonSymbols = {
  fontSize: "50px",
  fontWeight: "600",
  background: "darkred",
  color: "white"
};



const App = () => {
  const style = {
    maxWidth: "456px",
    margin: "0 auto",
    border: "1px solid lightgrey"
  };

  return (
    <div style={style}>
      <CalculatorDisplay headerStyle={headerStyle} headerTotal={headerTotal} />
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
