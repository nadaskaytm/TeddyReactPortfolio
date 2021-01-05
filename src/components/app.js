import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./Portfolio/portfolio-container";
import NavigationContainer from "./navigation/Navigation-Container";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Teddy Nadaskay</h1>
        <h2>React Portfolio</h2>

        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
          <PortfolioContainer />
        </div>
      </div>
    );
  } 
}
