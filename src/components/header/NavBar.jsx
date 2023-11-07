import '../../assets/styles/NavBar.css'
import { useAuth0 } from "@auth0/auth0-react";
import icon from '../../assets/images/icon.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function NavBar() {

  const { logout } = useAuth0();

  const [navBarButton, setNavBarButton] = useState('')
  const [navBarList, setNavBarList] = useState('')

    return (
      <div className='navbar'>
      <Link className='navbar-logo' to='/index'><img to='/index'  src={icon} alt="logo jump zone" /></Link>
        <ul className={`navbar-list ${navBarList}`}>
          <li><a href='/index'>Home</a></li>
          <li><a href='/index/about'>About</a></li>
          <li><a href='/index/contact'>Contact</a></li>
        </ul>
        <button className='logout-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log out
    </button>
    <button className={navBarButton} onClick={()=>{setNavBarButton('navbar-menu-shower'), setNavBarList('show')}}><i className="fa-solid fa-bars"></i></button>
      </div>
    )
}
export default NavBar
