import styled from "styled-components"

export const Container = styled.div`
  background-color: #f5f6fd;
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
`
export const TotalCart = styled.div`
  background-color: #e8edf4;
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
`
