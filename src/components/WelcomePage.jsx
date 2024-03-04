import logo from "../assets/images/logo-v1.1.png";
import "../assets/styles/WelcomePage.css";
import { useAuth0 } from "@auth0/auth0-react";

export function WelcomePage() {
	const { loginWithRedirect } = useAuth0();

	return (
		<div className="welcome-page">
			<div className="image-container">
				<img src={logo} alt="jump zone logo" />
			</div>
			<div className="welcome">
				<h1>Welcome to Jump Zone</h1>
				<ul>
					<li>
						<i className="fa-solid fa-play" /> Surveys hosts
					</li>
					<li>
						<i className="fa-solid fa-play" /> Easy search
					</li>
					<li>
						<i className="fa-solid fa-play" /> Other
					</li>
				</ul>
				<button
					type="button"
					className="button-gs"
					role="button"
					onClick={() => loginWithRedirect()}
				>
					Get Started
				</button>
			</div>
		</div>
	);
}
