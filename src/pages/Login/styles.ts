import styled from 'styled-components/native';
import Constants from 'expo-constants';



export const ImageBackgroundContainer = styled.ImageBackground`
    flex: 1;
    flex-direction: row;
    margin-top: ${Constants.statusBarHeight}px;
    padding-bottom: 24px;
`;

export const BigLabel = styled.Text`
    font-size: 40px;
    margin-bottom: 32px;
    font-family: ${props => props.theme.fonts.ubuntuBold};
    color: ${props => props.theme.pallete.colors.text};
`

export const TextInput  = styled.TextInput`
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.pallete.colors.text};

    width: 80%;
    height: 52px;
    font-size: 20px;
    font-family: ${props => props.theme.fonts.robotoRegular};
    color: ${props => props.theme.pallete.colors.text};
`;

export const InputContainer = styled.View`
    width: 100%;
    align-items: center;
    align-self: flex-end;
`