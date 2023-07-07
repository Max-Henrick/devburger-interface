import ReactSelect from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
  padding: 20px;
`

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStatus = styled(ReactSelect)`
  width: 200px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`
export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`
