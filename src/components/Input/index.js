import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Input } from 'react-native-elements';

import {
    Content,
    Text,
    GroupInput
} from './styled';

export const Inputs = ({ content, input, text, title, placeholder, icon, secure, borderInput }) => {
    return (
        <Content style={content}>
            <GroupInput>
                {/* {icon && <FontAwesomeIcon icon={icon} style={{ position: "absolute", zIndex: 15, }} />} */}
                <Input
                    label={title}
                    labelStyle={text}
                    placeholder={placeholder}
                    leftIcon={icon}
                    underlineColorAndroid="transparent"
                    secureTextEntry={secure}
                    inputStyle={input}
                    placeholderTextColor='#555'
                    inputContainerStyle={borderInput}
                />
            </GroupInput>
        </Content>
    )
}