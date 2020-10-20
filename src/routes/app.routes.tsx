import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const Stack = createStackNavigator();

const AppRoutes = (): JSX.Element => (
  <Stack.Navigator headerMode="none" initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AppRoutes;
