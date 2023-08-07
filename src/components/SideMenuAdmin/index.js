import React, { useState } from 'react'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ItemLink } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser()
  const [isActiveMenu, setIsActiveMenu] = useState(1)

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer
          key={item.id}
          isActiveMenu={isActiveMenu === item.id}
          onClick={() => {
            setIsActiveMenu(item.id)
          }}
        >
          <item.icon className="icon" />
          <ItemLink to={item.link}>{item.label}</ItemLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'fixed', bottom: 20 }}>
        <ExitToAppIcon style={{ color: '#ffffff' }} />
        <ItemLink to="/login" onClick={logout}>
          Sair
        </ItemLink>
      </ItemContainer>
    </Container>
  )
}
