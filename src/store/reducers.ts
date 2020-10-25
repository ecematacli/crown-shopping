import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  auth,
});

export default persistReducer(persistConfig, reducers);
