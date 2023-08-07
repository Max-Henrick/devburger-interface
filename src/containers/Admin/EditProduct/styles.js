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
  min-width: 180px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
`
export const ButtonStyle = styled(Button)`
  margin-top: 25px;
  width: 100%;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;

  input {
    opacity: 0;
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  padding-left: 5px;
  margin-bottom: 20px;
`
