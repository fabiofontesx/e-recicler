import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import NewDiscart from '../pages/NewDiscart';

const Stack = createStackNavigator();

const AuthenticatedStack = ():JSX.Element => (
  <Stack.Navigator headerMode="none" initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="NewDiscart" component={NewDiscart} />
  </Stack.Navigator>
);

export default AuthenticatedStack;
