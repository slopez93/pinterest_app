import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {isLoggedInSelector} from '../store/auth/selectors';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

function RootNavigation() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation;
