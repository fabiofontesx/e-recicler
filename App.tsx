import React, { useEffect, useState } from 'react';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { useFonts } from 'expo-font'
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme/global';
import * as Updates from 'expo-updates'
import AuthProvider, { useAuth } from './src/contexts/AuthContext';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Alert } from 'react-native';
import Container from './src/components/Container';

const Text = styled.Text`
  fontSize: 18px
  color: ${props => props.theme.pallete.colors.text}
  marginTop: 4px
`
const App = () => {
  const { isAppLoading } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);

  let [fontsLoadded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  useEffect(() => {
    const updateApp = async () => {
      try {
        const { isAvailable } = await Updates.checkForUpdateAsync();

        if (isAvailable) {
          Alert.alert('Atenção', 'Uma nova atualização foi encontrada, deseja atualizar ?', [
            {
              text: 'Sim',
              onPress: async () => {
                setIsUpdating(true);
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
              }
            },
            {
              text: 'Não'
            }
          ], {
            cancelable: true
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
    updateApp();
  }, []);

  if (!fontsLoadded || isAppLoading || isUpdating) {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <ActivityIndicator size="large" color={theme.pallete.colors.text} />
          {isUpdating && <Text>Atualizando aguarde...</Text>}
        </Container>
      </ThemeProvider>
    )
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;