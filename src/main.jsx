import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import './assets/styles/main.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-826wm82jyl1s8tys.us.auth0.com"
    clientId="IJMXcKDAU03DBF3pnoxJ1E7r3CM9HASn"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/index'
    }}
  >
    <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
