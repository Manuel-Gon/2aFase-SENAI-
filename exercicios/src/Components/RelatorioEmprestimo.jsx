import React from 'react'

function RelatorioEmprestimo(props) {
  return (
    <div>

<p></p>


      <p>relatorio do resultado da simulação: </p>
      <p>Resultado:{props.infos.situacao}</p>
 
 <p>Valor emprestimo: R${props.infos.emprestimo}</p>

 <p>Numero de prestações: {props.infos.prestacoes}</p>

 <p>Valor de cada prestacao: R${props.infos.prestacao}</p>

 <p>Valor limite da prestação: R${props.infos.maxPrestacao}</p>

    </div>
  )
}

export default RelatorioEmprestimo
