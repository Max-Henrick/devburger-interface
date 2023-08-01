import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background-color: #3c3c3c;
    padding: 20px;
    border-radius: 10px;
  }

  button {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Label = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 5px;
  padding-left: 5px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: 25px;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
`
export const ButtonStyle = styled(Button)`
  margin-top: 25px;
  width: 100%;
`
