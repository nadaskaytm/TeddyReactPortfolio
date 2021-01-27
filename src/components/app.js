import React, { Component } from 'react';

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
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      loggedIn: false
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this)
  }
  
  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
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
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />

            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route exact path ="/" component={Home} />
              
              <Route 
                path="/auth" 
                render={props=> (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />
                )}
              />
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
