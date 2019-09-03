import React, { Component } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "../components/SearchBar"

class MainContainer extends Component {
  state = { 
    stocks: [], 
    portfolio: [],
    sort: ''
  }

  handleRadioToAlphabetically = () => {
    this.setState({ sort: 'Alphabetically' })
  }
  handleRadioToPrice = () => {
    this.setState({ sort: 'Price' })
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
        this.setState({ stocks: data }, () => {
          //  HERE IS WHERE YOU WANT TO CONSOLE LOG CHANGED AND UPDATED STATE
          // console.log('RANDOM', this.state)
        })
      })
  }

  addToPortfolio = (stock) => {
    console.log('CLICK', stock)
    if (!this.state.portfolio.includes(stock)) {
      const newArray = [...this.state.portfolio, stock]
      this.setState({portfolio: newArray}, () => {
        console.log(this.state.portfolio)
      })
    } else {
      console.log('think its already yours')
    }
  }

  removeFromPortfolio = (stock) => {
    if (this.state.portfolio.includes(stock)) {
      const newArray = this.state.portfolio.filter(stockObject => stock !== stockObject)
      this.setState({ portfolio: newArray }, () => {
        console.log(this.state.portfolio)
      })
    }
  }

  sortStocks = () => {
    if (this.state.sort === 'Alphabetically') {
      return this.state.stocks.slice().sort((a,b) => a.ticker.localeCompare(b.ticker))
    } else {
      return this.state.stocks
    }
  }
  
  render() {
    // this works
    // console.log('potentially sorted stocks', this.sortStocks())
    // rendwer is called after CDM and after setstate is finished
    console.log('MAIN CONTAINER STATE: ', this.state)
    return (
      <div>
        <SearchBar 
          sort={this.state.sort}
          handleRadioToAlphabetically={this.handleRadioToAlphabetically}
          handleRadioToPrice={this.handleRadioToPrice}
        />

        <div className="row">
          <div className="col-8">
            
            <StockContainer
              stocks={this.sortStocks()}
              addToPorfolio={this.addToPortfolio}
            />

          </div>

          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              removeFromPortfolio={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
