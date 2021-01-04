import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
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
