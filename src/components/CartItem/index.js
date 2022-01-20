import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"
import { Delete } from "@styled-icons/material-twotone"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const CartItem = ({ item, handleDelete, parsePrice, sumItem }) => {
  return (
    <S.Container>
      <S.ProductCartName>{item.name}</S.ProductCartName>
      <S.ProductCartPrice>
        <strong>Price:</strong> {parsePrice(item.price)}
      </S.ProductCartPrice>
      <S.ProductCartQty>Qty: {item.qty}</S.ProductCartQty>
      <S.ProductCartTotal>Total: {sumItem(item)}</S.ProductCartTotal>
      <S.ProductCartBtn onClick={() => handleDelete(item)}>
        Remove item
        <S.ProductCartBtnIcon>
          <Delete />
        </S.ProductCartBtnIcon>
      </S.ProductCartBtn>
    </S.Container>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default withPriceFunc(CartItem)
