import React from "react"
import Proptypes from "prop-types"
import * as S from "./styled"
import { AddShoppingCart } from "@styled-icons/material-outlined"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const ProductItem = ({ id, item, handleAdd, parsePrice }) => {
  return (
    <S.Container>
      <S.ProductName>{item.name}</S.ProductName>
      <S.ProductPrice>Price: {parsePrice(item.price)}</S.ProductPrice>
      <S.ProductBtn onClick={() => handleAdd(item, id)}>
        Add to cart
        <S.ProductBtnIcon>
          <AddShoppingCart />
        </S.ProductBtnIcon>
      </S.ProductBtn>
    </S.Container>
  )
}

ProductItem.propType = {
  id: Proptypes.number.isRequired,
  item: Proptypes.object.isRequired,
  handleAdd: Proptypes.func.isRequired,
}

export default withPriceFunc(ProductItem)
