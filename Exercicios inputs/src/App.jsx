import { useState } from 'react'

import './App.css'
import DiaSemana from './components/DiaSemana'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <DiaSemana />
    </>
  )
}

export default App
