import React from 'react'
import { useState } from 'react'
import './Media.css'

function Media() {
    const [resultado, setResultado] = useState()


function calcularMedia(){
    let nota1 = Number(prompt("Digite a nota 1: "))
    let nota2 = Number(prompt("Digite a nota 2: "))
    let media = (nota1 + nota2) / 2

setResultado(media)
}


  return (
    <div className='Media-container'>
        <h2>Exercicio para calcular media de 2 numeros</h2>
       <button onClick={calcularMedia}>Calcular</button>
       <div>
       Media: {resultado}
       </div>
    

    </div>
  )
}

export default Media
