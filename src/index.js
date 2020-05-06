import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import Routes from './routes/index'

const MainNavigation = () => (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
)

export default MainNavigation;