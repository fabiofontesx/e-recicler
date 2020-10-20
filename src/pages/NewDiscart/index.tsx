import React, { useContext, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Alert } from 'react-native';
import Container from '../../components/Container';

import {
  Header,
  ButtonBack,
  HeaderText,
  Main,
  MaterialContainer,
  AmountContainer,
  AmountValue,
  PrimaryButton,
} from './styles';

import AmountButton from '../../components/AmountButton';
import CardMaterial from '../../components/CardMaterial';

import Vidro from '../../assets/vidro.svg';
import Plastico from '../../assets/plastico.svg';
import Papel from '../../assets/papel.svg';
import Metal from '../../assets/metal.svg';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../utils/percentToDp';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';

type MaterialNames = 'glass' | 'plastic' | 'metal' | 'paper';

const NewDiscart: React.FC = () => {
  const navigation = useNavigation();
  const { userData } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [ammount, setAmmount] = useState({
    glass: 0,
    plastic: 0,
    metal: 0,
    paper: 0,
  });

  const handleIncrementMaterialAmmount = (materialName: MaterialNames) => {
    setAmmount({
      ...ammount,
      [materialName]: ammount[materialName] + 100,
    });
  };

  const handleDecrementMaterialAmmount = (materialName: MaterialNames) => {
    if (ammount[materialName] > 0) {
      setAmmount({
        ...ammount,
        [materialName]: ammount[materialName] - 100,
      });
    }
  };

  const handleNewDiscart = async () => {
    const { email, _id } = userData;
    setLoading(true);
    try {
      const result = await api.put('/garbcollect', {
        _id,
        user: email,
        collected_garbage: ammount,
      });

      if (result.status === 200) {
        setAmmount({
          plastic: 0, glass: 0, paper: 0, metal: 0,
        });
        Alert.alert('Sucesso', 'Reciclagem salva com sucesso!');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
        'Erro ao realizar a reciclagem, tente novamente mais tarde',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const themeContext = useContext(ThemeContext);
  return (
    <Container>
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={themeContext.pallete.colors.text}
        />
      )}

      <Header>
        <ButtonBack onPress={handleGoBack}>
          <AntDesign
            name="arrowleft"
            size={28}
            color={themeContext.pallete.colors.text}
          />
        </ButtonBack>

        <HeaderText>
          {'Adicione os materiais para \n descarte (em gramas)'}
        </HeaderText>
      </Header>

      <Main>
        <MaterialContainer>
          <CardMaterial
            materialName="Vidro"
            icon={(
              <Vidro
                width={widthPercentageToDP('50%')}
                height={heightPercentageToDP('15%')}
              />
            )}
          />
          <AmountContainer>
            <AmountButton
              operation="remove"
              onPress={() => handleDecrementMaterialAmmount('glass')}
            />
            <AmountValue>{ammount.glass}</AmountValue>
            <AmountButton
              operation="add"
              onPress={() => handleIncrementMaterialAmmount('glass')}
            />
          </AmountContainer>
        </MaterialContainer>

        <MaterialContainer>
          <CardMaterial
            materialName="Plastico"
            icon={(
              <Plastico
                width={widthPercentageToDP('50%')}
                height={heightPercentageToDP('15%')}
              />
            )}
          />
          <AmountContainer>
            <AmountButton
              operation="remove"
              onPress={() => handleDecrementMaterialAmmount('plastic')}
            />
            <AmountValue>{ammount.plastic}</AmountValue>

            <AmountButton
              operation="add"
              onPress={() => handleIncrementMaterialAmmount('plastic')}
            />
          </AmountContainer>
        </MaterialContainer>

        <MaterialContainer>
          <CardMaterial
            materialName="Metal"
            icon={(
              <Metal
                width={widthPercentageToDP('50%')}
                height={heightPercentageToDP('15%')}
              />
            )}
          />
          <AmountContainer>
            <AmountButton
              operation="remove"
              onPress={() => handleDecrementMaterialAmmount('metal')}
            />
            <AmountValue>{ammount.metal}</AmountValue>

            <AmountButton
              operation="add"
              onPress={() => handleIncrementMaterialAmmount('metal')}
            />
          </AmountContainer>
        </MaterialContainer>

        <MaterialContainer>
          <CardMaterial
            materialName="Papel"
            icon={(
              <Papel
                width={widthPercentageToDP('50%')}
                height={heightPercentageToDP('15%')}
              />
            )}
          />
          <AmountContainer>
            <AmountButton
              operation="remove"
              onPress={() => handleDecrementMaterialAmmount('paper')}
            />
            <AmountValue>{ammount.paper}</AmountValue>
            <AmountButton
              operation="add"
              onPress={() => handleIncrementMaterialAmmount('paper')}
            />
          </AmountContainer>
        </MaterialContainer>
        <PrimaryButton label="Salvar" onPress={handleNewDiscart} />
      </Main>
    </Container>
  );
};

export default NewDiscart;
