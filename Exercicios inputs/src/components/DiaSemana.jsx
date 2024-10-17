import React from 'react'
import { useState } from 'react'

function DiaSemana() {
    const [semana,setSemana] = useState()

    function DescobrirDia(){
     
        switch(semana){

      case (semana) == "1":
      setSemana("Seu dia é domingo")
         
      
        

        }

    }
  return (
    <div>
      
      <h1>Bora descobrir o dia da semana?</h1>

      Coloque o dia: <input type="number" value={setSemana}
      onChange={(event) => {setSemana(event.target.value)}}   />

      <button onClick={DescobrirDia}>vamos lá</button>
    
    {semana}
    </div>
  )
}

export default DiaSemana
