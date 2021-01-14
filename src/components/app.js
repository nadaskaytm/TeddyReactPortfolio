import React, { Component } from 'react';
import moment from "moment";
import axios from 'axios';

import PortfolioContainer from "./Portfolio/portfolio-container";
import NavigationContainer from "./navigation/Navigation-Container";
import {
  BrowserRouter as  Router,
  Switch, 
  Route
} from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./Portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";


export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this. getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
    const axios = require('axios');

axios.get("https://tnadaskay.devcamp.space/portfolio/portfolio_items")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  }
  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
        <Router>
          <div>
            <div>
              <h1>Teddy Nadaskay Portfolio</h1>
  
              {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            <NavigationContainer />

            <Switch>
              <Route exact path ="/" component={Home} />
              <Route path ="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  } 
}
