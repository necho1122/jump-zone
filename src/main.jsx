import ReactDOM from 'react-dom/client'
import './assets/styles/main.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { WelcomePage } from './components/WelcomePage';
import SamplicioContainer from './components/SamplicioContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-826wm82jyl1s8tys.us.auth0.com"
    clientId="IJMXcKDAU03DBF3pnoxJ1E7r3CM9HASn"
    cacheLocation="memory"
    authorizationParams={{
      redirect_uri: 'https://jump-zone-app.vercel.app'
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/index" element={<App />} />
        <Route path="/samplicio" element={<SamplicioContainer />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
)