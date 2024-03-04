import '../../assets/styles/NavBar.css';
import { useAuth0 } from '@auth0/auth0-react';
import icon from '../../assets/images/icon.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
	const { logout } = useAuth0();

	const [navBarList, setNavBarList] = useState('');
	const [shower, setShower] = useState('shower');
	const [hidden, setHidden] = useState('');

	return (
		<div className='navbar'>
			<Link
				className='navbar-logo'
				to='/index'
			>
				<img
					to='/index'
					src={icon}
					alt='logo jump zone'
				/>
			</Link>
			<div className='navbar-list-item'>
				<div className={`navbar-list ${navBarList}`}>
					<ul className='navbar-list-ul'>
						<li>
							<a href='/index'>Home</a>
						</li>
						<li>
							<a href='/index/about'>About</a>
						</li>
						<li>
							<a href='/index/contact'>Contact</a>
						</li>
						<li>
						<button
						className='logout-button'
						onClick={() =>
							logout({ logoutParams: { returnTo: window.location.origin } })
						}
					>
						Log out
					</button>
						</li>
					</ul>
				</div>
				<button
					className={`navbar-menu-shower ${shower}`}
					onClick={() => {setNavBarList('show'), setHidden('hidden'), setShower('')}}
				>
					<i className='fa-solid fa-bars'></i>
				</button>
				<button
					className={`navbar-menu-hidden ${hidden}`}
					onClick={() => {setNavBarList(''), setHidden(''), setShower('shower')}}
				>
					<i className="fa-solid fa-x"></i>
				</button>
			</div>
		</div>
	);
}
export default NavBar;
