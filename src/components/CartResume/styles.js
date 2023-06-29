import styled from 'styled-components'

export const ContainerResume = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 60px;
    grid-template-areas:
      'cart-resume cart-resume'
      'cart-items price-items'
      'delivery-tax value-tax';

    .cart-resume {
      grid-area: cart-resume;
      margin-bottom: 20px;
    }

    .cart-items {
      grid-area: cart-items;
    }

    .price-items {
      grid-area: price-items;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .value-tax {
      grid-area: value-tax;
    }
  }

  .container-botton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    margin-top: 60px;
  }
`

export const Container = styled.div`
  margin-bottom: 30px;
`
