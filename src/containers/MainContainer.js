import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    availableStocks: [],
    portfolio: [],
    filter: "",
    sortBy: ""
  }

  componentDidMount() {
    this.getStocks()
  }

  getStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => {
      this.setState({availableStocks: data})
    })
    .catch(error => console.log(error))
  }

  buyStock = (stock) => {
    const availableStocks = this.state.availableStocks.filter(s => s.id !== stock.id)
    this.setState(state => {
      return {
        availableStocks,
        portfolio: [...state.portfolio, stock]
      }
    })
  }

  sellStock = (stock) => {
    const portfolio = this.state.portfolio.filter(s => s.id !== stock.id)
    this.setState(state => {
      return {
        availableStocks: [...state.availableStocks, stock],
        portfolio
      }
    })
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    }, () => console.log(this.state.filter))
  }

  handleSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchBar onFilterChange={this.handleFilter} onSortChange={this.handleSort} sort={this.state.sortBy} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.availableStocks} onClick={this.buyStock} filter={this.state.filter} sortBy={this.state.sortBy} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} onClick={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
