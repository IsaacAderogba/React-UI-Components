import React from 'react';
import './Display.css';

export default function CalculatorDisplay (props) {
    const {headerTotal, headerStyle} = props;

    const containerStyle = {
        background: headerStyle.background,
        border: '1px solid grey'
    }

    const style = {
        fontSize: headerStyle.fontSize,
        fontWeight: headerStyle.fontWeight,
        color: headerStyle.color,
        textAlign: 'right',
        padding: '20px',
        margin: '0'
    }

    return (
      <div style={containerStyle}>
        <h1 style={style}>{headerTotal}</h1>
      </div>
    );
}