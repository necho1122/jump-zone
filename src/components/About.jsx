import { useAuth0 } from "@auth0/auth0-react"

function About () {
    const { isLoading } = useAuth0()

    if (isLoading) {
        return <div>Loading...</div>
    } else {
  return (

    <div className='about'>
      <h1>About</h1>
      <p>
        This is a ReactJS application that uses the <a href='https://www.samplicio.us/'>Samplicio.us</a> API to display a list of surveys.
      </p>
      <p>
        The application uses <a href='https://reactrouter.com/'>React Router</a> to manage the routes and <a href='https://react-bootstrap.github.io/'>React Bootstrap</a> to style the components.
      </p>
      <p>
        The application is hosted on <a href='https://www.netlify.com/'>Netlify</a> and the source code is available on <a href="" />
        </p>
    </div>
    )}
}

export default About