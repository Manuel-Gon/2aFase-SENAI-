import React, { useState } from 'react';

const CalculadoraDeVenda = () => {
  const [valorCompra, setValorCompra] = useState('');
  const [valorVenda, setValorVenda] = useState(null);

  const calcularValorVenda = () => {
    const valor = parseFloat(valorCompra);
    
    if (isNaN(valor) || valor < 0) {
      alert('Por favor, insira um valor válido.');
      return;
    }

    let lucro;
    if (valor < 20) {
      lucro = 0.45; // 45%
    } else {
      lucro = 0.30; // 30%
    }

    const venda = valor + (valor * lucro);
    setValorVenda(venda.toFixed(2));
  };

  return (
    <div>
      <h1>Calculadora de Venda</h1>
      <input
        type="number"
        placeholder="Valor de compra"
        value={valorCompra}
        onChange={(e) => setValorCompra(e.target.value)}
      />
      <button onClick={calcularValorVenda}>Calcular Valor de Venda</button>

      {valorVenda !== null && (
        <h2>Valor de Venda: R$ {valorVenda}</h2>
      )}
    </div>
  );
};

export default CalculadoraDeVenda;
