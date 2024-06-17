import { createBrowserRouter } from 'react-router-dom';
import { WelcomePage } from '../components/WelcomePage';
import App from '../App';
import Samplicio from '../components/hosts/Samplicio';
import About from '../components/About';
import ProtectedRoute from './ProtectedRoute';
import Contact from '../components/Contact';

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
	},
	{
		path: '/index/about',
		element: <About />,
	},
	{
		path: '/index/contact',
		element: <Contact />,
	},
	{
		element: <ProtectedRoute />,
		children: [
			{
				path: '/index/samplicio',
				element: <Samplicio />,
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
