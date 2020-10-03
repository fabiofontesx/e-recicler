import styled from 'styled-components/native';

import Constants from 'expo-constants';

export const StyledContainer  = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${props => props.theme.pallete.colors.primary};
    padding-top: ${Constants.statusBarHeight}px;
    align-items: center;
    justify-content: center;
`;