import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../shared/config/routes';

import {HomeScreen, PinDetail, DiscoverDetail} from '../screens';

const Stack = createStackNavigator();

// TODO: Move styles in a shared navigation style object, NOT INLINE
const styles = {
  title: '',
  headerStyle: {
    backgroundColor: '#ededed',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
};

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.pinDetail}
        component={PinDetail}
        options={{
          ...styles,
        }}
      />
      <Stack.Screen
        name={routes.discoverDetail}
        component={DiscoverDetail}
        options={{
          ...styles,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
