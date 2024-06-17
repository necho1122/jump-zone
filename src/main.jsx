import ReactDOM from 'react-dom/client'
import './assets/styles/main.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import { WelcomePage } from './components/WelcomePage';
import SamplicioContainer from './components/SamplicioContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.AUTH0_DOMAIN}
    clientId={import.meta.env.AUTH0_CLIENT_ID}
    cacheLocation="memory"
    authorizationParams={{
      redirect_uri: 'https://jump-zone-app.vercel.app/index'
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