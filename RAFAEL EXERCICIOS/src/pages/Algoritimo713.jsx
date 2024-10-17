import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Algoritimo713() {
    const[mostrarNumeros,setmostrarNumeros]= useState ('')

    if(mostrarNumeros)
  return (
    <div>
        <Navbar />
      <h1>Algoritimos gostosinhos</h1>


      <input type="text" />
      <button>Ler</button>


    </div>
  )
}

export default Algoritimo713
