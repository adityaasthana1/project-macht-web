import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Switch, Route } from "react-router-dom";
import Teams from "./Pages/Teams/Teams"

ReactDOM.render(

  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/teams" component={Teams}></Route>
      </Switch>
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-
