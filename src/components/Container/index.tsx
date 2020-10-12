import React, { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';

import StyledContainer from './styles';

const Container = ({ children }: PropsWithChildren<ViewProps>) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
