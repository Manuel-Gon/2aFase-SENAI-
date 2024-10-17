import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />

     <Logo />
 
     <Home />
    </>
  )
}

export default App
