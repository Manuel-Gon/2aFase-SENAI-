import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros712() {
    const [inputNumero, setInputNumero] = useState ('')
    const[contagem,setContagem] = useState (0)
    const [mostrarResultado, setMostrarResultado] = useState(false)
function lerNumero(){

   if(inputNumero > 100 && inputNumero <200)
  setContagem(contagem + 1)

}
function renderizaResultado(){
    setMostrarResultado(true)
}
  return (
    <div>
       <Navbar/>
      <h1>Exercicios 7.12</h1>

      <input type="text" value={inputNumero} onChange={(event) => setInputNumero(event.target.value)}  />
      
      <button onClick={lerNumero}>Ler</button>
      <button onClick={ renderizaResultado}>RESULTADO</button>
      
        { mostrarResultado && <>
        <div>
        <p>Numeros na faixa de 100 a 200: {contagem} </p>
        </div>
        </>         
        }
    </div>
  )
}

export default Numeros712
