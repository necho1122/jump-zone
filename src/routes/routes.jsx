import { createBrowserRouter } from 'react-router-dom';
import { WelcomePage } from '../components/WelcomePage';
import Home from '../components/Home';
import App from '../App';
import Samplicio from '../components/hosts/Samplicio';
import About from '../components/About';
import ProtectedRoute from '../components/ProtectedRoute'; // Importa el componente ProtectedRoute

export const router = createBrowserRouter([
	{
		path: '/',
		element: <WelcomePage />,
	},
	{
		path: '/login',
		element: <div>Login</div>,
	},
	{
		path: '/register',
		element: <div>Register</div>,
	},
	{
		path: '/index',
		element: <App />,
		children: [
			{
				element: <ProtectedRoute />, // Protege las rutas hijas
				children: [
					{
						path: '/index',
						element: <Home />,
					},
					{
						path: '/index/about',
						element: <About />,
					},
					{
						path: '/index/contact',
						element: <div>Contact</div>,
					},
					{
						path: '/index/samplicio',
						element: <Samplicio />,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: (
			<div className='error-404'>
				<p>Error 404 - Page Not Found!</p>
			</div>
		),
	},
]);
