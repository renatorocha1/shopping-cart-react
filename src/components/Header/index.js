import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Header = ({title}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
