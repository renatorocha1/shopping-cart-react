import React from "react"
import * as S from "./styled"

import { withPriceFunc } from "../../HOCs/withPriceFunc"

const CartProducts = ({ children, totalCart, parsePrice }) => {
  return (
    <S.Container>
      {children}
      <S.TotalCart>
        <S.TotalCartLabel>Total order:</S.TotalCartLabel>
        <S.TotalCartPrice>{parsePrice(totalCart)}</S.TotalCartPrice>
      </S.TotalCart>
    </S.Container>
  )
}

export default withPriceFunc(CartProducts)
