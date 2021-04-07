import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import CoinsList from 'scenes/CoinsList';
import NotFound from 'scenes/NotFound';
import CoinDetails from 'scenes/CoinDetails';

const App = () => (
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
);

export default App;
