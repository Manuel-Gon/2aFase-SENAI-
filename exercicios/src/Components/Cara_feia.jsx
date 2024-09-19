import React from 'react'
import { useState } from 'react'
import './Cara_feia.css'
import RelatorioEmprestimo from './RelatorioEmprestimo'
function Cara_feia() {

const[inputSalario, setInputSalario]= useState ('')
const[inputEmprestimo, setInputEmprestimo]= useState ('')
const[inputPrestacoes, setInputPrestacoes]= useState ('')
const[stateRelatorio, setStateRelatorio] = useState('')

function analisarEmprestimo(){

let valorMaximoPrestacao = inputSalario * 0.3
let valorPrestacao = inputEmprestimo / inputPrestacoes

if(valorPrestacao < valorMaximoPrestacao){

    let infosRelatorio = {

        situacao: 'aprovado',
        maxPrestacao: valorMaximoPrestacao,
        prestacao: valorPrestacao,
        emprestimo: inputEmprestimo,
        prestacoes: inputPrestacoes

    }
setStateRelatorio(infosRelatorio)

}else{


    let infosRelatorio = {

        situacao: 'reprovado',
        maxPrestacao: valorMaximoPrestacao,
        prestacao: valorPrestacao,
        emprestimo: inputEmprestimo,
        prestacoes: inputPrestacoes

    }
    setStateRelatorio(infosRelatorio)
}


}


  return (
    <div className='garcom-container'>

        <label htmlFor="inpSalario">salario</label>
      <input type="text" id='inpSalario'
      
      value={inputSalario}
      onChange = {(event) => setInputSalario(event.target.value)}
      />

      <label htmlFor="inpEmprestimo">Valor emprestimo</label>
      <input type="text" id='inpEmprestimo'
      
      value={inputEmprestimo}
      onChange = {(event) => setInputEmprestimo(event.target.value)}
      
      />

      <label htmlFor="inpPrestacoes">Qtd de parcelas</label>
      <input type="text" id='inpPrestacoes'
      
      value={inputPrestacoes}
      onChange = {(event) => setInputPrestacoes(event.target.value)} 
      
      />

<button onClick={analisarEmprestimo}>Analisar emprestimo </button>

{stateRelatorio && <RelatorioEmprestimo  infos={ stateRelatorio } />}
    </div>
  )
}

export default Cara_feia
