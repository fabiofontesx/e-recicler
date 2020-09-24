import styled from 'styled-components/native';


export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 52px;
    background: ${props => props.theme.pallete.colors.secondary};
    margin-top: 20px;
    border-radius: 5px;
    flex-direction: row;

    align-items: center;
`;


export const Label = styled.Text`
    font-size: 24px;
    text-align: center;
    width: 100%;
    color: ${props => props.theme.pallete.colors.text};
    font-family: ${props => props.theme.fonts.robotoRegular};
`

