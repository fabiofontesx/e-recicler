import styled from 'styled-components/native';

export const Card = styled.View`
    height: 20%;
    width: 60%;
    margin-top: 20px;
    border-radius: 10px;
    background: ${props => props.theme.pallete.colors.secondary};
`;

export const CardHeader = styled.View`
    width: 100%;
    height: 24px;
    flex-direction: row;
    padding-top: 2px;
`;

export const CardTitle = styled.Text`
    width: 85%;
    margin-top: 4px;
    padding-left: 30%;
    color: ${props => props.theme.pallete.colors.text};
    font-family: ${props => props.theme.fonts.robotoRegular};
`;


export const CardBody = styled.View`
    flex: 1;
    justify-content: center;
`;

export const CardValue = styled.Text`
    color: ${props => props.theme.pallete.colors.text};
    font-family: ${props => props.theme.fonts.robotoBold};
    font-size: 30px;
    text-align: center;
`;
