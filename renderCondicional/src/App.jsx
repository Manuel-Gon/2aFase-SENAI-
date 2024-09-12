import { useState } from 'react'
import './App.css'
import Amoeba from './pages/Amoeba'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Render from './pages/Render'

function App() {
const [pagina, setPagina] = useState(<Home />)

function mostrarPagina(){
setPagina (<Home />)

}
 
  return (
    <>
     
     <nav>

   <button onClick={mostrarPagina}>Home</button>

   <button onClick = {() => {setPagina (<Amoeba />)}}>Amoeba</button>

   <button onClick = {() => {setPagina (<Contato />)}}>Contato</button>


   <button onClick = {() => {setPagina (<Render />)}}>Render</button>

     </nav>

   {pagina}



    </>
  )
}

export default App
