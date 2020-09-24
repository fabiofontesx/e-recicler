import React from 'react';
import {  KeyboardAvoidingViewProps, Platform } from 'react-native';

import { Container } from './styles';

const ContainerKeyboardAvoiding:React.FC<KeyboardAvoidingViewProps> = ({children, ...props}) => {
    return <Container
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        {...props}
    >
        {children}
    </Container>;
}

export default ContainerKeyboardAvoiding;