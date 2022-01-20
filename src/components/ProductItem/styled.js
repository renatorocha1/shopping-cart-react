import styled from "styled-components"

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ProductName = styled.h1`
  font-size: 1.2em;
`
export const ProductPrice = styled.span`
  font-size: 0.9em;
  font-weight: 500;
`
export const ProductBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #278dff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`
export const ProductBtnIcon = styled.span`
  width: 20px;
  height: 20px;
`
