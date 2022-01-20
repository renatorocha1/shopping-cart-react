import React from "react"
import Proptypes from "prop-types"
import * as S from "./styled"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const CartItem = ({ item, handleDelete, parsePrice, sumItem }) => {
  return (
    <S.Container>
      <S.ProductCartName>{item.name}</S.ProductCartName>
      <S.ProductCartPrice><strong>Price:</strong> {parsePrice(item.price)}</S.ProductCartPrice>
      <S.ProductCartQty>Qty: {item.qty}</S.ProductCartQty>
      <S.ProductCartTotal>Total: {sumItem(item)}</S.ProductCartTotal>
      <S.ProductCartBtn onClick={() => handleDelete(item)}>Remove item</S.ProductCartBtn>
    </S.Container>
  )
}

CartItem.propType = {
  item: Proptypes.object.isRequired,
  handleDelete: Proptypes.func.isRequired
}

export default withPriceFunc(CartItem)
