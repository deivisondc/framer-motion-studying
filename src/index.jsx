import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/theme/default';
import GlobalStyle from './styles/global';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
