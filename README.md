# Site de Filmes StreamFlix

## Descrição
O projeto consiste em um teste técnico para preenchimento de vaga de instrutor na Vai Na Web. O site de filmes StreamFlix foi construído em React e integrado com o backend, [API-StreamFlix](https://github.com/jefersonssant/api-streamflix), desenvolvido em Node.js por este desenvolvedor.

## Funcionalidades
Ao acessar o site a homepage será preenchida com filmes oriundos da requisição direta com o backend. São três categoria de filmes, quais sejam, **Filmes de Terror**, **Filmes de Ação** e **Filmes de Ficção**, a lógica foi desenvolvida para as categorias aparecerem apenas quando houver filmes. Cada filme terá dois botões: "**Assistir**" e "**+ Minha Lista**", ao clicar em "Assistir" surgirá a categoria **Continuar Assistindo** com o filme escolhido, ao clicar em "+ Minha Lista" o filme vai para a página/rota **Minha Lista** que consiste nos seus favoritos. A página/rota **Filmes** listará todos os filmes oriundos do backend. Na rota **Séries** foi desenvolvida página de ***erro 404 - Página Não Encontrada***, vez que não se incluirão séries. Na rota **Configurações** contém um formulário para inserir novos filmes, ou seja, será feita uma requisição POST com o backend.

## Organização de componentes e páginas
Um componente pode ser reaproveitado e customizado, exemplo, componente Categoria, Videocard, Botão e Input, que além do uso de sass-scss foi utilizado alguns estilos e propriedades através de props para a personalização em componentes e páginas distintas. A requisição/dados é inicializado em App.jsx, um arquivo hierarquicamente superior, e passados por props para que, assim, todos os componente filhos tenham acesso as dados.

## Deploy Vercel
A implementação do site foi feita no Vercel, link:
[StreamFlix]()

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
Alternativa:

```bash
npm start
```
## Imagem do Projeto
<img width="1920" height="2923" alt="screencapture-localhost-5173-2025-09-03-10_25_07" src="https://github.com/user-attachments/assets/744e6441-22ec-46dc-87e6-90cb633f03b6" />


## Autor
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/133176621?v=4" width=115><br><sub text-decoration="none">Jeferson Santos</sub>](https://github.com/jefersonssant) |
| :---: |

Qualquer contribuição é bem-vinda!😄
