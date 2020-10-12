import React, { ReactElement } from 'react';

import { Card, Label } from './styles';

interface Props {
  materialName: string;
  icon: ReactElement;
}

const CardMaterial = ({ materialName, icon }: Props):JSX.Element => (
  <Card>
    {icon}
    <Label>{materialName}</Label>
  </Card>
);

export default CardMaterial;
