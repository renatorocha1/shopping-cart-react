import React from "react"
import ReactDOM from "react-dom"
import App from "./pages"
import "./styles.css"
import { CartContextProvider } from "./context/cart"

ReactDOM.render(
  <CartContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartContextProvider>,
  document.getElementById("root")
)
