import React, { ReactElement } from 'react';

import {
  Card, CardHeader, CardTitle, CardBody, CardValue,
} from './styles';

interface Props {
  title: string;
  icon: ReactElement;
  bodyText: string | number;
}

const CardInfo = ({ title, icon, bodyText }: Props):JSX.Element => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardBody>
      <CardValue>
        {bodyText}
      </CardValue>
    </CardBody>
  </Card>
);

export default CardInfo;
