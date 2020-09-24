import React from 'react';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme/global';

import AuthProvider from './src/contexts/AuthContext';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  let [fontsLoadded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoadded) {
    return null;
  }


  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>

    </ThemeProvider>
  );
}

export default App;