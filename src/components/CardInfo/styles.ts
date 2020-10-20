import styled from 'styled-components/native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  sizeMedianToDP,
} from '../../utils/percentToDp';

export const Card = styled.View`
  height: ${heightPercentageToDP('25%')}px;
  width: ${widthPercentageToDP('70%')}px;
  border-radius: 10px;
  background: ${(props) => props.theme.pallete.colors.secondary};
  margin-top: ${heightPercentageToDP('2%')}px;
`;

export const CardHeader = styled.View`
  width: 100%;
  height: 24px;
  flex-direction: row;
  padding-top: 2px;
  justify-content: space-between;
  padding-right: 8px;
`;

export const CardTitle = styled.Text`
  flex-direction: row;
  padding-left: 8px;
  color: ${(props) => props.theme.pallete.colors.text};
  font-family: ${(props) => props.theme.fonts.robotoRegular};
`;

export const CardBody = styled.View`
  justify-content: center;
  flex: 1;
`;

export const CardValue = styled.Text`
  color: ${(props) => props.theme.pallete.colors.text};
  font-family: ${(props) => props.theme.fonts.robotoBold};
  font-size: ${sizeMedianToDP('5%')}px;
  text-align: center;
`;
