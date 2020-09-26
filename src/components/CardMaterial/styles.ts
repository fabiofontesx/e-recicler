import styled from 'styled-components/native';

import { heightPercentageToDP, widthPercentageToDP, sizeMedianToDP } from '../../utils/percentToDp';

export const Card = styled.View`
    width: ${widthPercentageToDP('45%')}px;
    height: ${heightPercentageToDP('25%')}px;
    background: ${props => props.theme.pallete.colors.secondary};
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: ${heightPercentageToDP('1%')}px
`;

export const Label = styled.Text`
    font-family: ${props => props.theme.fonts.robotoBold};
    font-size: ${sizeMedianToDP('3%')}px;
    color: ${props => props.theme.pallete.colors.text};
`;