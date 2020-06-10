import React from 'react';
import {
    Buttons,
    ButtonsText,
} from './styled';

export const Button = ({ onPress, style, title, color, more }) => {
    return (
        <Buttons style={style} onPress={onPress} activeOpacity={0.8}>
            <ButtonsText style={color}>{title}</ButtonsText>
            {more}
        </Buttons>
    );
}