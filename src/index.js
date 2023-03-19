import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mijan from './Mijan'
import './App.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Counter = () => {
  return (
    <div>
      <h1 id='display'>0</h1>
      <div>
      <button id='button'>Increment</button>
      </div>
    </div>
  )
}

root.render(
  <React.StrictMode>
  
    {/* <App /> */}
    <Counter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const body = document.getElementById('root')
// const root = ReactDOM.createRoot(body)
// root.render('mijan')