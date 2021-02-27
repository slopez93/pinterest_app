import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {isLoggedInSelector} from '../store/auth/selectors';

import {serviceLocator} from '../../shared/config/di';
import {INavigation} from '../../infrastructure/services/navigation';

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
  const navigation = serviceLocator.get<INavigation>('INavigation');
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigation.navigationRef} theme={MyTheme}>
        {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigation;
