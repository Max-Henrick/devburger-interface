import styled from 'styled-components'

export const ContainerHeader = styled.div`
  background-color: #ffffff;
  height: 66px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 40px;
`

export const PageLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  cursor: pointer;
  color: ${props => (props.isActive ? '#bac324' : '#555555')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  border-bottom: ${props => (props.isActive ? '1px solid #bac324' : 'none')};
`

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div``

export const ExitLink = styled.a`
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  color: #bac324;
  cursor: pointer;
`

export const Line = styled.div`
  height: 50px;
  border: 1px solid #bababa;
`
