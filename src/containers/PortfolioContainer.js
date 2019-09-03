import React, { Component } from "react"
import Stock from "../components/Stock"

class PortfolioContainer extends Component {
  render() {
    console.log('PORTFOLIO CONTAINER PROPS: ', this.props.portfolio)
    let stock = this.props.portfolio.map((stockObj, index) => {
      return (
        <Stock
          key={index}
          stock={stockObj}
          handleClick={this.props.removeFromPortfolio}
        />
      )
    })
    return (
      <div>
        <h2>My Portfolio</h2>
        {stock}
      </div>
    )
  }
}

export default PortfolioContainer
