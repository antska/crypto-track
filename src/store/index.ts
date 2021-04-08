import { combineReducers, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

// Enable Redux DevTools in development only
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(rootReducer, composeEnhancers);

export default store;
