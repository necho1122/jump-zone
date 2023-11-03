import '../../assets/styles/NavBar.css'
import { useAuth0 } from "@auth0/auth0-react";
import icon from '../../assets/images/icon.png'
import { Link } from 'react-router-dom'

function NavBar() {

  const { logout } = useAuth0();

  

    return (
      <div className='navbar'>
      <Link className='navbar-logo' to='/index'><img to='/index'  src={icon} alt="logo jump zone" /></Link>
        <ul>
          <li><a href='/index'>Home</a></li>
          <li><a href='/index/about'>About</a></li>
          <li><a href='/index/contact'>Contact</a></li>
        </ul>
        <button className='logout-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log out
    </button>
      </div>
    )
}
export default NavBar