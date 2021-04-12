import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from 'store';
import Error from 'components/Error';
import CoinsList from 'scenes/CoinsList';
import CoinDetails from 'scenes/CoinDetails';
import localStore from 'utils/localStore';
import CustomThemeProvider from 'components/CustomThemeProvider';

const App = () => {
  store.subscribe(() => {
    const { global } = store.getState();

    localStore.saveState({ global });
  });

  return (
    <ReduxProvider store={store}>
      <CustomThemeProvider>
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
      </CustomThemeProvider>
    </ReduxProvider>
  );
};

export default App;
