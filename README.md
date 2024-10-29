# Documentação - Aplicativo de Compra de Jogos


<h3>Visão Geral</h3>

Este é um aplicativo em React para gerenciar uma lista de jogos que permite adicionar, editar, remover e enviar itens para um banco de dados (a ser implementado). Ele usa estados para controlar o conteúdo da lista e a exibição de formulários.

<h3>Estrutura do Projeto</h3>

<b>App.js</b>: Componente principal que controla o estado dos itens e renderiza o formulário de entrada e a lista de itens.<br>
<b>FormularioItem.js</b>: Componente de formulário para adicionar e atualizar jogos.<br>
<b>ListaItens.js</b>: Componente para listar, editar e remover jogos.<br>
<b>App.css</b>: Arquivo de estilo para o layout e design do aplicativo.<br>

<h3>Componentes</h3>

<b>1. App.js</b>
Este é o componente principal. Ele gerencia o estado dos itens (itens), o índice do item que está sendo editado (indiceAtual) e o modo de edição (estaEditando).

<b>Principais Estados</b>

<b>itens</b>: Um array que armazena a lista de jogos.<br>
<b>estaEditando</b>: Um booleano que define se um item está no modo de edição.<br>
<b>indiceAtual</b>: Índice do item que está sendo editado na lista.<br>

<b>Funções</b>

<b>aoAdicionarItem(novoItem)</b>: Adiciona um novo item à lista de jogos.<br>
<b>aoRemoverItem(indice)</b>: Remove um item da lista de jogos com base no índice.<br>
<b>aoEditarItem(indice)</b>: Ativa o modo de edição para o item selecionado.<br>
<b>aoAtualizarItem(novoItem)</b>: Atualiza o item selecionado com o novo valor e desativa o modo de edição.<br>

<b>JSX Renderizado</b>

Renderiza o FormularioItem, passando as funções de adição e atualização.<br>
Renderiza ListaItens, passando a lista de jogos e as funções para remover e editar itens.<br>

<b>2. FormularioItem.js</b>

Este componente é responsável por exibir o formulário para adicionar ou atualizar um jogo.

<h3>Props</h3>

<b>aoAdicionarItem</b>: Função para adicionar um novo item.<br>
<b>estaEditando</b>: Booleano que define se o formulário está no modo de edição.<br>
<b>itemAtual</b>: O valor atual do item a ser editado, usado para preencher o campo de entrada.<br>
<b>aoAtualizarItem</b>: Função para atualizar um item existente.<br>

<b>Principais Estados</b>

<b>valorEntrada</b>: Armazena o valor atual do campo de entrada.

<b>Funções</b>

<b>aoEnviarFormulario(e)</b>: Prevê o comportamento padrão do formulário, chama aoAdicionarItem ou aoAtualizarItem e limpa o campo de entrada após o envio.

<b>JSX Renderizado</b>

Um campo de entrada para adicionar ou atualizar o nome do jogo.
Botões para "Adicionar jogo" ou "Atualizar jogo" dependendo do modo (estaEditando).
Um botão adicional "Enviar para Banco de Dados" (simulação).

<b>3. ListaItens.js</b>

Este componente é responsável por listar todos os jogos na lista e exibir os botões de edição e remoção para cada item.

<b>Props</b>

<b>itens</b>: Array com os itens da lista.<br>
<b>aoRemoverItem</b>: Função para remover um item pelo índice.<br>
<b>aoEditarItem</b>: Função para iniciar o modo de edição de um item pelo índice.<br>

<b>JSX Renderizado</b>

Mapeia cada item da lista para exibir uma "li", com o nome do jogo e botões para editar e remover.

<b>Estilos (App.css)</b>

O arquivo App.css contém estilos para o layout e os elementos do aplicativo:

<b>Estilo Geral</b>: Centraliza o conteúdo e aplica um tema escuro ao fundo.<br>
<b>Classes de Botão</b>: Estilos de botões específicos com animação de hover e cores distintas.<br>
<b>Estilo Responsivo</b>: Ajusta o tamanho de entrada e botões para telas menores (abaixo de 600px).<br>

<b>Funcionalidades Futuras</b>

<b>Integração com Banco de Dados</b>: Configurar um backend para processar o envio de dados quando o botão "Enviar para Banco de Dados" for acionado.<br>
<b>Validação de Dados</b>: Adicionar validações no formulário de entrada para garantir que campos vazios não sejam adicionados.
