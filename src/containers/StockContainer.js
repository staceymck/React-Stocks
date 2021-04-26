import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  sortStocks = (stocks, property) => {
    return stocks.sort((a,b) => {
      if (a[property] > b[property]) {
        return 1;
      }
      if (a[property] < b[property]) {
        return -1;
      }
      return 0;
    })
  }

  displayStocks = () => {
    let stocks = this.props.stocks.slice()
    if (this.props.filter) {
      stocks = this.props.stocks.filter(s => s.type === this.props.filter)
    }

    if (this.props.sortBy === "alpha") {
      stocks = stocks.sort((a,b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
    }

    if (this.props.sortBy === "price") {
      stocks = this.sortStocks(stocks, "price")
    }
    return stocks
  }

  render() {

    return (
      <div>
        <h2>Stocks</h2>
        {this.displayStocks().map(stock => <Stock key={stock.id} stock={stock} onClick={this.props.onClick} />)}
      </div>
    );
  }

}

export default StockContainer;
