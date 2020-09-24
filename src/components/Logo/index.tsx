import React from 'react';

import { Image } from './styles';
const Logo = () => {
    return (
        <Image
            source={require('../../assets/logo.png')}
        />
    );
}

export default Logo;