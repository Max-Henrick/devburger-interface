import styled from 'styled-components'

import BackgroundImg from '../../assets/Backgroud-white.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const LoginImage = styled.img`
  height: 100%;
  width: 50%;
`

export const ContainerItens = styled.div`
  background: url(${BackgroundImg});
  background-size: cover;
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;

    button {
      margin-left: auto;
      margin-right: auto;
    }
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-top: 50px;
    margin-left: 140px;
  }

  img {
    width: 338px;
    height: 125px;
  }

  div {
    background-color: #373737;
    padding: 10px;
    border-radius: 20px;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 5px;
  padding-left: 5px;
`

export const Input = styled.input`
  background: #b5b5b5;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  padding-left: 5px;
  width: 338.42px;
  height: 38.32px;
`

export const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  a {
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  padding-top: 5px;
`
