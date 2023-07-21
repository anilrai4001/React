import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Card({title,price,stock}) {
  let initialStock = stock;
  let [stockCount,setStockCount] =  useState(stock);

  function updateStock() {
    --stockCount;
    setStockCount(stockCount);
    console.log(stockCount);
  }

  function resetStock(){
    setStockCount(initialStock);
  }

  return (
    <div style={{ width: '18rem' , border: '2px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{title}</h1>
      <h2>price: ${price}</h2>
      <h2>stock left: {stockCount}</h2>
      <p><button onClick={updateStock}>ADD TO CART</button></p>
      <p><button onClick={resetStock}>Reset Stock</button></p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number
}

Card.defaultProps = {
  title: "sample product",
  price: 0,
  stock: 0
}

export default Card;