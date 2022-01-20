import styled from "styled-components"

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ProductCartName = styled.h1`
  font-size: 1.2em;
`
export const ProductCartPrice = styled.span`
  font-size: 0.9em;
  font-weight: 500;
  color: #278dfd;
`
export const ProductCartQty = styled.span`
  font-size: 0.9em;
  font-weight: 500;
`
export const ProductCartTotal = styled.span`
  font-size: 0.9em;
  font-weight: 500;
`
export const ProductCartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ed8598;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`
export const ProductCartBtnIcon = styled.span`
  width: 25px;
  height: 25px;
`
