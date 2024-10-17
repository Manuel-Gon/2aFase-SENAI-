
import React, { useState } from 'react';

const TempoViagem = () => {
  const [distancia, setDistancia] = useState();
  const [tempo, setTempo] = useState(null);

  const calcularTempo = (distancia) => {

    const velocidade = 60;
    const tempoSegundos = (distancia / velocidade) * 3600; 
    return tempoSegundos;
  };

  const formatarTempo = (tempoSegundos) => {
    if (tempoSegundos >= 30 * 24 * 3600) {
      return `${Math.floor(tempoSegundos / (30 * 24 * 3600))} meses`;
    }
    if (tempoSegundos >= 365 * 24 * 3600) {
      return `${Math.floor(tempoSegundos / (365 * 24 * 3600))} anos`;
    }
    if (tempoSegundos >= 24 * 3600) {
      return `${Math.floor(tempoSegundos / (24 * 3600))} dias`;
    }
    if (tempoSegundos >= 3600) {
      return `${Math.floor(tempoSegundos / 3600)} horas`;
    }
    if (tempoSegundos >= 60) {
      return `${Math.floor(tempoSegundos / 60)} minutos`;
    }
    if(tempoSegundos < 60 )
    return `${Math.floor(tempoSegundos)} segundos`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tempoSegundos = calcularTempo(distancia);
    setTempo(formatarTempo(tempoSegundos));
  };

  return (
    <div className='Estrela-container'>
      <h1>Calcular Tempo de Viagem</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Distância (km):
          <input
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(e.target.value)}
            min="0"
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {tempo && <p>Tempo de viagem: {tempo}</p>}
    </div>
  );
};

export default TempoViagem;
