import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// interactivity for footer icons
const icons = document.querySelectorAll('.footer-container i');

icons[0].addEventListener('click', (event) => {
    let messageContainer = event.target.parentNode;
    let messageCount = messageContainer.childNodes[1];
    messageCount.textContent = parseInt(messageCount.textContent) + 1;
});

icons[1].addEventListener('click', (event) => {
    console.log('hello world');
})

icons[2].addEventListener('click', (event) => {
    console.log('hello world');
})

icons[3].addEventListener('click', (event) => {
    console.log('hello world');
})