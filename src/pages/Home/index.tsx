import React, { useCallback, useContext, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Alert } from 'react-native';
import { ThemeContext } from 'styled-components';
import CardInfo from '../../components/CardInfo';

import Container from '../../components/Container';
import Logo from '../../components/Logo';

import { WelcomeText, PrimaryButton, Main } from './styles';

import Lixeira from '../../assets/lixeira.svg';
import Dolar from '../../assets/dolar.svg';
import Luminaria from '../../assets/luminaria.svg';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';
import { currencyFormat } from '../../utils/formaters';

interface IRGetResum {
  energy_spent: number;
  total_earned: number;
  total_recicled: number;
}

const Home = ():JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const { userData } = useAuth();
  const navigation = useNavigation();
  const [userGarbageResum, setUserGarbageResum] = useState<IRGetResum>(
    {} as IRGetResum,
  );
  const [isLoading, setLoading] = useState(false);
  const goToNewDiscart = () => {
    navigation.navigate('NewDiscart');
  };

  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        try {
          setLoading(true);
          const response = await api.get<IRGetResum>(
            `prices/user/${userData?.email}`,
          );
          setUserGarbageResum(response.data);
        } catch (error) {
          Alert.alert(
            'Erro ao buscar resumo',
            'Sistema idisponível, tente novamente mais tarde',
          );
        } finally {
          setLoading(false);
        }
      };
      loadData();
    }, [userData?.email]),
  );

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator
          size="large"
          color={themeContext.pallete.colors.text}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Logo />
      <Main>
        <WelcomeText>Bem Vindo!</WelcomeText>

        <CardInfo
          title="Total Reciclado"
          icon={<Lixeira width={24} height={24} />}
          bodyText={`${userGarbageResum.total_recicled / 1000} KG`}
        />
        <CardInfo
          title="Valor Arrecadado"
          icon={<Dolar width={24} height={24} />}
          bodyText={currencyFormat(userGarbageResum.total_earned)}
        />
        <CardInfo
          title="Energia Gasta"
          icon={<Luminaria width={24} height={24} />}
          bodyText={`${userGarbageResum.energy_spent} W`}
        />

        <PrimaryButton label="Novo Descarte" onPress={goToNewDiscart} />
      </Main>
    </Container>
  );
};

export default Home;
