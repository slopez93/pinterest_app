import 'reflect-metadata';

import React from 'react';
import {StatusBar} from 'react-native';

import AppNavigator from './presentation/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </>
  );
};

export default App;
