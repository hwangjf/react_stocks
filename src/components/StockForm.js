import React from 'react'

const StockForm = props => {
  state = {
    ticker: '',
    price: '',
    name: '',
    type: ''
  }
  return (
    <div>
      <form>
        <input type="text" onChange={props.handleChange} value={props.ticker} name="ticker" />
        <input type="text" onChange={props.handleChange} value={props.price} name="price" />
        <input type="text" onChange={props.handleChange} value={props.type} name="type" />
        <input type="text" onChange={props.handleChange} value={props.name} name="name" />
        <button type="submit">new Stock</button>
      </form>
    </div>
  )
}