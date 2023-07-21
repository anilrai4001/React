import React from 'react';
import PropTypes from 'prop-types';

import { Component } from 'react'

export default class Card2 extends Component {


  constructor(props){
    super(props);

    this.initialStock = this.props.stock;


    this.state = {
      stockCount : this.props.stock
    }
    this.updateStock = ()=>{
      this.state.stockCount--;
      this.setState({
        stockCount : this.state.stockCount
      })
      console.log(this.state.stockCount);
    }

    this.resetStock = ()=>{
      this.setState({
        stockCount : this.initialStock
      })
      console.log(this.initialStock);
    }
  };

  

  render() {
    return (
      <div style={{ width: '18rem' , border: '2px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{this.props.title}</h1>
        <h2>price: ${this.props.price}</h2>
        <h2>stock left: {this.state.stockCount}</h2>
        <p><button onClick={this.updateStock}>ADD TO CART</button></p>
        <p><button onClick={this.resetStock}>Reset Stock</button></p>
      </div>
    )
  }
}




Card2.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number
}

Card2.defaultProps = {
  title: "sample product",
  price: 0,
  stock: 0
}

