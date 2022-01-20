import React from "react"
import Proptypes from "prop-types"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const ProductItem = ({ id, item, handleAdd, parsePrice }) => {

  return (
    <article>
      <p>ID: {item.id}</p>
      <h1>Product name: {item.name}</h1>
      <span>Price: {parsePrice(item.price)}</span>
      <button onClick={() => handleAdd(item, id)}>Add+</button>
    </article>
  )
}

ProductItem.propType = {
  id: Proptypes.number.isRequired,
  item: Proptypes.object.isRequired,
  handleAdd: Proptypes.func.isRequired
}

export default withPriceFunc(ProductItem)
