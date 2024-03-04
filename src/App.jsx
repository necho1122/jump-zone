import { useAuth0 } from '@auth0/auth0-react';
import './assets/styles/Home.css'
import samplicio from './assets/images/samplicio.png'
import cint from './assets/images/cint.png'
import dynata from './assets/images/daynata.png'
import erewards from './assets/images/erewards.png'
import swagbucks from './assets/images/swagbucks.png'
import NavBar from './components/header/NavBar'

function App() {
	const { user, isAuthenticated } = useAuth0();

		return (
      <>
      <NavBar />
			<div className='home-container'>
			<div className='welcome-message'>
				{isAuthenticated ? (
					<h2>Welcome, {user.name}</h2>
				) : (
					<h2>Welcome, Guest</h2>
				)}
			</div>
            <div className="hosts-portals">
                <h2>Choose a Hosts</h2>
                <ul>
                    <li><a href="/samplicio"><img src={samplicio}/></a></li>
                    <li><a href=""><img src={cint}/></a></li>
                    <li><a href=""><img src={dynata}/></a></li>
                    <li><a href=""><img src={erewards}/></a></li>
                    <li><a href=""><img src={swagbucks}/></a></li>
                </ul>
            </div>

		</div>
    </>
		)
}

export default App;
