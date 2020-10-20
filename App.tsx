import React, { useEffect } from 'react';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme/global';
import * as Updates from 'expo-updates'
import AuthProvider, { useAuth } from './src/contexts/AuthContext';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import Container from './src/components/Container';

const App = () => {
  const {isAppLoading} = useAuth();

  let [fontsLoadded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  useEffect(() => {
    const updateApp = async () => {
      try{
        const {isAvailable} = await Updates.checkForUpdateAsync();
        if(isAvailable){
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }catch(err){
        console.error(err);
      }
    }
    updateApp();
  }, []);

  if (!fontsLoadded || isAppLoading) {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <ActivityIndicator size="large" color={theme.pallete.colors.primary}/>
        </Container>
      </ThemeProvider>
    )
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