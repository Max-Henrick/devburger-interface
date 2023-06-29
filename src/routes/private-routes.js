import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header, Footer } from '../components'

function PrivateRoutes({ component, isAdmin, ...props }) {
  const user = localStorage.getItem('devburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Route {...props} component={component} />
      {!isAdmin && <Footer />}
    </>
  )
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool
}
