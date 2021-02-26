import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {isLoggedInSelector} from '../store/auth/selectors';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

function RootNavigation() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigation;
