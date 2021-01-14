import React, { Component} from "react";

import PortfolioItem from './portfolio-item';
import axios from 'axios';


export default class PortfolioContainer extends Component{
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio!",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
          data: this.state.data.filter(item => {
              return item.category === filter;
          })
        })
    }

    getPortfolioItems() {
        const axios = require('axios');
    
    axios.get("https://tnadaskay.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        console.log(error);
      });
      }

    portfolioItems() {
        return this.state.data.map(item => {
    
            return <PortfolioItem key={item.id} title={item.name} url={item.url} slug={item.id} />;
        });

    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        
        return(
            <div>
                <h2>{this.state.pageTitle}</h2>
            
                <button onClick={() => this.handleFilter("Military")>Military}>Military</button>
                <button onClick={() => this.handleFilter("Telecommunications")}>Telecommunications</button>
                <button onClick={() => this.handleFilter("Electronics")}>Electronics</button>

                {this.portfolioItems()}

            </div>
        );
    }
}
