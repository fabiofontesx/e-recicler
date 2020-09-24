import React, { useContext, useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import { Platform } from 'react-native';

import { TextInput, InputContainer, ImageBackgroundContainer, BigLabel } from './styles';


import ContainerKeyboardAvoiding from '../../components/ContainerKeyboardAvoiding';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');

    const { login } = useAuth();
    const navigation = useNavigation();

    const handleLogin = () => {
        login(email);
    };

    return (
        <ContainerKeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ImageBackgroundContainer
                source={require('../../assets/reciclagem.png')}
                imageStyle={{ width: '100%', height: 572 }}
            >
                <InputContainer>
                    <BigLabel>E-Recicler</BigLabel>
                    <TextInput
                        placeholder="E-mail:"
                        placeholderTextColor="#C8E6C9"
                        onChangeText={setEmail}
                    />
                    <PrimaryButton
                        label="Login"
                        onPress={handleLogin}
                    />
                </InputContainer>
            </ImageBackgroundContainer>
        </ContainerKeyboardAvoiding>
    );
}

export default Login;