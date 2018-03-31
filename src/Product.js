import React from 'react'
import CartContext from './CartContext'

const BuyButton = ({ isInCart, onClick }) => (
  <button className={`buy-button ${isInCart ? 'remove-from-cart' : ''}`} onClick={onClick}>
    { isInCart ? 'Remove from cart' : 'Add to cart' }
  </button>
)

const Product = ({ product }) => (
  <CartContext.Consumer>
    {({ productsInCart, addToCart, removeFromCart }) => {
      const isInCart = productsInCart.includes(product.id)

      return (
        <div className="product">
          <img src={product.image} className="product-image" alt={product.name} />
          <span className="product-name">{product.name}</span>
          <span className="product-price">{product.price}</span>
          <BuyButton
            isInCart={isInCart}
            onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product.id)}
          />
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Product
