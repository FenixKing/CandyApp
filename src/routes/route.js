import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screen/HomeScreen';
import { SingIn } from '../screen/SingInScreen';
import { Main } from '../screen/MainScreen';

const Stack = createStackNavigator();

export const Route = () => {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SingIn" component={SingIn} />
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    )
}

