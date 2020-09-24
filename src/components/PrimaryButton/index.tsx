import React from 'react';
import { Button, Label } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
    label: string;
}

const PrimaryButton = ({ label, ...restProps }: Props) => {
    return (
        <Button {...restProps}>
            <Label>
                {label}
            </Label>
        </Button>
    );
}

export default PrimaryButton;