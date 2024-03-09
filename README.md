# AC Countries
Acesse: [AC Countries](https://accountries.netlify.app/)

AC Countries é um projeto desenvolvido em React com TypeScript para consultar e apresentar informações sobre países utilizando a API RestCountries.

## Como Iniciar o Projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
 `git clone https://github.com/carvalhoandre/ac-countries`

2. **Instale as dependências:**
  `cd ac-countries`
  `npm i`

3. **Inicie o servidor de desenvolvimento:**
  `npm run dev`



4. **Acesse a aplicação no navegador:**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Resumo do Projeto

O projeto consome a API [RestCountries](https://restcountries.com/) para fornecer um sistema de busca e apresentação de informações sobre países. Utiliza tecnologias como React, TypeScript, Axios para requisições HTTP, React Router DOM para o roteamento, Styled Components para estilização, entre outras.

## Ilustrações

As ilustrações utilizadas no projeto foram obtidas de [undraw.co](https://undraw.co/illustrations).

## Dependências Principais

- **axios**: ^1.6.7
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.22.2
- **styled-components**: ^6.1.8
- **typescript**: ^5.2.2

## Dependências de Desenvolvimento

- **@types/react**: ^18.2.56
- **@typescript-eslint/eslint-plugin**: ^7.0.2
- **@typescript-eslint/parser**: ^7.0.2
- **eslint**: ^8.56.0
- **vite**: ^5.1.4

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o código TypeScript e cria uma versão otimizada para produção.
- `lint`: Executa o linter ESLint para verificar e corrigir problemas no código.
- `preview`: Inicia um servidor para visualizar a versão de produção localmente.

## Rotas

- `/`: Página inicial com o sistema de busca.
- `/all`: Lista todos os países.
- `/details/*`: Exibe informações detalhadas sobre um país específico.
- `/*`: Página de erro para rotas não encontradas.
