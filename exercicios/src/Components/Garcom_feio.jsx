import React from 'react'
import { useState } from 'react'
import './Garcom_feio.css'
function Garcom_feio() {
const [resultado, setResultado] = useState()


function calcularSalario(){

    salarioNum = Number(prompt('Digite seu salario'));
    numPrestacoesNum = Number(prompt('Digite o numero de prestações'));
    valorEmprestimoNum = Number(prompt('Digite o valor do emprestimo'));

    let prestacaoMensal = valorEmprestimoNum / numPrestacoesNum;
    let limitePrestacao = salarioNum * 30;

    
if (prestacaoMensal <= limitePrestacao) {
  setResultado('Empréstimo pode ser concedido.');}

    else if(prestacaoMensal >limitePrestacao){
setResultado('Nao é possivel fazer')
    }
 else {
  setResultado('Empréstimo não pode ser concedido.');
}
}

  return (
    <div className='Garcom-veio-container'>
      <h2>Emprestimo empregados</h2>
       
    <button onClick={calcularSalario}>Calcular</button>

      <div>
         {resultado}
      </div>

    </div>
  )
}

export default Garcom_feio
