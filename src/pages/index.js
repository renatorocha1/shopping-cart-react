import React, { useContext } from "react"
import { CartContext } from "./../context/cart"
import Header from "../components/Header"
import CartProducts from "../components/CartProducts"
import CartItem from "../components/CartItem"
import ProductList from "../components/ProductList"
import ProductItem from "../components/ProductItem"

function Home() {
  const { products, cart, addProductToCart, removeProductFromCart } = useContext(CartContext)

  return (
    <>
      <Header title="List Products" />
      <ProductList>
        {products.map((item, index) => (
          <ProductItem key={index} id={index} item={item} handleAdd={addProductToCart} />
        ))}
      </ProductList>
      <hr/>
      <Header title="Cart Products" />
      <CartProducts>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} handleDelete={removeProductFromCart} />
        ))}
      </CartProducts>
    </>
  )
}

export default Home
