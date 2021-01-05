import React, { Component} from "react";

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component{
    constructor(){
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio!",
            data: [ 
                {title: "USMC", category: "Military"}, 
                {title: "SAC Wireless", category: "Telecommunications"},
                {title: "BNSF", category: "Electronics"}
            ]
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

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        });

    }


    render() {
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
