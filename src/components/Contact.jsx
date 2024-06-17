import '../assets/styles/Contact.css';

function Contact() {
	return (
		<div className='contact'>
			<h2 id='get-in-touch'>Get in Touch</h2>
			<p>
				Are you interested in collaborating or have a project in mind? Whether
				you{"'"}re a potential client looking for a skilled developer or someone who
				shares the same passion for adventure, I{"'"}d love to hear from you!
			</p>
			<ul>
            <li>
					<strong>Email</strong>:{' '}
					<a href='mailto:necho.web.dev@gmail.com'>necho.web.dev@gmail.com</a>
				</li>
				<li>
					<strong>LinkedIn</strong>:{' '}
					<a href='https://www.linkedin.com/in/nelson-enrique-ubac-jimenez-6b1996118/'>
						Nelson Ubac
					</a>
				</li>
				<li>
					<strong>GitHub</strong>:{' '}
					<a href='https://github.com/necho1122'>Nelson Ubac (necho1122)</a>
				</li>
			</ul>
			<p className='thank-you'>
				Thank you for visiting JumpZone. Let{"'"}s make every day an adventure!
			</p>
		</div>
	);
}

export default Contact;
