import styled from 'styled-components/native';

import {default as PrimaryButtonOriginal} from '../../components/PrimaryButton';
import { heightPercentageToDP, widthPercentageToDP, sizeMedianToDP } from '../../utils/percentToDp';

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
    justify-content: center;
    align-content: center;
`
export const MaterialContainer = styled.View`
    width: 50%;
    align-items: center;
    margin-bottom: ${heightPercentageToDP('3%')}px;
`


export const AmountContainer = styled.View`
    flex-direction: row;
    width: ${widthPercentageToDP('45%')}px;
    height: ${heightPercentageToDP('5%')}px;
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
    margin-top: ${heightPercentageToDP('3%')}px;
`