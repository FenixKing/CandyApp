import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Container,
    Content,
    Image,
    Title,
    ButtonSignUp,
    ButtonSignUpText,
    ButtonSignIn,
    ButtonSignInText,
    ForgotPassword,
    ForgotPasswordText
} from './styled';

import { Button } from '../../components/Button'

export const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <LinearGradient
                style={{ padding: 50, flex: 1 }}
                colors={['#EF6A35', '#FE5A40']}
            >
                <Image source={{ uri: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?cs=srgb&dl=photo-of-multicolored-abstract-painting-1193743.jpg&fm=jpg' }} />
                <Title>{`Hello,\nStace`}</Title>
                <Button
                    disabled
                    title='Sign up'
                    style={{ marginTop: 260, borderWidth: 2, borderColor: '#fff' }}
                    color={{ color: '#fff' }}
                ></Button>
                <Button
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('SingIn')}
                    title='Sign in'
                    style={{ backgroundColor: '#fff' }}
                    color={{ color: '#EF6A35' }}
                ></Button>
                <ForgotPassword>
                    <ForgotPasswordText>Forgot password?</ForgotPasswordText>
                </ForgotPassword>
            </LinearGradient>
        </Container >
    );
}