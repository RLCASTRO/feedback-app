import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
ReactDOM.render(

// Strict Mode activates some extra checks and warnings 
    <React.StrictMode> 
        <App />
    </React.StrictMode>, document.getElementById('root')
)