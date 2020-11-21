import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './auth/reducer';

import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  // @ts-ignore
  saveState(store.getState());
});

export default store;
