import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '@Shared/config/routes';

import {LoginScreen} from '@Screens/index';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
