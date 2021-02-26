import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../shared/config/routes';

import {LoginScreen} from '../screens';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.login} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
