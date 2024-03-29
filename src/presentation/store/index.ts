import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import * as middlewares from './middlewares';

import {LOGOUT} from './auth/types';

import app from './app/reducer';
import auth from './auth/reducer';
import user from './user/reducer';
import pins from './pins/reducer';

import {intitSagas} from './sagas/initSagas';

const reducers = combineReducers({
  app,
  auth,
  user,
  pins,
});

const rootReducer = (state: any, action: any) => {
  const newState = action.type === LOGOUT ? {config: state.config} : state;
  return reducers(newState, action);
};

const persistConfig = {
  version: 1,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(
  persistedReducer,
  applyMiddleware(...Object.values(middlewares)),
);

export let persistor = persistStore(store);

intitSagas();
