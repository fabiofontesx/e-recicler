import styled from 'styled-components/native';

export const Card = styled.View`
    width: 168px;
    height: 168px;
    background: ${props => props.theme.pallete.colors.secondary};
    margin-bottom: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
`;

export const Label = styled.Text`
    font-family: ${props => props.theme.fonts.robotoBold};
    font-size:20px;
    color: ${props => props.theme.pallete.colors.text};
`;