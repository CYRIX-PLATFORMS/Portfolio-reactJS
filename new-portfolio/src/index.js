import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import './App.css'

const root = ReactDOM.render(<App/> , document.getElementById('root'));

root.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
