import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider as ReduxProvider } from 'react-redux';
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';

import store from 'store';
import CoinsList from 'scenes/CoinsList';
import NotFound from 'scenes/NotFound';
import CoinDetails from 'scenes/CoinDetails';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }
  
  body {
    background: #DCDCDD;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#DCDCDD',
      ligth: '#F5F5F5',
    },
    secondary: {
      main: '#4C5C68',
    },
  },
};

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="description" content="Cryptocurrency track dashboard" />
          <title>Crypto Track</title>
        </Helmet>
        <Switch>
          <Route exact component={NotFound} path="/not-found" />
          <Route exact component={CoinsList} path="/" />
          <Route exact component={CoinDetails} path="/coins/:coin" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
