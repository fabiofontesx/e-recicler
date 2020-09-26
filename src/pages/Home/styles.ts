import styled from 'styled-components/native';
import { default as PrimaryButtonOriginal } from '../../components/PrimaryButton';

import { heightPercentageToDP, widthPercentageToDP, sizeMedianToDP } from '../../utils/percentToDp';

export const WelcomeText = styled.Text`
  font-family: ${props => props.theme.fonts.ubuntuBold};
  font-size: ${sizeMedianToDP('7%')}px;
  color: ${props => props.theme.pallete.colors.text};
`;


export const PrimaryButton = styled(PrimaryButtonOriginal)`
  margin-top: ${heightPercentageToDP('5%')}px;
`;

export const Main = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

