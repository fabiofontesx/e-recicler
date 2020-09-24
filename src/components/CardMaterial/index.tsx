import React from 'react';

import { Card, Label } from './styles';

interface Props {
    materialName: string;
    icon: JSX.Element
}

const CardMaterial = ({ materialName, icon }: Props) => {
    return <Card>
        {icon}
        <Label> {materialName} </Label>
    </Card>;
}

export default CardMaterial;