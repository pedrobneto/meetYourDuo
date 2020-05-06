import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='Home' component={HomeScreen} />
    </AppStack.Navigator>
)

export default AppRoutes;