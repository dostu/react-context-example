import React, { Component } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import CartContext from './CartContext'
import products from './products.json'

class App extends Component {
  state = {
    products,
    productsInCart: []
  }

  addToCart = (productId) => {
    this.setState(prevState => ({ productsInCart: [...prevState.productsInCart, productId] }))
  }

  removeFromCart = (productId) => {
    this.setState(prevState => ({ productsInCart: prevState.productsInCart.filter(id => id !== productId) }))
  }

  render() {
    const { products, productsInCart } = this.state

    return (
      <div className="page">
        <CartContext.Provider value={{
          productsInCart,
          addToCart: (productId) => this.addToCart(productId),
          removeFromCart: (productId) => this.removeFromCart(productId)
        }}>
          <ProductList products={Object.values(products)} />
          <Cart products={productsInCart.map(id => products[id])} />
        </CartContext.Provider>
      </div>
    )
  }
}

export default App
