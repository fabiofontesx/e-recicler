import React from 'react';

import { Image } from './styles';
const Logo = () => {
    return (
        <Image
            source={require('../../assets/logo.png')}
            resizeMode="contain"
        />
    );
}

export default Logo;