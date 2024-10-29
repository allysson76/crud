import React from 'react';

function ListaItens({ itens, aoRemoverItem, aoEditarItem }) {
  return (
    <ul>
      {itens.map((item, indice) => (
        <li key={indice}>
          <span>{item}</span>
          <button onClick={() => aoEditarItem(indice)} className="botao-estilo2">Editar</button>
          <button onClick={() => aoRemoverItem(indice)} className="botao-estilo3">Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaItens;