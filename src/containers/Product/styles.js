import styled from 'styled-components'

export const Container = styled.div``

export const ProductImg = styled.img`
  width: 100%;
`

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  font-size: 17px;
  line-height: 20px;
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  padding-bottom: 5px;
`
