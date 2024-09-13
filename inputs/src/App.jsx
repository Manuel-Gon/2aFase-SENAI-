import { useState } from 'react'

import './App.css'
import DeMaior from './components/DeMaior'
import Menor from './components/Menor'

function App() {
  const [inputIdade, setInputIdade] = useState()
  const[maior, setMaior] = useState(false)
  const[menor, setMenor] = useState(false)


  function processarIdade(){
  if(inputIdade >= 18){
   setMaior(true)
   setMenor(false)
  }else{
    setMenor(true)
    setMaior(false)
  }

}


  return (
    <>
    <h1>Inputs</h1> 


    Idade:<input type="number" className='formularios' 
    value={inputIdade}
    onChange = {(event) => {setInputIdade(event.target.value)}}
    />
<button onClick={processarIdade}>processar idade:</button>


{maior && <DeMaior />}
{menor && <Menor />}
    </>
  )
}

export default App
