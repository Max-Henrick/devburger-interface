import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
  }
`

export const CardImg = styled.img`
  border-radius: 20px;
`

export const ProductName = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`

export const ProductPrice = styled.div`
  padding-top: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`
