import React from 'react'
import { useState } from 'react'

function Meio_cheio() {

 const [resultado, setResultado] = useState()

 function processarNumero (){


    let numero = Number(prompt('Digite o numero'))

    if (numero >= 0 & numero % 2 == 0 ){
    setResultado('O resultado é positivo e par')

    }

    else if(numero > 0 ){
        setResultado('Seu numero é positivo')
    }

    else{
        
        setResultado('O seu numero é negativo ou zero')
    }
 
}
  return (

    
    <div className='Copo-container'>
      <h2>Digite um numero para decobrir se é positivo ou par😱 </h2>
      
        <button onClick={processarNumero}>Descobrir</button>
        <div>
          {resultado}
        </div>
    </div>
  )

  }

export default Meio_cheio
