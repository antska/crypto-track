import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import store from 'store';
import Error from 'components/Error';
import CoinsList from 'scenes/CoinsList';
import CoinDetails from 'scenes/CoinDetails';
import { theme } from './constants';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }
  
  body {
    background: #DCDCDD;
    margin: 0;
    font-family: 'Avant Garde', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact component={Error} path="/not-found" />
          <Route exact component={CoinsList} path="/" />
          <Route exact component={CoinsList} path="/markets" />
          <Route exact component={CoinsList} path="/markets/:page" />
          <Route exact component={CoinDetails} path="/coins/:coin" />
          <Redirect exact from="/" to="/markets" />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
