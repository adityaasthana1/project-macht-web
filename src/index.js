import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Switch, Route } from "react-router-dom";
import Teams from "./Pages/Teams/Teams"
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import fire from "./Scripts/Fire"
import AddProfile from './Pages/AddProfile/AddProfile';
import Productpage from "./Pages/ProductPage/Productpage";


const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

fire.init();


ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <HashRouter>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/teams" component={Teams}></Route>
          <Route exact path="/addprofile" component={AddProfile}></Route>
          <Route exact path="/product-:prod" component={Productpage}></Route>
        </Switch>

      </HashRouter>
    </ThemeProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-
