import React from 'react'
import { useState } from 'react'

function Copo() {
    const [resultado, setResultado] = useState()
    
    
function processarNumero (){

    let numero = Number(prompt('Digite o numero'))
}  if (numero > 0)
  setResultado('O resultado é positivo')

  else if(numero < 0)
  setResultado("SEu numero é negativo")

  else 
  setResultado("Seu numero é zero")

  return (
    

    <div className='Copo-container'>
      <h2>Digite um numero para decobrir o que ele é</h2>
      
        <button onClick={processarNumero}>Descobrir</button>
    </div>
  )

  }
export default Copo

