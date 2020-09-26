import React, { useContext, useState } from 'react';

import Container from '../../components/Container';

import {
    Header,
    ButtonBack,
    HeaderText,
    Main,
    MaterialContainer,
    AmountContainer,
    AmountValue,
    PrimaryButton
} from './styles';

import AmountButton from '../../components/AmountButton';
import CardMaterial from '../../components/CardMaterial';

import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components/native';

import Vidro from '../../assets/vidro.svg';
import Plastico from '../../assets/plastico.svg';
import Papel from '../../assets/papel.svg';
import Metal from '../../assets/metal.svg';
import { useNavigation } from '@react-navigation/native';

type MaterialNames = "vidro" | "plastico" | "metal" | "papel";

import { heightPercentageToDP, widthPercentageToDP } from '../../utils/percentToDp';


const NewDiscart: React.FC = () => {
    const navigation = useNavigation();

    const [ammount, setAmmount] = useState({
        vidro: 0,
        plastico: 0,
        metal: 0,
        papel: 0
    });

    const handleIncrementMaterialAmmount = (materialName: MaterialNames) => {
        setAmmount({
            ...ammount,
            [materialName]: ammount[materialName] + 100
        });
    }

    const handleDecrementMaterialAmmount = (materialName: MaterialNames) => {
        if (ammount[materialName] > 0) {
            setAmmount({
                ...ammount,
                [materialName]: ammount[materialName] - 100
            });
        }
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    const themeContext = useContext(ThemeContext);
    return (
        <Container>
            <Header>
                <ButtonBack onPress={handleGoBack}>
                    <AntDesign name="arrowleft" size={28} color={themeContext.pallete.colors.text} />
                </ButtonBack>

                <HeaderText>
                    {`Adicione os materiais para \n descarte (em kilogramas)`}
                </HeaderText>
            </Header>

            <Main>
                <MaterialContainer>
                    <CardMaterial
                        materialName="Vidro"
                        icon={<Vidro
                            width={widthPercentageToDP('50%')}
                            height={heightPercentageToDP('15%')}
                        />}
                    />
                    <AmountContainer>
                        <AmountButton
                            operation="remove"
                            onPress={() => handleDecrementMaterialAmmount("vidro")}
                        />
                        <AmountValue>{ammount.vidro}</AmountValue>
                        <AmountButton
                            operation="add"
                            onPress={() => handleIncrementMaterialAmmount("vidro")}
                        />
                    </AmountContainer>
                </MaterialContainer>

                <MaterialContainer>
                    <CardMaterial
                        materialName="Plastico"
                        icon={<Plastico
                            width={widthPercentageToDP('50%')}
                            height={heightPercentageToDP('15%')}
                        />}
                    />
                    <AmountContainer>
                        <AmountButton
                            operation="remove"
                            onPress={() => handleDecrementMaterialAmmount("plastico")}

                        />
                        <AmountValue>{ammount.plastico}</AmountValue>

                        <AmountButton
                            operation="add"
                            onPress={() => handleIncrementMaterialAmmount("plastico")}
                        />
                    </AmountContainer>
                </MaterialContainer>

                <MaterialContainer>
                    <CardMaterial
                        materialName="Metal"
                        icon={<Metal
                            width={widthPercentageToDP('50%')}
                            height={heightPercentageToDP('15%')}
                        />}
                    />
                    <AmountContainer>
                        <AmountButton
                            operation="remove"
                            onPress={() => handleDecrementMaterialAmmount("metal")}
                        />
                        <AmountValue>{ammount.metal}</AmountValue>

                        <AmountButton
                            operation="add"
                            onPress={() => handleIncrementMaterialAmmount("metal")}
                        />
                    </AmountContainer>
                </MaterialContainer>

                <MaterialContainer>
                    <CardMaterial
                        materialName="Papel"
                        icon={<Papel
                            width={widthPercentageToDP('50%')}
                            height={heightPercentageToDP('15%')}
                        />}
                    />
                    <AmountContainer>
                        <AmountButton
                            operation="remove"
                            onPress={() => handleDecrementMaterialAmmount("papel")}

                        />
                        <AmountValue>{ammount.papel}</AmountValue>
                        <AmountButton
                            operation="add"
                            onPress={() => handleIncrementMaterialAmmount("papel")}
                        />
                    </AmountContainer>
                </MaterialContainer>

                <PrimaryButton label="Salvar" />

            </Main>

        </Container>
    );
}

export default NewDiscart;