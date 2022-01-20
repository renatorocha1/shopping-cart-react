import React from "react"
import * as S from "./styled"
import { ShoppingBag } from "@styled-icons/boxicons-regular"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const CartProducts = ({ children, totalCart, parsePrice }) => {
  return (
    <>
      <S.Title>
        Shopping Cart
        <S.IconWrapper>
          <ShoppingBag />
        </S.IconWrapper>
      </S.Title>
      <S.Container>
        {children}
        <S.TotalCart>
          <S.TotalCartLabel>Total order:</S.TotalCartLabel>
          <S.TotalCartPrice>{parsePrice(totalCart)}</S.TotalCartPrice>
        </S.TotalCart>
      </S.Container>
    </>
  )
}

export default withPriceFunc(CartProducts)
