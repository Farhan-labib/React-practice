import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {USComponent} from './USComponent';
import {Child1} from './Child1';
import {Child2} from './Child2';
import {Child3} from './Child3';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <USComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
