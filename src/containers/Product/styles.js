import styled from 'styled-components'

import BackgroundImg from '../../assets/Backgroud-white.png'

export const Container = styled.div`
  background: url(${BackgroundImg});
  background-size: cover;
  min-height: 100vh;
`

export const ProductImg = styled.img`
  width: 100%;
`

export const ContainerItens = styled.div`
  background-color: #373737;
  height: 50px;
  width: 55vw;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 20px;
  border-radius: 50px;
`

export const CategoryButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #86b404'};
  font-size: 17px;
  line-height: 20px;
  color: ${props => (props.isActiveCategory ? '#86b404' : '#9a9a9d')};
  padding-bottom: 5px;
`

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`
