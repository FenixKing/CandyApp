import React from 'react';
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faArrowLeft,
    faKey,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
    Content,
    Title,
    Image,
    GoBackButton
} from './styled';


import { Button } from '../../components/Button';
import { Inputs } from '../../components/Input';

export const SingIn = ({ navigation }) => {
    return (
        <Content>
            <Image source={require('../../../assets/Candy.png')} />
            <GoBackButton onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} size={32} color='#fff' />
            </GoBackButton>
            <Title>{`Hello \nStacy`}</Title>
            <Inputs
                borderInput={{ borderColor: '#EF6A1040' }}
                icon={<FontAwesomeIcon icon={faEnvelope} color='#EF6A1040' />}
                placeholder='email@email.com'
                title='Email'
                content={styles.contenEmail}
                text={styles.text}
            />
            <Inputs
                borderInput={{ borderColor: '#EF6A1040' }}
                icon={<FontAwesomeIcon icon={faKey} color='#EF6A1040' />}
                placeholder='********'
                title='Password'
                secure={true}
                text={styles.text}
            />
            <LinearGradient
                colors={['#EF6A10', '#EF6A35', '#FE5A40']}
                style={styles.Button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Button
                    style={{ marginTop: 0 }}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Main')}
                    title='Sign in'
                    color={{ color: '#fff' }}
                />
            </LinearGradient>
        </Content>
    )
}

const styles = StyleSheet.create({
    Button: {
        width: 260,
        height: 60,
        borderRadius: 30,
        marginTop: 50
    },
    contenEmail: {
        marginTop: 180,
    },
    text: {
        marginBottom: -10,
        color: '#EF6A1040'
    },
})