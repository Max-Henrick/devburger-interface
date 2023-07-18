import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px #00000026;
  width: 20%;

  hr {
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  background: ${props => (props.isActive ? '#565656' : 'none')};
  height: 60px;
  display: flex;
  align-items: center;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`

export const ItemLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 10px;
`
