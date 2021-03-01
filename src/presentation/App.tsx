import 'reflect-metadata';

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {StatusBar} from 'react-native';

import {persistor, store} from './store';

import AppNavigator from './navigation';

// TODO: Create styled components theme to use all colors, fonts...

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
