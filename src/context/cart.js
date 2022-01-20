import React, { useState, useEffect } from "react"

const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {
  const PRODUCTS_ARR = [
    {
      name: "Sledgehammer",
      price: 125.75,
    },
    {
      name: "Axe",
      price: 190.5,
    },
    {
      name: "Bandsaw",
      price: 562.13,
    },
    {
      name: "Chisel",
      price: 12.9,
    },
    {
      name: "Hacksaw",
      price: 18.45,
    },
  ]
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    const data = JSON.parse(saved)
    return data || []
  })
  const [totalCart, setTotalCart] = useState(0)
  const [products] = useState(PRODUCTS_ARR)

  const addProductToCart = (item, id) => {
    setCart((prevCart) => {
      const filtered = prevCart.filter((element) => {
        return element.id === id
      })
      if (filtered.length > 0) {
        return prevCart.map((element) => {
          if (element.id === id) {
            return {
              ...element,
              qty: element.qty + 1,
            }
          }
          return element
        })
      }

      const product = {
        ...item,
        id,
        qty: 1,
      }
      return [...prevCart, product]
    })
  }

  const removeProductFromCart = (item) => {
    setCart((prevCart) => {
      const filtered = prevCart.reduce((prev, curr) => {
        if (curr.id === item.id) {
          if (curr.qty > 1) {
            prev.push({
              ...curr,
              qty: curr.qty - 1,
            })
          }
        } else {
          prev.push(curr)
        }
        return prev
      }, [])
      return filtered
    })
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    const total = cart.reduce((subtotal, item) => {
      return subtotal + item.qty * item.price
    }, 0)
    setTotalCart(total)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        totalCart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContextProvider, CartContext }
