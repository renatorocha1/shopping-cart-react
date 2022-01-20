import styled from "styled-components"

export const Container = styled.div`
  background: #dde2e9;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Title = styled.h1`
  font-size: 1.4em;
  border-bottom: 1px solid #dfe2e8;
  margin: 20px 0px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
`
export const IconWrapper = styled.div`
  fill: #dfe2e8;
  width: 30px;
  height: 30px;
`
export const TotalCart = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 0px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
export const TotalCartLabel = styled.p`
  font-size: 0.9em;
  font-weight: 400;
`
export const TotalCartPrice = styled.p`
  font-size: 1.2em;
  font-weight: 700;
`
