import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header, Footer } from '../components'

function PrivateRoutes({ component, ...props }) {
  const user = localStorage.getItem('devburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <Route {...props} component={component} />
      <Footer />
    </>
  )
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
