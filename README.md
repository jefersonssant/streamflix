# Site de Filmes StreamFlix

## Descrição
O projeto consiste em um teste técnico para preenchimento de vaga de instrutor na Vai Na Web. O site de filmes StreamFlix foi construído em React e integrado com o backend, [API-StreamFlix](https://github.com/jefersonssant/api-streamflix), desenvolvido em Node.js por este desenvolvedor.

## Funcionalidades
Ao acessar o site a homepage será preenchida com filmes oriundos da requisição direta com o backend. São três categoria de filmes, quais sejam, **Filmes de Terror**, **Filmes de Ação** e **Filmes de Ficção**, a lógica foi desenvolvida para as categorias aparecerem apenas quando houver filmes. Cada filme terá dois botões: "**Assistir**" e "**+ Minha Lista**", ao clicar em "Assistir" surgirá a categoria **Continuar Assistindo** com o filme escolhido, ao clicar em "+ Minha Lista" o filme vai para a página/rota **Minha Lista** que consiste nos seus favoritos. A página/rota **Filmes** listará todos os filmes oriundos do backend. Na rota **Séries** foi desenvolvida página de ***erro 404 - Página Não Encontrada***, vez que não se incluirão séries. Na rota **Configurações** contém um formulário para inserir novos filmes, ou seja, será feita uma requisição POST com o backend.

### Responsividade
No modo tablet e mobile o perfil de usuário, preenchido com foto de Wandinha, assume o menu responsivo.

### Inserir novo filme
Na rota **Configurações** haverá um formulário para inserir novo filme no banco de dados. Observações: no input de Imagem você vai inserir um link de imagem de capa, diferente de banner. Já no imput de banner, o link da imagem será em um formato mais retangular, isso porque na categoria de **Continuar Assistindo** a imagem será a de banner de cada filme inserido, pois se comportará como se fosse o próprio vídeo/filme.

## Organização de componentes e páginas
Um componente pode ser reaproveitado e customizado, exemplo, componente Categoria, Videocard, Botão e Input, que além do uso de sass-scss foi utilizado alguns estilos e propriedades através de props para a personalização em componentes e páginas distintas. A requisição/dados é inicializado em App.jsx, um arquivo hierarquicamente superior, e passados por props para que, assim, todos os componente filhos tenham acesso aos dados.

## Deploy Vercel
A implementação do site foi feita no Vercel, link:
[StreamFlix](https://streamflix-tau.vercel.app/)

## Como rodar a aplicação localmente

1. Faça o clone do repositório:
```bash
git clone <LINK_DO_REPOSITÓRIO>
cd nome do projeto
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm run dev
```
## Tecnologias e dependências utilizadas

* <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
* <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React.js">
* <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router">
* <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SCSS SASS">
* <img src="https://img.shields.io/badge/Axios-%2320232a.svg?style=for-the-badge&logo=Axios&logoColor=%2361DAFB" alt="Axios">

## Imagem do Projeto
<img width="1920" height="2923" alt="screencapture-localhost-5173-2025-09-03-10_25_07" src="https://github.com/user-attachments/assets/744e6441-22ec-46dc-87e6-90cb633f03b6" />

## Autor
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/133176621?v=4" width=115><br><sub text-decoration="none">Jeferson Santos</sub>](https://github.com/jefersonssant) |
| :---: |

Qualquer contribuição é bem-vinda!😄
