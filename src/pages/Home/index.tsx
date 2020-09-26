import React  from 'react';
import CardInfo from '../../components/CardInfo';

import Container from '../../components/Container';
import Logo from '../../components/Logo';

import { WelcomeText, PrimaryButton, Main } from './styles';

import Lixeira from '../../assets/lixeira.svg';
import Dolar from '../../assets/dolar.svg';
import Luminaria from '../../assets/luminaria.svg';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
    const navigation = useNavigation();

    const goToNewDiscart = () => {
        navigation.navigate('NewDiscart');
    }

    return (
        <Container>
            <Logo />
            <Main>
                <WelcomeText>
                    Bem Vindo!
                </WelcomeText>

                <CardInfo
                    title="Total Reciclado"
                    icon={<Lixeira width={24} height={24}/>}
                    bodyText="20 KG"
                />
                <CardInfo
                    title="Valor Arrecadado"
                    icon={<Dolar width={24} height={24}/>}
                    bodyText="120,00 R$"
                />
                <CardInfo 
                    title="Energia Gasta"
                    icon={<Luminaria width={24} height={24}/>}
                    bodyText="500 W"
                />

                <PrimaryButton 
                    label='Novo Descarte'
                    onPress={goToNewDiscart}
                />
            </Main>

        </Container>
    );
}

export default Home;