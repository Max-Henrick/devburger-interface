import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 2px solid #b5b5b5;

  p {
    color: #b5b5b5;
    font-size: 16px;
  }
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 15px;
  padding: 15px;

  img {
    width: 120px;
    border-radius: 15px;
  }

  p {
    font-size: 16px;
  }

  .container-quantity {
    display: flex;
    gap: 15px;
    align-items: baseline;

    button {
      background: transparent;
      border: none;
      text-align: center;
      height: 20px;
      font-size: 23px;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.div``
