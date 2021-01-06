import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./Portfolio/portfolio-container";
import NavigationContainer from "./navigation/Navigation-Container";
import {
  BrowserRouter as  Router,
  Switch, 
  Route
} from 'react-router-dom';
import Home from "./Pages/home";
import About from "./Pages/about";




export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path ="/" component={Home} />
              <Route path ="/about-me" component={About} />
            </Switch>
          </div>
        </Router>
        
        <h1>Teddy Nadaskay</h1>

        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
          <PortfolioContainer />
        </div>
      </div>
    );
  } 
}
