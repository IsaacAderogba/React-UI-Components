import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'


const arrayOfButtonNumbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

  const buttonStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'white',
    color: 'black'
  }

const App = () => {

  const style = {
    maxWidth: '456px',
    margin: '0 auto',
    border: '1px solid red'
  }
  


  return (
    <div style={style}>
    <NumberButton text={arrayOfButtonNumbers} buttonStyle={buttonStyle}/>
    </div>
  );
};

export default App;
