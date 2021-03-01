import 'reflect-metadata';

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';

import {persistor, store} from '@Store/index';
import AppNavigator from '@Navigation/index';

// TODO: Create styled components theme to use all colors, fonts... and use Provider styled

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
