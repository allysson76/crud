import React, { useState, useEffect } from 'react';

function FormularioItem({ aoAdicionarItem, estaEditando, itemAtual, aoAtualizarItem }) {
  const [valorEntrada, setValorEntrada] = useState('');

  useEffect(() => {
    if (estaEditando) {
      setValorEntrada(itemAtual);
    } else {
      setValorEntrada('');
    }
  }, [estaEditando, itemAtual]);

  const aoEnviarFormulario = (e) => {
    e.preventDefault();
    if (estaEditando) {
      aoAtualizarItem(valorEntrada);
    } else {
      aoAdicionarItem(valorEntrada);
    }
    setValorEntrada('');
  };

  return (
    <form onSubmit={aoEnviarFormulario} className="formulario">
      <input
        type="text"
        value={valorEntrada}
        onChange={(e) => setValorEntrada(e.target.value)}
        placeholder="Digite um novo jogo"
        className={`input-estilizado ${valorEntrada ? 'input-reduzido' : ''}`}
      />
      <button type="submit" className="botao-estilo1">
        {estaEditando ? 'Atualizar jogo' : 'Adicionar jogo'}
      </button>
      <button className="enviar" type="button">
        Enviar para Banco de Dados
      </button>
    </form>
  );
}

export default FormularioItem;