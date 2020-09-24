import styled from 'styled-components/native';

import   {default as PrimaryButtonOriginal} from '../../components/PrimaryButton';

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;

    padding-right: 20%;
    margin-top: 24px;
`;

export const ButtonBack = styled.TouchableOpacity`
    width: 28px;
    height: 28px;
`;

export const HeaderText = styled.Text`
    text-align: center;
    font-family: ${props => props.theme.fonts.ubuntuBold};
    color: ${props => props.theme.pallete.colors.text};
`;

export const Main = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 68px;
    align-items: center;
    justify-content: center;
`
export const MaterialContainer = styled.View`
    width: 50%;
    align-items: center;
    margin-bottom: 40px;
`


export const AmountContainer = styled.View`
    flex-direction: row;
    width: 168px;
    height: 40px;
    justify-content: space-around;
`;

export const AmountValue = styled.Text`
    width: 50%;
    height: 24px;
    align-self: flex-end;
    margin-bottom: 4px;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.pallete.colors.text};

    font-size: 16px;
    text-align: center;
    font-family: ${props=> props.theme.fonts.ubuntuRegular};
    color: ${props =>props.theme.pallete.colors.text};
`

export const PrimaryButton = styled(PrimaryButtonOriginal)`
    width: 90%;
    margin-top: 64px;
`