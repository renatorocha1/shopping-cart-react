import React from "react"
import * as S from "./styled"

const ProductList = ({ children }) => {
  return (
    <>
      <S.Title>Products</S.Title>
      <S.Container>{children}</S.Container>
    </>
  )
}

export default ProductList
