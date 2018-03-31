import React from 'react'
import CartContext from './CartContext'

const CartItem = ({ product }) => (
  <CartContext.Consumer>
    {({ removeFromCart }) => (
      <div className="cart-item">
        <span>{product.name}</span>
        <button class="remove-button" onClick={() => removeFromCart(product.id)} />
      </div>
    )}
  </CartContext.Consumer>
)

export default CartItem
