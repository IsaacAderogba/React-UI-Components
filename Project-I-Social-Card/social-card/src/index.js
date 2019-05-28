import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// interactivity for footer icons
const icons = document.querySelectorAll('.footer-container i');

for(let i = 0; i < 3; i++) {
    icons[i].addEventListener('click', (event) => {
        let iconContainer = event.target.parentNode;
        let iconCount = iconContainer.childNodes[1];
    
        if(iconCount.textContent === '') {
            iconCount.textContent = 1;
        } else {
            iconCount.textContent = parseInt(iconCount.textContent) + 1;
        }
    });
}