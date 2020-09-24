import styled from 'styled-components/native';

export const WelcomeText = styled.Text`
  font-family: ${props => props.theme.fonts.ubuntuBold};
  font-size: 40px;
  color: ${props => props.theme.pallete.colors.text};
`;