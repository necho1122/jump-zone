import ReactDOM from 'react-dom/client';
import './assets/styles/main.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain={import.meta.env.VITE_AUTH0_DOMAIN}
		clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
		cacheLocation='memory'
		authorizationParams={{
			redirect_uri: 'https://jump-zone-app.vercel.app/index',
		}}
	>
		<RouterProvider router={router} />
	</Auth0Provider>
);
