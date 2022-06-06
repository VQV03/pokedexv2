/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { ThemeProvider } from 'styled-components'; //Utilizei para criar as variaveis globais
import { createGlobalStyle } from 'styled-components'
import { theme } from './styles/theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  overflow-x: hidden !important;
}

img{
  max-width: 100%;
}

button{
  cursor: pointer;
}
`
//Fiz a componentizacao da melhor forma que encontrei, criando componentes para tudo que fosse se utilizado duas ou mais vezes, assim permitindo a escalabilidade do projeto a longo prazo.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
