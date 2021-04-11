import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import coin from './coin/reducer';
import markets from './markets/reducer';

export const rootReducer = combineReducers({ coin, markets });

export const history = createBrowserHistory();

export type RootState = ReturnType<typeof rootReducer>;

/* istanbul ignore next */
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

export default store;
