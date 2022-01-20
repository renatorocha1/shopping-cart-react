import React, { useContext } from "react"
import { CartContext } from "./../context/cart"
import CartProducts from "../components/CartProducts"
import CartItem from "../components/CartItem"
import ProductList from "../components/ProductList"
import ProductItem from "../components/ProductItem"

function Home() {
  const { products, cart, totalCart, addProductToCart, removeProductFromCart } =
    useContext(CartContext)

  return (
    <main className="container">
      <div className="col">
        <ProductList>
          {products.map((item, index) => (
            <ProductItem
              key={index}
              id={index}
              item={item}
              handleAdd={addProductToCart}
            />
          ))}
        </ProductList>
      </div>
      <div className="col">
        <CartProducts totalCart={totalCart}>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              handleDelete={removeProductFromCart}
            />
          ))}
        </CartProducts>
      </div>
    </main>
  )
}

export default Home
