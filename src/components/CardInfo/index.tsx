import React from 'react';
import { SvgProps } from "react-native-svg";

import { Card, CardHeader, CardTitle, CardBody, CardValue } from './styles';

interface Props  {
    title: string;
    icon: JSX.Element;
    bodyText: string;
}

const CardInfo = ({title, icon, bodyText}: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardBody>
                <CardValue> {bodyText} </CardValue>
            </CardBody>
        </Card>
    );
}

export default CardInfo;