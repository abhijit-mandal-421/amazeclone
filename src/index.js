import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalState } from './GlobalStates';
import  reducer, { initialState } from './Reducer';
import { BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
  <GlobalState initialState={initialState} reducer= {reducer}>
  <Router>
  <App />
  </Router>
  </GlobalState>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
