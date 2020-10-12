import React, { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';

import StyledContainer from './styles';

const Container = ({ children }: PropsWithChildren<ViewProps>):JSX.Element => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
