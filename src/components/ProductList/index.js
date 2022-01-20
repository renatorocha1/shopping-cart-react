import React from "react"
import * as S from "./styled"
import { Store } from "@styled-icons/boxicons-regular"

const ProductList = ({ children }) => {
  return (
    <>
      <S.Title>
        Products
        <S.IconWrapper>
          <Store />
        </S.IconWrapper>
      </S.Title>
      <S.Container>{children}</S.Container>
    </>
  )
}

export default ProductList
