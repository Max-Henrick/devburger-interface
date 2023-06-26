import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: 60vw;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 15px;
  border-bottom: 2px solid #b5b5b5;

  p {
    color: #b5b5b5;
    font-size: 16px;
  }
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
    gap: 10px;
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

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`

export const Trash = styled.img`
  height: 20px;
  width: 20px;

  &:hover {
    opacity: 0.7;
  }
`

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 30px;
`
