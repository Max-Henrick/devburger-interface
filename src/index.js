import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProveider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <AppProveider>
      <Routes />
    </AppProveider>
    <ToastContainer autoClose={3000} theme="colored" />
    <GlobalStyles />
  </>
)
