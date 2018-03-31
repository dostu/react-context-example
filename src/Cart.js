import React from 'react'
import CartItem from './CartItem'

const Cart = ({ products }) => (
  <div className="cart">
    <span className="cart-heading">Shopping cart</span>

    <div className="cart-item-list">
      {products.length === 0 && 'No products in cart'}
      {products.map(product => <CartItem key={product.id} product={product} />)}
    </div>
  </div>
)

export default Cart
