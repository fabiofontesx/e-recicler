import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button, Label } from './styles';

interface Props extends TouchableOpacityProps {
    label: string;
}

const PrimaryButton = ({ label, ...restProps }: Props):JSX.Element => (
  <Button {...restProps}>
    <Label>
      {label}
    </Label>
  </Button>
);

export default PrimaryButton;
