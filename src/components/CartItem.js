import React from 'react'

const CartItem = ({CartItem}) => {
  return (
    <div className="collection-item">
      <div className="row">
        <div className="col-md-8">product.name</div>
        <div className="col-md-2">product.priceInCents / 100</div>
        <div className="col-md-2">product.quantity</div>
      </div>
    </div>
  )
}

export default CartItem
