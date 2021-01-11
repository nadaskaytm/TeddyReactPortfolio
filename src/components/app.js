import React, { Component } from 'react';
import moment from "moment";

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



export default class App extends Component {
  render() {
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  } 
}
