import React, {FC}  from 'react';
import { ViewProps } from 'react-native';

import { StyledContainer } from './styles';

const Container:FC<ViewProps>  = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>;
}

export default Container;