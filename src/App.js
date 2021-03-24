import Home from './Pages/Home/Home';

import 'semantic-ui-css/semantic.min.css';
import "animate.css/animate.min.css";


import React, { Component } from 'react'
import Page from 'react-page-loading'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Page loader={"bar"} color={"#A9A9A9"} size={4}>
          <div className="App">
            <Home />
          </div>
        </Page>
      </div>
    )
  }
}