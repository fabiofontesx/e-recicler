import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingViewProps, Platform } from 'react-native';

import { Container } from './styles';

const ContainerKeyboardAvoiding = ({
  children,
  ...props
} : PropsWithChildren<KeyboardAvoidingViewProps>) => (
  <Container
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    {...props}
  >
    {children}
  </Container>
);

export default ContainerKeyboardAvoiding;
