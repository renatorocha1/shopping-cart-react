import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const ProductItem = ({ id, item, handleAdd, parsePrice }) => {
  return (
    <S.Container>
      <S.ProductName>{item.name}</S.ProductName>
      <S.ProductPrice>Price: {parsePrice(item.price)}</S.ProductPrice>
      <S.ProductBtn onClick={() => handleAdd(item, id)}>
        Add to cart
      </S.ProductBtn>
    </S.Container>
  )
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
}

export default withPriceFunc(ProductItem)
