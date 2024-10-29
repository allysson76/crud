import React, { useState } from 'react';
import FormularioItem from './components/FormularioItem';
import ListaItens from './components/ListaItens';
import './styles/App.css';
import logoGames from './styles/assets/logo_games.png';

function App() {
  const [itens, setItens] = useState([]);
  const [estaEditando, setEstaEditando] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(null);

  const aoAdicionarItem = (novoItem) => {
    setItens([...itens, novoItem]);
  };

  const aoRemoverItem = (indice) => {
    const novaLista = itens.filter((_, i) => i !== indice);
    setItens(novaLista);
  };

  const aoEditarItem = (indice) => {
    setIndiceAtual(indice);
    setEstaEditando(true);
  };

  const aoAtualizarItem = (novoItem) => {
    const novaLista = itens.map((item, i) => (i === indiceAtual ? novoItem : item));
    setItens(novaLista);
    setEstaEditando(false);
    setIndiceAtual(null);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logoGames} alt="logo das marcas legais de jogo" className="logo_games"/>
       </div>
      <h1>Compra de Jogos</h1>
      <FormularioItem
        aoAdicionarItem={aoAdicionarItem}
        estaEditando={estaEditando}
        itemAtual={estaEditando ? itens[indiceAtual] : ''}
        aoAtualizarItem={aoAtualizarItem}
      />
      <ListaItens itens={itens} aoRemoverItem={aoRemoverItem} aoEditarItem={aoEditarItem} />
    </div>
  );
}

export default App;