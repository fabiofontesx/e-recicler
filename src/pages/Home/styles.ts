import styled from 'styled-components/native';
import PrimaryButtonOriginal from '../../components/PrimaryButton';

import { heightPercentageToDP, sizeMedianToDP } from '../../utils/percentToDp';

export const WelcomeText = styled.Text`
  font-family: ${(props) => props.theme.fonts.ubuntuBold};
  font-size: ${sizeMedianToDP('6%')}px;
  color: ${(props) => props.theme.pallete.colors.text};
  margin-bottom: ${heightPercentageToDP('2%')}px;

`;

export const PrimaryButton = styled(PrimaryButtonOriginal)`
  margin-top: ${heightPercentageToDP('2%')}px;
`;

export const Main = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
