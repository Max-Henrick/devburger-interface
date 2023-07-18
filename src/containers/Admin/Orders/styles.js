import ReactSelect from 'react-select'

import styled from 'styled-components'

import BackgroundImg from '../../../assets/Backgroud-white.png'

export const Container = styled.div`
  background: url(${BackgroundImg});
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
  width: 80%;
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
  color: ${props => (props.isActiveStatus ? '#86b404' : '#ffffff')};
  cursor: pointer;
  border-bottom: ${props => props.isActiveStatus && '2px solid #86b404'};
  padding-bottom: 5px;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400px')};
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
  background-color: #373737;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 55vw;
  border-radius: 20px;
`
