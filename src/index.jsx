// This is the entry point file where you render your root component 
// (typically App.jsx) into a specific DOM node in your index.html file. 

/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css' */

/* const React = require('react');
const ReactDOM = require('react-dom/');
const App = require('./components/App.jsx');
require('./index.css');



ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(App)
) */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> <App /> </React.StrictMode> );