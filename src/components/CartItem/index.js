import React from "react"
import Proptypes from "prop-types"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const CartItem = ({ item, handleDelete, parsePrice, sumItem }) => {
  return (
    <article>
      <h1>Product name: {item.name}</h1>
      <span>Price: {parsePrice(item.price)}</span>
      <span>Quantity: {item.qty}</span>
      <span>Total: {sumItem(item)}</span>
      <button onClick={() => handleDelete(item)}>Remove -</button>
    </article>
  )
}

CartItem.propType = {
  item: Proptypes.object.isRequired,
  handleDelete: Proptypes.func.isRequired
}

export default withPriceFunc(CartItem)
