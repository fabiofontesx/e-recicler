import React, { useContext } from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components/native';

import { Button } from './styles';

type Operation = "add" | "remove";

interface Props extends TouchableOpacityProps {
    operation: Operation
}

import {sizeMedianToDP} from '../../utils/percentToDp';

const AmountButton = ({ operation, ...restProps }: Props) => {
    const themeContext = useContext(ThemeContext);
    return <Button {...restProps}>
        {operation === "add" ?
            (<Ionicons name='ios-add-circle' size={sizeMedianToDP('5%')} color={themeContext.pallete.colors.text} />)
            :
            (<Ionicons name='ios-remove-circle' size={sizeMedianToDP('5%')} color={themeContext.pallete.colors.text} />)
        }
    </Button>;
}

export default AmountButton;