import { Outlet } from 'react-router-dom'
import NavBar from './components/header/NavBar'
import './assets/styles/App.css'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
