// This is the entry point file where you render your root component 
// (typically App.jsx) into a specific DOM node in your index.html file. 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
