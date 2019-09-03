import React, { Component } from "react"
import Stock from "../components/Stock"

class StockContainer extends Component {
  render() {
    console.log('STOCK CONTAINER PROPS: ', this.props)
    
    let stocks = this.props.stocks.map(stockObj => {
      return (
        <Stock
          key={stockObj.id}
          stock={stockObj}
          handleClick={this.props.addToPorfolio}
        />
      )
    })
    
    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    )
  }
}

export default StockContainer
